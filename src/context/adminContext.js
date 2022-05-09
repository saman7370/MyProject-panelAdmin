import { createContext, useState } from "react";



export const AdminContext = createContext({
    showSlidebar:false,
    setShowSlidebar:()=>{}
})

const AdminContextContainer = ({children})=>{
    const[showSlidebar , setShowSlidebar] = useState(false);
    return(
        <AdminContext.Provider value={{
            showSlidebar,
            setShowSlidebar
        }}>
            {children}
        </AdminContext.Provider>
   )

}

export default AdminContextContainer;