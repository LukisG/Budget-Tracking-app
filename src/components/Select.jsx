import React from 'react';
import { Radio } from 'antd';
import { IoFastFood, IoBus, IoGift } from "react-icons/io5"
import { BiCameraMovie, BiBuildings } from "react-icons/bi"
const Select = ({setSelectType}) => {
    
    return <>
        <Radio.Group defaultValue="0" onChange={value => {setSelectType(value.target.value)}}>
            <Radio.Button value="0">NoCategory</Radio.Button>
            <Radio.Button value="food">{<IoFastFood />}</Radio.Button>
            <Radio.Button value="transport">{<IoBus />}</Radio.Button>
            <Radio.Button value="entertainment">{<BiCameraMovie />}</Radio.Button>
            <Radio.Button value="rent">{<BiBuildings />}</Radio.Button>
            <Radio.Button value="gifts">{<IoGift />}</Radio.Button>
        </Radio.Group>
    </>;
};

export default Select;
