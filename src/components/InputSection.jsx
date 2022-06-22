import React, { useContext, useState } from "react";
import { GlobalTotal } from "./GlobalVariables";
import { Input, Button, Alert } from "antd";
const InputSection = ({ setInput, handlesubmit, input, outofbudget }) => {
  const GlobalArray = useContext(GlobalTotal);
  const [nothing, setNothing] = useState(false);
  const [nothingEntered, setNothingEntered] = useState(false);
  return (
    <>
      <Input
        placeholder="enter value"
        id="value"
        onChange={(e) => {
          setInput(e.target.value);
          console.log(e.target.value);
        }}
        style={{ width: 205 }}
        type="number"
      />
      <Button
        type="primary"
        onClick={
          input == 0
            ? () => setNothing(true)
            : () =>
                handlesubmit() + setNothing(false) + setNothingEntered(false)
        }
      >
        ADD
      </Button>
      {outofbudget && (
        <Alert
          message="Out of Budget my friend :("
          type="error"
          style={{ width: 300 }}
        />
      )}
      {nothing && (
        <Alert
          message="Enter something please, I need a number for snacs!"
          type="success"
          style={{ width: 300 }}
        />
      )}
    </>
  );
};

export default InputSection;
