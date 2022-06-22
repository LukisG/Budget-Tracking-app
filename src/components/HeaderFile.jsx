import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
const HeaderFile = () => {
  return (
    <>
      <Header
        className="site-layout-sub-header-background headerstyle"
        style={{ padding: 0 }}
      >
        <div style={{ margin: "0px 50%", color: "white" }}>SpendingsApp</div>
      </Header>
    </>
  );
};

export default HeaderFile;
