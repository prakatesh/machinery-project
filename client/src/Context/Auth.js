import React, { useContext, useState } from 'react'

export const AuthContext=React.createContext()
export function Authenication(props) {
    const [user,setuser]=useState(null)
    const login=(user)=>
    {
      setuser(user)
    }
    // const logout=()=>
    // {
    //   setuser(null)
    // }
  return (
    <div>
      <AuthContext.Provider value={{user,login}}>
        {props.children}
      </AuthContext.Provider>
    </div>
  )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}
