
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: 'primary' | 'secondary' | 'accent';
  soon?: boolean;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon,
  link,
  color,
  soon = false
}) => {
  const colorClasses = {
    primary: 'from-primary/20 to-primary/5 border-primary/10',
    secondary: 'from-secondary/20 to-secondary/5 border-secondary/10',
    accent: 'from-accent/20 to-accent/5 border-accent/10'
  };

  return (
    <Card className={`bg-gradient-to-br ${colorClasses[color]} hover:shadow-lg hover:shadow-${color}/10 transition-all border`}>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 mb-4 rounded-full bg-background flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {soon && <div className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-muted">Coming Soon</div>}
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          variant={soon ? "outline" : "default"} 
          className={soon ? "opacity-70" : ""}
          disabled={soon}
        >
          <Link to={link}>Explore {title}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ModuleCard;
