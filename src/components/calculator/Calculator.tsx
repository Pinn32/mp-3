import type { ChangeEvent } from "react";
import useCalculator from "../../hooks/useCalculator";
import type { Operation } from "../../hooks/useCalculator";

type OperationButton = {
  label: string;
  operation: Operation;
};

const operationButtons: OperationButton[] = [
  { label: "+", operation: "add" },
  { label: "-", operation: "subtract" },
  { label: "*", operation: "multiply" },
  { label: "/", operation: "divide" },
  { label: "**", operation: "power" }
];

function Calculator() {
  const {
    firstInput,
    secondInput,
    output,
    outputColor,
    setFirstInput,
    setSecondInput,
    runOperation,
    clearCalculator
  } = useCalculator();

  const handleFirstChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFirstInput(event.target.value);
  };

  const handleSecondChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSecondInput(event.target.value);
  };

  return (
    <section className="calculator-section">
      <h2 className="calculator-title">JavaScript Calculator</h2>

      <div className="calculator-container">
        <div className="input-group">
          <label htmlFor="first-number">Enter the first number:</label>
          <input
            id="first-number"
            type="text"
            placeholder="First number"
            value={firstInput}
            onChange={handleFirstChange}
          />

          <label htmlFor="second-number">Enter the second number:</label>
          <input
            id="second-number"
            type="text"
            placeholder="Second number"
            value={secondInput}
            onChange={handleSecondChange}
          />
        </div>

        <div className="button-group">
          {operationButtons.map((button) => (
            <button key={button.operation} onClick={() => runOperation(button.operation)}>
              {button.label}
            </button>
          ))}
          <button onClick={clearCalculator}>Clear</button>
        </div>

        <div className="output-group">
          <h3 id="output" style={{ color: outputColor }}>
            {output}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
