import React from 'react'
import { Login } from 'components';
import './LoginPage.css';
import {  useSelector } from "react-redux";
import { useTitle } from 'hooks/useTitle';
export const LoginPage = () => {
  useTitle("Login | Clipz");
    const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`login-page ${theme}`}><Login/></div> 
  )
}
