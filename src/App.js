import React, { useState, useEffect } from 'react';
import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listBlogs } from './graphql/queries';


const initialFormState = { name: '', description: '' }

function App() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchBlogs();
  }, []);

  function fetchBlogs() {
    const blogs = API.graphql(graphqlOperation(listBlogs));
    setBlogs(blogs);
    console.log(blogs);
  }

  
  return (
    <div className="App">
      <h1>My Blog App</h1>
      <div style={{marginBottom: 30}}>
        {
          blogs.map(blog => (
            <div key={blog.id || blog.name}>
              <h2>{blog.name}</h2>
              <p>{blog.description}</p>
            </div>
          ))
        }
      </div>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default withAuthenticator(App);