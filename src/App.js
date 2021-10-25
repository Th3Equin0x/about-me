import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import { isDesktop} from 'react-device-detect';
import MyNavBar from './components/myNavBar';
import {BrowserRouter, Redirect, Switch, Route, Link} from 'react-router-dom';
import { createBrowserHistory } from "history";
import AboutMe from './components/homePage/aboutMe';

export const appHistory = createBrowserHistory();

function App() {
  const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App" style={{paddingLeft:isDesktop?"15%":"0%", paddingRight:isDesktop?"15%":"0%", backgroundColor:"#0863B2"}}>
      <BrowserRouter>
        <MyNavBar/>
        {/* <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
        {isLogged ? <h3>This should only display if I'm logged in.</h3> : ''} */}

        <Switch> {/*forces the router to only render the first route that matches the path*/}
          <Route exact path="/" render={() => <AboutMe/>} />
          <Route exact path="/contact" render={() => <h1>Contact me!</h1>} />
          {/* <Route path="/endpoint" render={() => <DemoEndpoint></DemoEndpoint>} /> */}
          {/* <Route path="/message/:msgVar/:optionalVar?" render={(props) => <RouteParams params={props}/>} />*/} {/*required param and optional param */}
          {/*<Route path="/sad" render={() => <Redirect to="/message/Turn%20That%20Frown%20Upside%20Down!"/>} />*/} {/*Redirect component*/}
          <Route path="/" render={() => <h2>Oopsie! Invalid page</h2>}/> {/*default route*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
