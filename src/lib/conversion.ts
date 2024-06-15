export function convertMillimetersToImperial(mm: number) {
  const CM_TO_FOOT = 0.00328084;

  const feet = mm * CM_TO_FOOT;
  const feetFloor = Math.floor(feet);

  const inches = (feet - feetFloor) * 12;
  const inchesFloor = Math.floor(inches);

  const decimal = inches - inchesFloor;

  return {
    feet: feetFloor,
    inches: inchesFloor,
    decimal,
  };
}

export function findClosestFraction(decimal: number, maxDenominator = 64) {
  const denominatorSequence = generateDenominatorSequence(maxDenominator);

  return denominatorSequence.reduce(
    (acc, denominator) => {
      const numerator = Math.round(decimal * denominator);
      const fraction = numerator / denominator;
      const difference = decimal - fraction;

      if (Math.abs(difference) < Math.abs(acc.difference)) {
        return {
          numerator,
          denominator,
          difference,
        };
      }

      return acc;
    },
    {
      numerator: 0,
      denominator: 1,
      difference: Infinity,
    }
  );
}

function generateDenominatorSequence(maxDenominator: number) {
  const output = [1];

  while (output[output.length - 1] < maxDenominator) {
    output.push(output[output.length - 1] * 2);
  }
  return output;
}
