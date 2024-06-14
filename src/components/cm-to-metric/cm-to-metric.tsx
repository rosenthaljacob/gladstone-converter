import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import CmToMetricResult from "./cm-to-metric-result";
import DenominatorSelector from "./denominator-selector";

export default function CmToMetric() {
  const [input, setInput] = useState<number | null>(null);
  const [maxDenominator, setMaxDenominator] = useState(16);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value === "" ? null : Number(value));
  };
  return (
    <div className="grid gap-4 p-4">
      <DenominatorSelector
        denominator={maxDenominator}
        setDenominator={setMaxDenominator}
      />
      <div className="grid gap-2">
        <Label>Centimeters</Label>
        <Input
          placeholder="cm"
          type="number"
          value={input ?? ""}
          onChange={handleInputChange}
        />
      </div>
      <CmToMetricResult imperialValue={input} maxDenominator={maxDenominator} />
    </div>
  );
}
