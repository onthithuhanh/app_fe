import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Page/Authenticator/Login/Login";
import Reissue from "./Page/Authenticator/Reissue/Reissue";

export const routers = createBrowserRouter([ 
  { 
    path: "*", 
    element: <div>404</div>, 
  },
  { 
    path: "/", 
    element: <Login />, 
  },
  { 
    path: "/login", 
    element: <Login />, 
  },
  {  
    path: "/reissue", 
    element: <Reissue />, 
  }, 
  
]); 
