import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import PostDetails from './PostDetail';
import NotFound from './NotFound';
import ToDoList from './ToDoList';
import RecipeFinder from './RecipeFinder';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/create">
            <Create />
          </Route>
          <Route path = "/todo">
            <ToDoList />
          </Route>
          <Route path = "/recipe">
            <RecipeFinder />
          </Route>
          <Route path = "/posts/:id">
            <PostDetails />
          </Route>
          <Route path = "*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
