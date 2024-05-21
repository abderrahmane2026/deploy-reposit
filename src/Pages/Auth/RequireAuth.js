import React from 'react'
import Cookie from "cookie-universal"
import { Navigate } from 'react-router-dom';

export default function RequireAuth() {
    const cookie =Cookie();
    const token =cookie.get("e-commerse")
  return token ? <outlet/> :<Navigate to={"Login"} replace={true}/>
    
  
}
