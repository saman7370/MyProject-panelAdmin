import React from "react";
import AdminContextContainer from "../../context/adminLayoutContext";
import Content from "../../pages/Content";

import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";

const Index = () => {
  return (
    <AdminContextContainer>
      <div>
        <Content/>
        <Navbar />
        <Sidebar />
      </div>
    </AdminContextContainer>
  );
};

export default Index;
