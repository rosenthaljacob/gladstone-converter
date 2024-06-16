import React from "react";
import { Card } from "../ui/card";

interface ImperialToMetricResultProps {
  cm: number;
}

export default function ImperialToMetricResult({
  cm,
}: ImperialToMetricResultProps) {
  return (
    <Card className="p-6 h-24 flex items-center">
      <p className="w-full text-center text-2xl">
        <span>{cm}</span>
        <span className="text-lg text-muted-foreground ml-0.5">cm</span>
      </p>
    </Card>
  );
}
