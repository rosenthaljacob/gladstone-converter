import React from "react";

import {
  convertMillimetersToImperial,
  findClosestFraction,
} from "@/lib/conversion";
import { Card } from "../ui/card";

interface ResultDisplayProps {
  millimeterValue: number | null;
  maxDenominator: number;
  unitName: string;
}

export default function MetricToImperialResult({
  millimeterValue,
  maxDenominator,
  unitName,
}: ResultDisplayProps) {
  if (millimeterValue === null) {
    return (
      <Card className="p-6 h-32 flex items-center">
        <p className="w-full text-center text-muted-foreground text-lg">
          Please enter a value in {unitName}
        </p>
      </Card>
    );
  }

  const imperial = millimeterValue
    ? convertMillimetersToImperial(millimeterValue)
    : null;
  const fraction = imperial
    ? findClosestFraction(imperial.decimal, maxDenominator)
    : null;

  return (
    <Card className="p-6 h-32 flex items-center">
      <div className="grid gap-2 mx-auto">
        <p className="w-full text-center text-2xl flex items-end">
          <span className="">{imperial?.feet ?? "-"}</span>
          <span className="text-lg text-muted-foreground px-0.5">ft</span>&nbsp;
          <span>{imperial?.inches ?? "-"}</span>
          {fraction?.numerator !== 0 && (
            <span className="flex flex-col text-[0.75rem] leading-[1rem] w-4 pl-0.5">
              <span>{fraction?.numerator ?? "-"}</span>
              <div className="border-b border-muted-foreground"></div>
              <span>{fraction?.denominator ?? "-"}</span>
            </span>
          )}
          <span className="text-lg text-muted-foreground pl-0.5">in</span>
        </p>
        {fraction?.difference !== 0 && (
          <p className="text-xs text-primary">
            {(fraction?.difference ?? 0) > 0 ? "+" : "-"}
            {Math.abs(fraction?.difference ?? 0).toFixed(6)} of an inch
          </p>
        )}
      </div>
    </Card>
  );
}
