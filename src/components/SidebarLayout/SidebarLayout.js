import React from 'react'
import {Sidebar} from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
export const SidebarLayout = () => {
  return (
    <div  >
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
