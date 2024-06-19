import React, { useState } from 'react';
import Newsnavbare from './newsnavbare';

import { Outlet } from 'react-router-dom';
 function NewsPage ()  {

  return (
    <div className="news-page">
        <Newsnavbare/>
       
        <Outlet />
    </div>
  );
};

export default NewsPage;
