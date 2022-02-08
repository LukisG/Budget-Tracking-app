import React from 'react';
import { IoFastFood, IoBus, IoGift } from "react-icons/io5"
import { BiCameraMovie, BiBuildings } from "react-icons/bi"
import { Layout } from 'antd';
const { Footer } = Layout;
const FooterFile = () => {
    return <>
        <Footer style={{ textAlign: 'center' }}>Budget App by Lukis {<IoFastFood />}{<IoBus />}{<BiCameraMovie />}{<BiBuildings />}{<IoGift />}</Footer>
    </>;
};

export default FooterFile;
