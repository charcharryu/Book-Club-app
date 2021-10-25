import React, { useState, useEffect } from 'react';

function Feed () {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    fetch('/api')
      .then(res => res.json())
      .catch(err => console.log('Fetching post ERROR: ', err));
  });
  return (
    <div>
      this is Feed. this is not not Feed.
    </div>
  )
}

export default Feed;
