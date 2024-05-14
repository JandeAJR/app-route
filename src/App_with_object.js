import { useRoutes } from 'react-router-dom';
import Produtos, { Produto } from './pages/produtos';
import Index from './pages';
import './App.css';

function App() {
   const element = useRoutes([
      {
         path: "/",
         element: <Index />
      },
      {
         path: "produtos/*",
         element: <Produtos />,
         children: [
            {
               path: ":id",
               element: <Produto />,
            }
         ],
      },
   ]);

   return (
      <div className="App">
         {element}
      </div>
   );
}

export default App;
