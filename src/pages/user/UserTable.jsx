import React from 'react';

const Usertable = () => {
    return (
        <>
            <table class="table table-responsive text-center table-hover table-bordered">
                <thead class="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>نام و نام خانوادگی</th>
                        <th>موبایل</th>
                        <th>ایمیل</th>
                        <th>نقش </th>
                        <th>تاریخ ثبت نام</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>سامان مهرعلی</td>
                        <td>09110110011</td>
                        <td>mehralisaman@gmail.com</td>
                        <td>کاربر</td>
                        <td>1400/10/12</td>
                        <td>
                            <i class="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="جزئیات و ویرایش کاربر" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_user_modal"></i>
                            <i class="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف کاربر" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" class="d-flex justify-content-center">
                <ul class="pagination dir_ltr">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Usertable;
