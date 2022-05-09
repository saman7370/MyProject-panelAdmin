import React from 'react';

const Avatar = ({name , imagePath}) => {
    return (
        <div className="pt-1 pb-2 d-flex flex-column avatar_sidebar-item position-relative mb-2 sidebar-item">
            <span className="avatar_box">
                <img className="w-100 rounded-circle" 
                src={imagePath} />
            </span>
            <div className="sidebar_avatar_name text-center hiddenable">{name}</div>
        </div>

    );
}

export default Avatar;
