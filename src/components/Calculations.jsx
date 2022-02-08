import React, {useContext} from 'react';
import { GlobalTotal } from './GlobalVariables';
import { EuroOutlined } from '@ant-design/icons';
import { IoFastFood, IoBus, IoGift } from "react-icons/io5"
import { BiCameraMovie, BiBuildings } from "react-icons/bi"
const Calculations = () => {
    const GlobalArray = useContext(GlobalTotal)
    return <>
        <div>
            <br />
            <p>Pajamos: {GlobalArray["pajamos"]} {<EuroOutlined />}</p>
            <p>išlaidos: {GlobalArray["islaidos"]} {<EuroOutlined />}</p>
            <p>Total: {GlobalArray["total"]} {<EuroOutlined />}</p>
            <br />
            <p>{<IoFastFood />} Food: {GlobalArray["food"]} {<EuroOutlined />}</p>
            <p>{<IoBus />} Transport: {GlobalArray["transport"]} {<EuroOutlined />}</p>
            <p>{<BiCameraMovie />} Entertainment: {GlobalArray["entertainment"]} {<EuroOutlined />}</p>
            <p>{<BiBuildings />} Rent: {GlobalArray["rent"]} {<EuroOutlined />}</p>
            <p>{<IoGift />} Gifts: {GlobalArray["gifts"]} {<EuroOutlined />}</p>
            <br />
        </div>
    </>;
};

export default Calculations;
