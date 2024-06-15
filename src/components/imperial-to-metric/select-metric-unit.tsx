import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { METRIC_UNITS } from "@/lib/utils";

type UnitAbb = (typeof METRIC_UNITS)[number]["abbreviation"];

interface SelectMetricUnitProps {
  unitAbb: string;
  setUnitAbb: (value: UnitAbb) => void;
}

export default function SelectMetricUnit({
  unitAbb,
  setUnitAbb,
}: SelectMetricUnitProps) {
  return (
    <Select
      value={unitAbb}
      onValueChange={(value: UnitAbb) => setUnitAbb(value)}
    >
      <SelectTrigger className="w-20">
        <SelectValue>{unitAbb}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {METRIC_UNITS.map((unit) => (
            <SelectItem key={unit.abbreviation} value={unit.abbreviation}>
              {unit.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
