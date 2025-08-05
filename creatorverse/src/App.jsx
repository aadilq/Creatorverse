import { useEffect, useState} from 'react';
import {useRoutes } from 'react-router-dom';
import ShowCreator from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import { supabase } from './client.js';
import Card from './components/Card.jsx';


function App() {
  const [creators, setCreators] = useState([]);

  useEffect(()=> {
    getCreators();
  }, []);

  async function getCreators () {
    const { data } = await supabase.from("creators").select()
    setCreators(data);
  }
    const routes = useRoutes([
      {
        path: "/", 
        element: <Card creators={creators} /> || "No Creators Yet 😞"},
      {path:"/showCreator", element: <ShowCreator />}, 
      {path:"/viewCreator", element: <ViewCreator />},
      {path:"/addCreator", element: <AddCreator />},
      {path:"/editCreator", element: <EditCreator />}
    ]);

    return routes
  
}

export default App
