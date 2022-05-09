import React, { useContext } from 'react';
import { AdminContext } from '../../../context/adminContext';


const Rightcontent = () => {
    const{setShowSlidebar} = useContext(AdminContext); 
    return (
        <>
            <div className="right_content h-100 py-1 bg-dark">
                <a className="navbar-brand h-100" href="/">
                    <img src="/assets/images/sideBack3.jpg" className="h-100" />
                </a>
                <div className="form-check form-switch mx-4 d-none d-md-block">
                    <input id="handle_toggle_sidemenu" className="form-check-input pointer" type="checkbox"
                    onChange={(e)=>setShowSlidebar(e.target.checked)}/>
                </div>
            </div>
        </>
    );
}

export default Rightcontent;
