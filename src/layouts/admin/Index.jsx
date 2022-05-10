import React, { useContext } from "react";
import AdminContextContainer, { AdminContext } from "../../context/adminLayoutContext";
import Dashboard from "../../pages/dashboard/Dashboard";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";

const Index = () => {
  const {showSidebar} = useContext(AdminContext)
 
  return (
    <AdminContextContainer>
      <div>
        <Navbar />
        <Sidebar />
        <section id="content_section" 
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          <Dashboard/>
        </section>
      </div>
    </AdminContextContainer>
  );
};

export default Index;
