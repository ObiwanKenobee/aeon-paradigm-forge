import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

// Define the location data types
export interface GeoLocation {
  continent: string;
  country: string;
  region?: string;
  detectionMethod: 'api' | 'edge-function' | 'manual';
}

// Define the context interface
interface GeoAwareContextType {
  location: GeoLocation | null;
  isLoading: boolean;
  error: string | null;
  refreshLocation: () => Promise<void>;
  setManualLocation: (location: Partial<GeoLocation>) => Promise<void>;
}

// Create the context
const GeoAwareContext = createContext<GeoAwareContextType | undefined>(undefined);

// Continent mapping to hub locations
export const CONTINENT_HUBS: Record<string, string> = {
  'Africa': 'Nairobi Hub',
  'South America': 'São Paulo Node',
  'Asia': 'Bangalore Node',
  'Europe': 'Berlin Node',
  'North America': 'San Francisco Node',
  'Oceania': 'Sydney Node',
  'Antarctica': 'Virtual Hub',
};

export function GeoAwareProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user, userMetadata } = useAuth();

  // Function to get user location
  const detectLocation = async (): Promise<GeoLocation> => {
    try {
      // First check if location exists in user metadata
      if (userMetadata?.location) {
        return {
          continent: userMetadata.location.continent,
          country: userMetadata.location.country,
          region: userMetadata.location.region,
          detectionMethod: 'manual',
        };
      }
      
      // Otherwise use a geolocation API
      const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY_HERE');
      
      if (!response.ok) {
        throw new Error('Failed to fetch location data');
      }
      
      const data = await response.json();
      
      return {
        continent: data.continent_name,
        country: data.country_name,
        region: data.state_prov,
        detectionMethod: 'api',
      };
    } catch (err) {
      console.error('Error detecting location:', err);
      // Fallback to a default location
      return {
        continent: 'Africa',
        country: 'Kenya',
        region: 'Nairobi',
        detectionMethod: 'manual',
      };
    }
  };

  // Function to refresh location data
  const refreshLocation = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const locationData = await detectLocation();
      setLocation(locationData);
      
      // If the user is authenticated, save this location to their metadata
      if (user) {
        await saveLocationToUserMetadata(locationData);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to manually set location
  const setManualLocation = async (manualLocation: Partial<GeoLocation>) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Merge with existing location data
      const updatedLocation: GeoLocation = {
        ...location!,
        ...manualLocation,
        detectionMethod: 'manual',
      };
      
      setLocation(updatedLocation);
      
      // If user is authenticated, update their metadata
      if (user) {
        await saveLocationToUserMetadata(updatedLocation);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to save location to user metadata
  const saveLocationToUserMetadata = async (locationData: GeoLocation) => {
    try {
      const { continent, country, region } = locationData;
      
      const { error } = await supabase.auth.updateUser({
        data: {
          location: { continent, country, region }
        }
      });
      
      if (error) throw error;
    } catch (err) {
      console.error('Error saving location to metadata:', err);
    }
  };

  // Initialize location data when component mounts
  useEffect(() => {
    refreshLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Value for the context
  const contextValue: GeoAwareContextType = {
    location,
    isLoading,
    error,
    refreshLocation,
    setManualLocation,
  };

  return (
    <GeoAwareContext.Provider value={contextValue}>
      {children}
    </GeoAwareContext.Provider>
  );
}

// Custom hook for using the geo-aware context
export function useGeoAware() {
  const context = useContext(GeoAwareContext);
  if (context === undefined) {
    throw new Error('useGeoAware must be used within a GeoAwareProvider');
  }
  return context;
}
