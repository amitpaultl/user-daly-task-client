
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Context } from './Commpont/Context/Contex';
import Route from './Commpont/Route/Route';

function App() {
  const {setTheme,theme}=useContext(Context)

  return (
    <div  style={{backgroundColor: theme ? "#fff" : '#000'}}>

      <RouterProvider router={Route} >
      
      </RouterProvider>
    </div>
  );
}

export default App;
