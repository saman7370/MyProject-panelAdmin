import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { AdminContext } from '../context/adminLayoutContext';
import Category from './category/Category';
import Color from './color/color';
import Dashboard from './dashboard/Dashboard';
import Guaranty from './guaranty/Guaranty';
import Product from './product/Product';

const Content = () => {
    const {showSidebar} = useContext(AdminContext)
    return (
        <section id="content_section" 
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          <Routes>
            <Route path='/' element={ <Dashboard/>}/>
            <Route path='/categories' element={<Category/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/colors' element={<Color/>}/>
            <Route path='/guaranties' element={<Guaranty/>}/>

            <Route path='*' element={<Dashboard/>}/>
          </Routes>
        </section>
    );
}

export default Content;
