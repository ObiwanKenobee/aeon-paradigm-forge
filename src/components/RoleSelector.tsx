
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useGeoAware, CONTINENT_HUBS } from '@/contexts/GeoAwareContext';
import { Microscope, GraduationCap, HeartHandshake, Building, Landmark, Shield } from 'lucide-react';

interface RoleOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const RoleSelector: React.FC = () => {
  const { updateUserRole } = useAuth();
  const { location } = useGeoAware();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleOptions: RoleOption[] = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access learning tools, simulators, and connect with mentors',
      icon: <GraduationCap size={28} />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'builder',
      title: 'Builder',
      description: 'Use CAD tools, kit configurators, and collaborate on projects',
      icon: <Microscope size={28} />,
      color: 'bg-green-50 text-green-600',
    },
    {
      id: 'mentor',
      title: 'Mentor',
      description: 'Guide students, review projects, and contribute knowledge',
      icon: <HeartHandshake size={28} />,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      id: 'ngo',
      title: 'NGO',
      description: 'Access impact reporting tools and funding opportunities',
      icon: <Building size={28} />,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'gov',
      title: 'Government Agency',
      description: 'Use regulation tools and open data dashboards',
      icon: <Landmark size={28} />,
      color: 'bg-red-50 text-red-600',
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Manage users, monitor labs, and review content',
      icon: <Shield size={28} />,
      color: 'bg-gray-50 text-gray-600',
    },
  ];

  const handleRoleSelection = (roleId: string) => {
    setSelectedRole(roleId);
  };

  const handleSubmit = async () => {
    if (!selectedRole) return;
    
    setIsSubmitting(true);
    try {
      await updateUserRole(selectedRole);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating user role:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const continentHub = location?.continent ? CONTINENT_HUBS[location.continent] || 'Global Hub' : 'Global Hub';

  return (
    <div className="cosmic-gradient min-h-screen py-12">
      <div className="fractal-pattern container max-w-4xl mx-auto px-4">
        <Card className="border-border bg-card/60 backdrop-blur-md shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold glow">Choose Your Role</CardTitle>
            <CardDescription className="text-xl mt-2">
              Welcome to {continentHub}! Select the role that best describes your work.
            </CardDescription>
          </CardHeader>
          <CardContent className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roleOptions.map((role) => (
                <div
                  key={role.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                    selectedRole === role.id
                      ? 'border-primary bg-primary/10'
                      : 'border-transparent hover:border-primary/30'
                  }`}
                  onClick={() => handleRoleSelection(role.id)}
                >
                  <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-3 ${role.color}`}>
                    {role.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button 
              size="lg"
              disabled={!selectedRole || isSubmitting}
              onClick={handleSubmit}
              className="px-8 py-6 text-lg font-medium"
            >
              {isSubmitting ? 'Setting Up Your Dashboard...' : 'Continue to Dashboard'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RoleSelector;
