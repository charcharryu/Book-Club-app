import React, { useState, useEffect } from 'react';


function Login () {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  return (
  <div>
  <form method="GET" action="/feed">
  <input name="username" type="text" placeholder="username"></input>
  <p>What chapter have you read up to?</p>
  <input name="chapter" type="number" min="1" max="40"></input>
  <br></br>
  <br></br>
  <input type="submit" value="submit"></input>
  </form>
  {/* <p>You clicked {count} times</p>
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button> */}
  </div>
  )}

export default Login;