import React,{createContext,useState} from 'react'


export const SideBarContext=createContext();

const SideBarProvider = ({children}) => {
  //useState
  const[isOpen,setIsOpen] =useState(false);

  const handleClose=()=>{

    setIsOpen(false);
  }
  const sideToggle=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <SideBarContext.Provider value={{isOpen,handleClose,sideToggle}}>{children}</SideBarContext.Provider>
  )
}

export default SideBarProvider;