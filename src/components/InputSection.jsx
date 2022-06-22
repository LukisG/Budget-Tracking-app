import React, { useContext } from "react";
import { GlobalTotal } from "./GlobalVariables";
import { Input, Button, Alert } from "antd";
const InputSection = ({ setInput, handlesubmit, input, outofbudget }) => {
  const GlobalArray = useContext(GlobalTotal);
  return (
    <>
      <Input
        placeholder="enter value"
        id="value"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        style={{ width: 205 }}
        type="number"
      />
      <Button
        type="primary"
        onClick={input ? handlesubmit : console.log("nothing entered")}
      >
        ADD
      </Button>
      {outofbudget ? (
        <Alert
          message="Out of Budget my friend :("
          type="error"
          style={{ width: 300 }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default InputSection;
