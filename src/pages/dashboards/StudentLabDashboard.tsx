
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGeoAware, CONTINENT_HUBS } from '@/contexts/GeoAwareContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, Beaker, Users, Globe } from 'lucide-react';

const StudentLabDashboard = () => {
  const { userMetadata, signOut } = useAuth();
  const { location } = useGeoAware();
  
  const regionHub = location?.continent ? CONTINENT_HUBS[location.continent] : 'Global Hub';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-medium">Student Lab Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">{regionHub} | {location?.country || 'Global'}</span>
            <Button variant="outline" size="sm" onClick={signOut}>Sign Out</Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container py-8 px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome, {userMetadata?.role || 'Student'}</h2>
          <p className="text-muted-foreground">Your learning journey continues at the {regionHub}</p>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Learning Progress</CardTitle>
              <CardDescription>Your course completion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">67%</div>
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="w-full h-2 bg-muted mt-2 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '67%' }}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Experiments</CardTitle>
              <CardDescription>Currently running</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">3</div>
                <Beaker className="h-6 w-6 text-indigo-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Study Group</CardTitle>
              <CardDescription>Member count</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">8</div>
                <Users className="h-6 w-6 text-amber-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Global Rank</CardTitle>
              <CardDescription>Among student peers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">#342</div>
                <Globe className="h-6 w-6 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activity */}
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4 mb-8">
          <Card>
            <CardHeader className="py-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <div>
                    <CardTitle className="text-base">Completed Module: Quantum Computing Basics</CardTitle>
                    <CardDescription className="text-xs">Yesterday at 4:30 PM</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Beaker className="h-5 w-5 text-indigo-500" />
                  <div>
                    <CardTitle className="text-base">Started Experiment: Neural Interface Simulation</CardTitle>
                    <CardDescription className="text-xs">Today at 10:15 AM</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Continue</Button>
              </div>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-amber-500" />
                  <div>
                    <CardTitle className="text-base">Joined Study Group: Advanced Nanorobotics</CardTitle>
                    <CardDescription className="text-xs">3 days ago</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Open</Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentLabDashboard;
