// import React from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login"
import Feed from "./Feed.js"


// const App = (props) => {
//   return <div>REACT BOOKERS</div>
// };


function App() {

  return (  
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/feed" component={Feed} />
      </Switch>
      </Router>
    </div>
  );
}



export default App;