
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: string;
  features: string[];
  audience: string;
  buttonText: string;
  planId: string;
  supabaseRole: string;
  popular?: boolean;
  customPrice?: boolean;
  color: string;
  onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  name,
  description,
  price,
  interval,
  features,
  audience,
  buttonText,
  popular = false,
  customPrice = false,
  color,
  onSelect
}) => {
  return (
    <Card className={`bg-gradient-to-br ${color} border relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-bl-md rounded-tr-md rounded-br-none rounded-tl-none bg-primary text-primary-foreground px-3 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        <div className="mt-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">${price}</span>
            {price > 0 && (
              <span className="text-muted-foreground ml-2">/ {interval}</span>
            )}
          </div>
          {customPrice && (
            <p className="text-sm text-muted-foreground mt-1">or custom amount</p>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{audience}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={onSelect}
          variant={popular ? "default" : "outline"}
          className="w-full"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
