import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { AdminContext } from '../context/adminLayoutContext';
import Brand from './brand/Brand';
import Cart from './cart/Cart';
import Category from './category/Category';
import Color from './color/color';
import Dashboard from './dashboard/Dashboard';
import Delivery from './delivery/Delivery';
import Discount from './discount/Discount';
import Guaranty from './guaranty/Guaranty';
import Order from './order/Order';
import Permission from './permission/Permission';
import Product from './product/Product';
import Question from './question/Question';
import Role from './role/Role';
import User from './user/User';
import Comment from './comment/Comment';

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
            <Route path='/brands' element={<Brand/>}/>
            <Route path='/discounts' element={<Discount/>}/>
            <Route path='/carts' element={<Cart/>}/>
            <Route path='/orders' element={<Order/>}/>
            <Route path='/deliveries' element={<Delivery/>}/>
            <Route path='/users' element={<User/>}/>
            <Route path='/roles' element={<Role/>}/>
            <Route path='/permissions' element={<Permission/>}/>
            <Route path='/questions' element={<Question/>}/>
            <Route path='/comments' element={<Comment/>}/>

            <Route path='*' element={<Dashboard/>}/>
          </Routes>
        </section>
    );
}

export default Content;
