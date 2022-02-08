import React, {useContext} from 'react';
import { GlobalTotal } from './GlobalVariables';
import { Input, Button, Form } from 'antd';
import { BsCash } from "react-icons/bs"
import { EuroOutlined } from '@ant-design/icons';
const Budget = ({setBudgetinput}) => {
    const GlobalArray = useContext(GlobalTotal)
    const handlebudgetChange = (e) => {
        setBudgetinput(e.target.value)
        GlobalArray["budget"] = e.target.value;
    }
    const handleinfinity = () => {
        setBudgetinput(Infinity);
        GlobalArray["budget"] = Infinity;
    }
    return <>
    <p>{<BsCash />} Budget: {GlobalArray["budget"] === Infinity ? "No Limit" : GlobalArray["budget"]} {<EuroOutlined />}</p>
        <Form
            name="basic"
            labelCol={{
                span: 0,
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item label="Budget" name="Budget">
                <Input placeholder="enter Your budget" onChange={handlebudgetChange} type="number" />
            </Form.Item>
            <Button onClick={handleinfinity}>No limit</Button>
        </Form>
    </>;
};

export default Budget;
