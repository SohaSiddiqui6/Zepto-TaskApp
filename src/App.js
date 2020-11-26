import React, {useState} from "react";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Table from "./components/Table"
import "./App.css"
const App = () => {
  const [routes] = useState([ {
    path : "/",
    component: Table,
    value : "day"
  },
  {
    path : "/week",
    component: Table,
    value : "week"
  },
  {
    path : "/month",
    component: Table,
    value : "month"
  }]);
  const table = [...routes]
  return (
      
    <Router>
    <div className="App">
      <header className="head">
      <h1 className="title">Activity</h1>
      <div>
        <Link type="button" className="btn btn-lg" to="/">Today</Link>
        <Link type="button"  className="btn btn-lg" to="/week">This Week</Link>
        <Link type="button" className="btn btn-lg" to="/month">This month</Link>
      </div>
      </header>
       {table.map(({path,  value}) => (
         <Route
              path={path}
              exact = {true}
              render = {(props) => <Table {...props} value = {value} />}
           />  
      
       )) }
 
    </div>
    </Router>
  );
}

export default App;
