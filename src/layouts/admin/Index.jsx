import React, { useContext } from 'react';
import AdminContextContainer, { AdminContext } from '../../context/adminContext';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

const Index = () => {
     const{showSlidebar} = useContext(AdminContext);
    return ( 
        <div>
            <AdminContextContainer>
            <Navbar/>
            <Sidebar/>
            <section id={`content_section ${showSlidebar ? "with_sidebar" : null}`} className="bg-light py-2 px-3"></section>
            </AdminContextContainer>   
        </div> 
    );
}

export default Index;





