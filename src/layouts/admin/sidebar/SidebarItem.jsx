import React from 'react';

const Sidebaritem = ({title , icon}) => {
    return (
        <div className="py-1 text-start pe-4 sidebar_menu_item sidebar-item" data-section-id="dashboard_section" >
            <i className={`ms-3 icon ${icon} text-light`}></i>
            <span className="hiddenable no_wrap font_08">{title}</span>
        </div>
    );
}

export default Sidebaritem;

