import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import Destination from './components/Destination/Destination';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [info, setInfo] = useState(
    {
      areaName:"Cox's Bazar",
      description:"Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",
      img:"https://i.ibb.co/Yc6XnsD/backImg.png"
    }
  );
  return (
    <UserContext.Provider value={[info,setInfo,loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/news">
          <News/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <Route path="/booking">
          <Booking/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
