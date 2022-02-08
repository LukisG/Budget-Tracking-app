import React from 'react';
import { Layout, Menu } from 'antd';
import { EuroOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const Sidebar = ({setSidebar}) => {
    return <>
        <Sider breakpoint="lg" collapsedWidth="0">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={e => { setSidebar(e.key) }}>
                <Menu.Item key="1" icon={<EuroOutlined />}>Spendings</Menu.Item>
                <Menu.Item key="2">Chart</Menu.Item>
            </Menu>
        </Sider>
    </>;
};

export default Sidebar;
