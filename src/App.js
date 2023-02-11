import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
