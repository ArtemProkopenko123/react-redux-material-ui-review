import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./components/home";
import  AppBarCustom from "./components/appBar";
import { Provider } from 'react-redux'
import store from "./redux/store";
import AddForm from "./components/Form/add"
import MoreInfo from "./components/itemsCatalog/moreInformation";

function App() {
  return (
    <div className="App">
      
      <Router>
        <AppBarCustom />
        <div>
          <Switch>
            <Route path="/add">
              <AddForm />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route path="/home/moreInfo">
              <MoreInfo />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
