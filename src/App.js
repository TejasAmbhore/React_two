import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  //const title = 'Welcome to the new blog';
  //const likes = 50;
  // const person = { name: 'Tejas', age: 19};
  //const links = "https://www.google.com";

  // return (
  // <div className="App">
  // <div className="content">
  ///* <h1>{ title }</h1>
  //<p>Liked { likes } times</p>

  //{/* <p>{ person }</p> */}

  //<p>{ 10 }</p>
  //<p>{ "Satshriakal Ji" }</p>
  //<p>{ [1,2,3,4,5]}</p>
  //<p>{ Math.random()*10 }</p>

  //<a href={ links }>Google</a> 
  //</div>
  //</div>
  //);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/react_two">
              <Home />
            </Route>
            <Route path="/react_two/create">
              <Create />
            </Route>
            <Route path="/react_two/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;