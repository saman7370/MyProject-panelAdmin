import React from 'react';
import Adduser from './AddUser';
import Usertable from './UserTable';

const User = () => {
    return (
        <div id="manage_user_section" class="manage_user_section main_section">
        <h4 class="text-center my-3">مدیریت کاربران</h4>
        <div class="row justify-content-between">
            <div class="col-10 col-md-6 col-lg-4">
                <div class="input-group mb-3 dir_ltr">
                    <input type="text" class="form-control" placeholder="قسمتی از نام یا نام خانوادگی را وارد کنید"/>
                    <span class="input-group-text" >جستجو</span>
                </div>
            </div>
            <div class="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <Adduser/>
            </div>
        </div>       
      <Usertable/>
    </div>
        
    );
}

export default User;
