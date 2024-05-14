import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Index from './pages';
import About from './pages/about';
import Produtos, { Produto } from './pages/produtos';
import './App.css';

function App() {
   const location = useLocation();
   const navigate = useNavigate();

   console.log(location);

   useEffect(() => {
      if (location.pathname.includes("home")) {
         navigate("/index", {replace: true}); // Com replace: true o navigate não cria um novo histórico de navegação
      }
   }, [location, navigate]);

   return (
      <div className='App'>
         <Link to="/">Home</Link>
         <br />
         <Link to="about/pedido?produto=9">About</Link>
         <br />
         <Link to="about/estoque?produto=10">About</Link>
         <br />
         <Link to="produtos">Produtos</Link>

         <Routes>
            <Route path="/" element={<Index />} />
            <Route path="about/:id" element={<About />} />
            <Route path="produtos/*" element={<Produtos />}>
               <Route path=":id" element={<Produto />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
