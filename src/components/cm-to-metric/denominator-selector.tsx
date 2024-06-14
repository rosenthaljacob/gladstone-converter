import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";

interface DenominatorSelectorProps {
  denominator: number;
  setDenominator: React.Dispatch<React.SetStateAction<number>>;
}

export default function DenominatorSelector({
  denominator,
  setDenominator,
}: DenominatorSelectorProps) {
  const handleDenominatorChange = (value: string) => {
    setDenominator(Number(value));
  };

  return (
    <div className="grid gap-2">
      <Label>Max denominator</Label>
      <Tabs value={String(denominator)} onValueChange={handleDenominatorChange}>
        <TabsList className="w-full">
          <TabsTrigger className="flex-1" value="4">
            1/4
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="8">
            1/8
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="16">
            1/16
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="32">
            1/32
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="64">
            1/64
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
