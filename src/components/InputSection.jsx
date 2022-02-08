import React from 'react';
import { Input, Button, Alert } from 'antd';
const InputSection = ({setInput, handlesubmit, input, outofbudget}) => {
    return <>
        <Input placeholder="enter value" id='value' onChange={e => { setInput(e.target.value) }} style={{ width: 205 }} type="number" />
        <Button type="primary" onClick={input ? handlesubmit : console.log("nothing entered")}>ADD</Button>
        {outofbudget ? <Alert message="Out of Budget my friend :(" type="error" style={{ width: 300 }} /> : <></>}

    </>;
};

export default InputSection;
