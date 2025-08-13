import { useEffect, useState} from 'react';
import {Link, useRoutes, useNavigate } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import { supabase } from './client.js';
import Card from './components/Card.jsx';


function App() {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate();


  useEffect(()=> {
    getCreators();
  }, []);

  async function getCreators () {
    const { data } = await supabase.from("creators").select()
    setCreators(data);
    console.log(creators);
  }

  const navigateToAddCreator = () =>{
    navigate('/AddCreator')
  };

  const navigateToShowCreators = () =>{
    navigate('/ShowCreators')
  };


    const routes = useRoutes([
      {
        path: "/", 
        element: creators.length > 0 ? (
          <div>
            {creators.map((creator) => (
              <Card key={creator.name} creator={creator} />
            ))}
          </div>
        )
            :
        (
          <h1>No Creators Yet 😞</h1>
        )
        
      } ,
      {path:"/showCreators", element: <ShowCreators />}, 
      {path:"/viewCreator/:creatorID", element: <ViewCreator />},
      {path:"/addCreator", element: <AddCreator />},
      {path:"/editCreator/:creatorID", element: <EditCreator />}
    ]);


    return(
      <div className='flex flex-col items-center min-h-screen py-8'>
        <div className='text-center'>
        <h1 className='text--500 pb-10 justify-center items-center'>Creatorverse</h1>
        <div className='space-x-4 pb-10'>
          <button onClick={navigateToAddCreator}>Add a Creator</button>
          <button onClick={navigateToShowCreators}>View All Creators</button>
        </div>
        </div>
        <div className='flex justify-center'>
          {routes}
        </div>
      </div>
    )

}

export default App
