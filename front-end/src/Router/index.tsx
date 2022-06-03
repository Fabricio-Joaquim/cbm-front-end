import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import * as Page from '../Pages';
const Router = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="/Form" element={<Page.Form />} />
        <Route path="/lista-de-candidatos"
          element={<Page.ListOfCompetitor />} />
      </Routes>
    </BrowserRouter>

  );
};

export default Router;
