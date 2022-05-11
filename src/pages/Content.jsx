import React, { useContext } from 'react';
import { AdminContext } from '../context/adminLayoutContext';
import Category from './category/Category';


const Content = () => {
    const {showSidebar} = useContext(AdminContext)
    return (
        <section id="content_section" 
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          {/* <Dashboard/> */}
          <Category/>
        </section>
    );
}

export default Content;
