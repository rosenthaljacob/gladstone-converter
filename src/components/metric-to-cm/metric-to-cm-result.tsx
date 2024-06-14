import React from "react";
import { Card } from "../ui/card";

interface MetricToCmResultProps {
  cm: number;
}

export default function MetricToCmResult({ cm }: MetricToCmResultProps) {
  return (
    <Card className="p-6 h-24 flex items-center">
      <p className="w-full text-center text-2xl">
        <span>{cm}</span>
        <span className="text-lg text-muted-foreground">cm</span>
      </p>
    </Card>
  );
}
