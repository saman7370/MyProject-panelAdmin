import React from "react";
import Paginatedtable from "../../components/PaginatedTable";

const Categorytable = () => {
  const data = [
    {
        id:"1",
        category:"aaa",
        title:"bbb",
        price:"111",
        stock:"5",
        like_count:"2",
        status:"1"
    },
    {
        id:"2",
        category:"ccc",
        title:"ddd",
        price:"222",
        stock:"7",
        like_count:"8",
        status:"2"
    },
    {
        id:"3",
        category:"eee",
        title:"fff",
        price:"333",
        stock:"7",
        like_count:"8",
        status:"2"
    },
    {
        id:"4",
        category:"ggg",
        title:"hhh",
        price:"444",
        stock:"7",
        like_count:"8",
        status:"2"
    },
    {
        id:"5",
        category:"fff",
        title:"zzz",
        price:"555",
        stock:"7",
        like_count:"8",
        status:"2"
    },
]

const DataInfo = [
    {feild:"id" , title:"#"},
    {feild:"title" , title:"عنوان محصول"},
    {feild:"price" , title:"مبلغ محصول"},
]

const additionElements = (itemId)=>{
  console.log(itemId)
  return(
    <>
    <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_category_modal"></i>
    <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
    <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    </>
  )
}

const additionFeild = {
  title:"عملیات",
  elements: (itemId)=>additionElements(itemId)
}

  return (  
  <Paginatedtable data={data} DataInfo={DataInfo} additionFeild={additionFeild}/>
  );
};

export default Categorytable;
