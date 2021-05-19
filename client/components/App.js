// import React from 'react';
import React, { useState } from 'react';
import { render } from 'react-dom';


// const App = (props) => {
//   return <div>REACT BOOKERS</div>
// };


function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



export default Example;