import React, {useContext} from 'react';
import { GlobalTotal } from './GlobalVariables';
import { Button, Card, } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const History = ({handledeleate}) => {
    const GlobalArray = useContext(GlobalTotal)
    return <div>
        {GlobalArray["history"][0] ? <div><h4>{GlobalArray["historypreset"][0][0]} {GlobalArray["historypreset"][0][1]}</h4></div> : <></>}
        <div>{GlobalArray["history"].map((item, index) => {
            return <Card key={item[2] + 1} size="small" title={item[0]} style={{ width: 300 }}><p>{item[1]}<span><Button className='delbutton' icon={<DeleteOutlined />} onClick={() => handledeleate(item)} /></span></p></Card>
        })}


        </div>

    </div>
}
export default History;
