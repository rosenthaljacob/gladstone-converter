import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const METRIC_UNITS = [
  {
    name: "Millimeters",
    abbreviation: "mm",
    lengthInMillimeters: 1,
  },
  {
    name: "Centimeters",
    abbreviation: "cm",
    lengthInMillimeters: 10,
  },
  {
    name: "Meters",
    abbreviation: "m",
    lengthInMillimeters: 1000,
  },
  {
    name: "Kilometers",
    abbreviation: "km",
    lengthInMillimeters: 1000000,
  },
] as const;
