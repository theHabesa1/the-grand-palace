import React from 'react'
import { Routes, Route } from "react-router-dom";
import Resturaone from './page/resturaone';
import Yod from './page/yod';
import YodLun from './page/yodlunch';
import YodDin from './page/yoddin';
import Kaiser from './page/kaiser';
import Bon from './page/bona';
import Adiz from './page/adiz';
import Misale from './page/misale';
import Tgp from './page/grandpalace';
import Grove from './page/grovecafe';
import Grest from './page/grest';
import Kiki from './page/KIKI.jsx';
import Online from './page/online.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/vadmas" element={<Resturaone />} />
      <Route path="/yod" element={<Yod />} />
      <Route path="/yodlun" element={<YodLun />} />
      <Route path="/yoddin" element={<YodDin />} />
      <Route path="/kaiser" element={<Kaiser />} />
      <Route path="/Bon" element={<Bon />} />
      <Route path="/adiz" element={<Adiz />} />
      <Route path="/misale" element={<Misale />} />
      <Route path="/thegrandpalace" element={<Tgp />} />
      <Route path="/grovecafe" element={<Grove />} />
      <Route path="/grestchicken" element={<Grest />} />
      <Route path="/kiki" element={<Kiki />} />
      <Route path="/online" element={<Online />} />
      
    </Routes>
  );
};

export default App;