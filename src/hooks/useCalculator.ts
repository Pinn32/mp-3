import { useMemo, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type Operation = "add" | "subtract" | "multiply" | "divide" | "power";

type ParsedInputs = {
  first: number;
  second: number;
};

type UseCalculatorReturn = {
  firstInput: string;
  secondInput: string;
  output: string;
  outputColor: string;
  setFirstInput: Dispatch<SetStateAction<string>>;
  setSecondInput: Dispatch<SetStateAction<string>>;
  runOperation: (operation: Operation) => void;
  clearCalculator: () => void;
};

function loopPower(base: number, exponent: number): number {
  let result = 1;
  if (exponent === 0) {
    return 1;
  }
  if (exponent > 0) {
    for (let i = 0; i < exponent; i += 1) {
      result *= base;
    }
    return result;
  }
  for (let i = 0; i < Math.abs(exponent); i += 1) {
    result *= base;
  }
  return 1 / result;
}

function parseInputs(firstInput: string, secondInput: string): ParsedInputs {
  return {
    first: Number.parseFloat(firstInput),
    second: Number.parseFloat(secondInput)
  };
}

export type { Operation, UseCalculatorReturn };

export default function useCalculator(): UseCalculatorReturn {
  const [firstInput, setFirstInput] = useState<string>("");
  const [secondInput, setSecondInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const outputColor = useMemo<string>(() => {
    const value = Number.parseFloat(output);
    if (Number.isNaN(value)) {
      return "#240807";
    }
    return value < 0 ? "red" : "#240807";
  }, [output]);

  const runOperation = (operation: Operation): void => {
    const { first, second } = parseInputs(firstInput, secondInput);

    if (Number.isNaN(first) || Number.isNaN(second)) {
      setOutput("Please enter valid numbers.");
      return;
    }

    if (operation === "divide" && second === 0) {
      setOutput("Cannot divide by zero");
      return;
    }

    const operations: Record<Operation, () => number> = {
      add: () => first + second,
      subtract: () => first - second,
      multiply: () => first * second,
      divide: () => first / second,
      power: () => loopPower(first, second)
    };

    setOutput(String(operations[operation]()));
  };

  const clearCalculator = (): void => {
    setFirstInput("");
    setSecondInput("");
    setOutput("");
  };

  return {
    firstInput,
    secondInput,
    output,
    outputColor,
    setFirstInput,
    setSecondInput,
    runOperation,
    clearCalculator
  };
}
