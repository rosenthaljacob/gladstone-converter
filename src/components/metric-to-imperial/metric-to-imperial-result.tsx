import React from "react";
import { Card } from "../ui/card";

interface MetricToImperialResultProps {
  cm: number;
}

export default function MetricToImperialResult({
  cm,
}: MetricToImperialResultProps) {
  return (
    <Card className="p-6 h-24 flex items-center">
      <p className="w-full text-center text-2xl">
        <span>{cm}</span>
        <span className="text-lg text-muted-foreground">cm</span>
      </p>
    </Card>
  );
}
