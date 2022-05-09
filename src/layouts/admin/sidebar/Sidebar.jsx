import React, { useContext } from 'react';
import { AdminContext } from '../../../context/adminContext';
import Avatar from './Avatar';
import Sidebargrouptitle from './SidebarGroupTitle';
import Sidebaritem from './SidebarItem';


const Sidebar = () => {
    const{showSlidebar} =  useContext(AdminContext);
    return (
        <>
            {/* <!-- #region(collapsed) sidebar start --> */}
            <section id="sidebar_section">
                <div className={`mini_sidebar collapsedd bg-dark h-100 ${showSlidebar ? "expanded" : null}`}>
                    <a className="p-0 m-0 link-item">
                        <Avatar name="سامان مهرعلی" imagePath={'./assets/images/avatar/saman-user.jpg'}/>
                        <Sidebaritem title={"داشبورد"} icon={"fas fa-tachometer-alt"}/>
                        {/* <!-- =================================== --> */}
                        <Sidebargrouptitle title={"فروشگاه"}/>
                        <Sidebaritem title={"مدیریت گروه محصول"} icon={"fas fa-stream"}/>
                        <Sidebaritem title={"مدیریت محصول"} icon={"fas fa-cube"}/>
                        <Sidebaritem title={"مدیریت برند ها"} icon={"fas fa-copyright"}/>
                        <Sidebaritem title={"مدیریت گارانتی ها"} icon={"fab fa-pagelines"}/>
                        <Sidebaritem title={"مدیریت رنگ ها"} icon={"fas fa-palette"}/>
                        <Sidebaritem title={"مدیریت تخفیف ها"} icon={"fas fa-percentage"}/>
                        {/* <!-- =================================== --> */}
                        <Sidebargrouptitle title={"سفارشات و سبد"}/>
                        <Sidebaritem title={"مدیریت سبد ها"} icon={"fas fa-shopping-basket"}/>
                        <Sidebaritem title={"مدیریت سفارشات"} icon={"fas fa-luggage-cart"}/>
                        <Sidebaritem title={"مدیریت نحوه ارسال"} icon={"fas fa-truck-loading"}/>
                        {/* <!-- =================================== --> */}
                        <Sidebargrouptitle title={"کاربران و همکاران"}/>
                        <Sidebaritem title={"مشاهده کاربران"} icon={"fas fa-users"}/>
                        <Sidebaritem title={"نقش ها"} icon={"fas fa-user-tag"}/>
                        <Sidebaritem title={"مجوز ها"} icon={"fas fa-shield-alt "}/>
                        {/* <!-- =================================== --> */}
                        <Sidebargrouptitle title={"ارتباطات"}/>
                        <Sidebaritem title={"سوال ها"} icon={"fas fa-question-circle"}/>
                        <Sidebaritem title={"نطرات"} icon={"fas fa-comment"}/>
                    </a>
                </div>
            </section>

        </>
    );
}

export default Sidebar;

