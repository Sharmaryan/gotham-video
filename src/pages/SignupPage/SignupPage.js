import React from 'react';
import { Signup } from 'components';
import { useTitle } from 'hooks/useTitle';
export const SignupPage = () => {
  useTitle("SignUp | Clipz");
  return (
    <div><Signup/></div>
  )
}
