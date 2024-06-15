import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ImperialToMetricResult from "./imperial-to-metric-result";
import DenominatorSelector from "./denominator-selector";
import SelectMetricUnit from "./select-metric-unit";

import { METRIC_UNITS } from "@/lib/utils";

type UnitAbb = (typeof METRIC_UNITS)[number]["abbreviation"];

export default function ImperialToMetric() {
  const [millimeters, setMillimeters] = useState<number | null>(null);
  const [maxDenominator, setMaxDenominator] = useState(16);

  const [unitAbb, setUnitAbb] = useState<UnitAbb>(METRIC_UNITS[0].abbreviation);
  const unit = METRIC_UNITS.find((u) => u.abbreviation === unitAbb)!;

  const unitToMillimeters = (value: number) => value * unit.lengthInMillimeters;
  const millimetersToUnit = (value: number) => value / unit.lengthInMillimeters;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMillimeters(value === "" ? null : unitToMillimeters(Number(value)));
  };

  const handleUnitChange = (value: UnitAbb) => {
    const newUnit = METRIC_UNITS.find((u) => u.abbreviation === value)!;

    // Convert the current millimeter value to the new unit
    if (millimeters !== null) {
      setMillimeters(
        (millimeters / unit.lengthInMillimeters) * newUnit.lengthInMillimeters
      );
    }

    setUnitAbb(value);
  };

  const inputValue = (() => {
    if (millimeters === null) return "";

    return millimetersToUnit(millimeters);
  })();

  return (
    <div className="grid gap-4 p-4">
      <DenominatorSelector
        denominator={maxDenominator}
        setDenominator={setMaxDenominator}
      />
      <div className="grid gap-2">
        <Label>Length</Label>
        <div className="flex gap-2">
          <Input
            className="flex-1"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <SelectMetricUnit unitAbb={unitAbb} setUnitAbb={handleUnitChange} />
        </div>
      </div>
      <ImperialToMetricResult
        unitName={unit.name.toLocaleLowerCase()}
        millimeterValue={millimeters}
        maxDenominator={maxDenominator}
      />
    </div>
  );
}
