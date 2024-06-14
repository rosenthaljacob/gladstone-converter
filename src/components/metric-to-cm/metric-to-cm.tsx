import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import MetricToCmResult from "./metric-to-cm-result";

interface MetricToCmInputState {
  feet: number | null;
  inches: number | null;
  numerator: number | null;
  denominator: number | null;
}

export default function MetricToCm() {
  const [input, setInput] = useState<MetricToCmInputState>({
    feet: null,
    inches: null,
    numerator: null,
    denominator: null,
  });

  const handleInputChange =
    (key: keyof MetricToCmInputState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInput({
        ...input,
        [key]: value === "" ? null : Number(value),
      });
    };

  const cm = (() => {
    const FEET_TO_CM = 30.48;
    const INCHES_TO_CM = FEET_TO_CM / 12;

    const feetCm = (input.feet ?? 0) * FEET_TO_CM;
    const inchesCm = (input.inches ?? 0) * INCHES_TO_CM;
    const fractionCm =
      ((input.numerator ?? 0) / (input.denominator ?? 0)) * INCHES_TO_CM;

    return (
      feetCm +
      inchesCm +
      (isNaN(fractionCm) || fractionCm === Infinity ? 0 : fractionCm)
    );
  })();

  return (
    <div className="p-4 grid gap-4">
      <div className="grid gap-2">
        <Label>Feet</Label>
        <Input
          placeholder="ft"
          type="number"
          value={input.feet ?? ""}
          onChange={handleInputChange("feet")}
        />
      </div>
      <div className="grid gap-2">
        <Label>Inches</Label>
        <div className="flex items-center gap-2">
          <Input
            className="flex-1"
            placeholder="in"
            type="number"
            value={input.inches ?? ""}
            onChange={handleInputChange("inches")}
          />
          <div className="grid gap-2 flex-1">
            <Input
              placeholder="numerator"
              type="number"
              value={input.numerator ?? ""}
              onChange={handleInputChange("numerator")}
            />
            <span className="border-b"></span>
            <Input
              placeholder="denominator"
              type="number"
              value={input.denominator ?? ""}
              onChange={handleInputChange("denominator")}
            />
          </div>
        </div>
      </div>
      <div className="pt-6">
        <MetricToCmResult cm={cm} />
      </div>
    </div>
  );
}
