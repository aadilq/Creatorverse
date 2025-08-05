import { useRoutes } from 'react-router-dom';
import ShowCreator from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';



function App() {
    const routes = useRoutes([
      {path:"/showCreator", element: <ShowCreator />}, 
      {path:"/viewCreator", element: <ViewCreator />},
      {path:"/addCreator", element: <AddCreator />},
      {path:"/editCreator", element: <EditCreator />}
    ]);

    return routes
  
}

export default App
