import type { ChangeEvent } from "react";
import useCalculator from "../../hooks/useCalculator";
import type { Operation } from "../../hooks/useCalculator";
import styled from "styled-components";

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

// Styles
const StyledCalculator = styled.section `
  padding: 2% 5%;
  margin: 2% 5% 0 5%;
  max-width: 90vw;
  
  h2 {
    text-align: center;
    font-size: calc(16px + 1vw);
    margin-bottom: 4%;
  }
`

const StyledCalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(10px + 1vw);
  padding: 5%;
  border-radius: calc(2px + 1vw);
  border: calc(2px + 1vw) solid darkseagreen;
  margin-bottom: 3%;
`

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(8px + 1vw);
  flex-wrap: wrap;
  
  label {
    font-size: calc(8px + 1vw);
  }

  input {
      flex: 1;
      padding: 3%;
      font-size: calc(10px + 0.5vw);
      border: calc(1px + 0.1vw) solid darkseagreen;
      border-radius: calc(2px + 0.2vw);
      color: dimgrey;

      &:focus { /* when an input box is selected */
          border-color: seagreen;
          outline: none;
      }
  }  
    
  @media (max-width: 750px) {
    label {
      font-size: calc(10px + 1vw);
    }

    input {
      font-size: calc(8px + 1vw);
      border-radius: calc(2px + 0.5vw);
    }
  }
`

const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(4px + 1vw);
  justify-content: center;

  button {
    padding: 3% 8%;
    font-size: calc(10px + 0.5vw);
    border: none;
    border-radius: calc(2px + 0.5vw);
    background-color: darkseagreen;
    color: white;
    cursor: pointer;
  }
  
  @media (max-width: 750px) {
    button {
      padding: 3% 10%;
      font-size: calc(10px + 1vw);
      border-radius: calc(2px + 1vw);
    }
  }
`
const StyledOutputGroup = styled.div`
  text-align: center;
  margin-top: calc(10px + 1vw);

  h3 {
    font-size: calc(12px + 1vw);
    padding: 1%;
    min-height: 5vh;
  }
`

// export function
export default function Calculator() {
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
    <StyledCalculator>
      <h2>JavaScript Calculator</h2>
      <StyledCalculatorContainer>
        <StyledInputGroup>
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
        </StyledInputGroup>

        <StyledButtonGroup>
          {operationButtons.map((button) => (
            <button key={button.operation} onClick={() => runOperation(button.operation)}>
              {button.label}
            </button>
          ))}
          <button onClick={clearCalculator}>Clear</button>
        </StyledButtonGroup>

        <StyledOutputGroup>
          <h3 style={{ color: outputColor }}>
            {output}
          </h3>
        </StyledOutputGroup>
      </StyledCalculatorContainer>
    </StyledCalculator>
  );
}

