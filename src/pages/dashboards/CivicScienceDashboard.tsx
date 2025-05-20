
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGeoAware, CONTINENT_HUBS } from '@/contexts/GeoAwareContext';
import { Button } from '@/components/ui/button';
import { Landmark } from 'lucide-react';

const CivicScienceDashboard = () => {
  const { userMetadata, signOut } = useAuth();
  const { location } = useGeoAware();
  
  const regionHub = location?.continent ? CONTINENT_HUBS[location.continent] : 'Global Hub';

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-2">
            <Landmark className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-medium">Civic Science Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">{regionHub} | {location?.country || 'Global'}</span>
            <Button variant="outline" size="sm" onClick={signOut}>Sign Out</Button>
          </div>
        </div>
      </header>
      
      <main className="container py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Civic Science Dashboard</h1>
        <p className="text-muted-foreground mb-8">Welcome to your governance workspace at {regionHub}</p>
        
        <div className="p-8 text-center bg-muted rounded-lg">
          <h2 className="text-xl font-medium mb-2">Civic Tools Coming Soon</h2>
          <p>Your governance tools and resources are being prepared.</p>
        </div>
      </main>
    </div>
  );
};

export default CivicScienceDashboard;
