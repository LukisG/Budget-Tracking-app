import React, { useContext, useReducer, useState } from 'react';
import { GlobalTotal } from './GlobalVariables';
import "./Style.css"
import { Layout } from 'antd';
import { Graph } from './Graph';
import Calculations from './Calculations';
import Budget from './Budget';
import Sidebar from './Sidebar';
import Select from './Select';
import History from './History';
import InputSection from './InputSection'
import HeaderFile from './HeaderFile';
import FooterFile from './FooterFile';
const { Content } = Layout;
const Style = () => {
    const GlobalArray = useContext(GlobalTotal)
    // console.log(GlobalArray)
    //------------------------------------------------------------
    const [input, setInput] = useState(0);
    const [itemid, setItemid] = useState(0);
    const [pajamos, setPajamos] = useState(0);
    const [sidebar, setSidebar] = useState("1");
    const [selectType, setSelectType] = useState("0");
    const [budgetinput, setBudgetinput] = useState(0);
    const [outofbudget, setOutofbudget] = useState(false);
    const [deleatevalue, setDeleatevalue] = useState(0);
    const [dispatchstate, setDispatchstate] = useState(false);
    //-------------------------------------------------------------
    const handlesubmit = async () => {
        if (GlobalArray["budget"] > GlobalArray["total"] && input <= GlobalArray['budget']) {
            setOutofbudget(false);
            if (selectType !== 0) {
                setDispatchstate(true)
                dispatch({
                    type: selectType,
                });
            }
            //history------------------------------------------
            const arraycopy = [...GlobalArray["historypreset"]]
            arraycopy[0] = selectType;
            arraycopy[1] = input + " €";
            arraycopy[2] = itemid;
            GlobalArray["history"].push(arraycopy)
            setItemid(itemid + 1);
            //mafs--------------------------------------------
            if (input > 0) {
                const tempval = GlobalArray["total"] + parseInt(input);
                const tempval1 = GlobalArray["pajamos"] + parseInt(input)
                GlobalArray["total"] = parseInt(tempval);
                setPajamos(parseInt(pajamos) + parseInt(input))
                GlobalArray["pajamos"] = tempval1;

            } else {
                const tempval = GlobalArray["total"] + parseInt(input)
                const tempval1 = GlobalArray["islaidos"] + parseInt(input)
                GlobalArray["islaidos"] = tempval1;
                GlobalArray["total"] = parseInt(tempval);
            }
        } else setOutofbudget(true)
    }
    //----------------------------------------------------------------------------------------
    const handledeleate = (items) => {
        GlobalArray["history"] = GlobalArray["history"].filter((item) => item[2] !== items[2]);
        const temparray = GlobalArray["history"];
        setDeleatevalue(items[1].replace("€", ""))
        if (dispatchstate === false)
            setDispatchstate(true)
        dispatch({
            type: items[0] + "remove",
        });
        setOutofbudget(false)
    }
    //UseReducer-------------------------------------------------------------------------------
    const initialState = {
        type: selectType
    }
    const [value, dispatch] = useReducer(reducer, initialState);
    function reducer(state, action) {
        if (dispatchstate === true) {
            switch (action.type) {
                case 'food':
                    return GlobalArray["food"] += parseInt(input) , setDispatchstate(false);
                case 'transport':
                    return GlobalArray["transport"] += parseInt(input) , setDispatchstate(false)
                case 'entertainment':
                    return GlobalArray["entertainment"] += parseInt(input) , setDispatchstate(false)
                case 'rent':
                    return GlobalArray["rent"] += parseInt(input) , setDispatchstate(false)
                case 'gifts':
                    return GlobalArray["gifts"] += parseInt(input) , setDispatchstate(false)
                case '0':
                    return GlobalArray["nocategory"] += parseInt(input) , setDispatchstate(false);
                //remove from history/update category-------------------------------------------------------------------------------
                case 'foodremove':
                    return GlobalArray["food"] -= parseInt(deleatevalue), GlobalArray["total"] -= parseInt(deleatevalue), setDispatchstate(false),
                        deleatevalue < 0 ? GlobalArray["islaidos"] -= parseInt(deleatevalue) : GlobalArray["pajamos"] -= parseInt(deleatevalue)
                case 'transportremove':
                    return GlobalArray["transport"] = GlobalArray["transport"] - parseInt(deleatevalue), GlobalArray["total"] -= parseInt(deleatevalue), setDispatchstate(false),
                        deleatevalue < 0 ? GlobalArray["islaidos"] -= parseInt(deleatevalue) : GlobalArray["pajamos"] -= parseInt(deleatevalue)
                case 'entertainmentremove':
                    return GlobalArray["entertainment"] -= parseInt(deleatevalue), GlobalArray["total"] -= parseInt(deleatevalue), setDispatchstate(false),
                        deleatevalue < 0 ? GlobalArray["islaidos"] -= parseInt(deleatevalue) : GlobalArray["pajamos"] -= parseInt(deleatevalue)
                case 'rentremove':
                    return GlobalArray["rent"] -= parseInt(deleatevalue), GlobalArray["total"] -= parseInt(deleatevalue), setDispatchstate(false),
                        deleatevalue < 0 ? GlobalArray["islaidos"] -= parseInt(deleatevalue) : GlobalArray["pajamos"] -= parseInt(deleatevalue)
                case 'giftsremove':
                    return GlobalArray["gifts"] -= parseInt(deleatevalue), GlobalArray["total"] -= parseInt(deleatevalue), setDispatchstate(false),
                        deleatevalue < 0 ? GlobalArray["islaidos"] -= parseInt(deleatevalue) : GlobalArray["pajamos"] -= parseInt(deleatevalue)
                case '0remove':
                    return GlobalArray["nocategory"] -= parseInt(deleatevalue), GlobalArray["total"] -= parseInt(deleatevalue), setDispatchstate(false),
                        deleatevalue < 0 ? GlobalArray["islaidos"] -= parseInt(deleatevalue) : GlobalArray["pajamos"] -= parseInt(deleatevalue)
                default:
                    return
            }
        }
    }
    return <Layout>
        <Sidebar setSidebar={setSidebar} />
        <Layout>
            <HeaderFile />
            {
                sidebar === "1" ?
                    <Content style={{ margin: '24px 0 35% 40%' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <div>
                                <div>
                                    <Budget setBudgetinput={setBudgetinput} />
                                </div>
                                <div>
                                    <Calculations />
                                </div>
                                <div>
                                    <Select setSelectType={setSelectType} />
                                </div>
                                <div>
                                    <InputSection setInput={setInput} handlesubmit={handlesubmit} input={input} outofbudget={outofbudget} />
                                </div>
                                <div>
                                    <History handledeleate={handledeleate} selectType={selectType}/>
                                </div>
                            </div>
                        </div>
                    </Content> :
                    <Content style={{ margin: '5% 25% 50% 40%' }}>
                        <Graph />
                    </Content>
            }
            <FooterFile />
        </Layout>
    </Layout >
};

export default Style;