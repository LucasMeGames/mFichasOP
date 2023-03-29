import { Routes, Route, HashRouter } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home';
import { Fichas } from '../pages/Fichas';
import { Ficha } from '../pages/Ficha';

export function UserRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/fichas" element={<Fichas/>}/>
        <Route path="/ficha/:id" element={<Ficha/>}/>
      </Route>
    </Routes>
  );
}