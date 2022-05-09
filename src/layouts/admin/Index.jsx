import React, { useContext} from 'react';
import AdminContextContainer, { AdminContext } from '../../context/adminLayoutContext';

import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

const Index = () => {
    const{showSidebar} = useContext(AdminContext);

    return (
        <AdminContextContainer>
        <div>
            <Navbar/>
            <Sidebar/>
            <section id={`content_section ${showSidebar ? "with_sidebar" : null}`} className="bg-light py-2 px-3"></section>   
        </div>
        </AdminContextContainer>
    );
}

export default Index;





