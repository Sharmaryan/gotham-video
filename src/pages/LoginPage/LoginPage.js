import React from 'react'
import { Login } from 'components';
import './LoginPage.css';
import {  useSelector } from "react-redux";
export const LoginPage = () => {
    const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`login-page ${theme}`}><Login/></div> 
  )
}
