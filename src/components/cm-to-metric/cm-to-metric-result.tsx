import React from "react";

import { convertCmToImperial, findClosestFraction } from "@/lib/conversion";
import { Card } from "../ui/card";

interface ResultDisplayProps {
  imperialValue: number | null;
  maxDenominator: number;
}

export default function CmToMetricResult({
  imperialValue,
  maxDenominator,
}: ResultDisplayProps) {
  if (imperialValue === null) {
    return (
      <Card className="p-6 h-32 flex items-center">
        <p className="w-full text-center text-muted-foreground text-lg">
          Please enter a value in centimeters
        </p>
      </Card>
    );
  }

  const imperial = imperialValue ? convertCmToImperial(imperialValue) : null;
  const fraction = imperial
    ? findClosestFraction(imperial.decimal, maxDenominator)
    : null;

  return (
    <Card className="p-6 h-32 flex items-center">
      <p className="w-full text-center text-2xl">
        <span className="">{imperial?.feet ?? "-"}</span>
        <span className="text-lg text-muted-foreground">ft</span>{" "}
        <span>{imperial?.inches ?? "-"}</span>
        <span>
          <sup>{fraction?.numerator ?? "-"}</sup>
          <span className="text-muted-foreground">&frasl;</span>
          <sub>{fraction?.denominator ?? "-"}</sub>
        </span>
        <span className="text-lg text-muted-foreground">in</span>
      </p>
    </Card>
  );
}
