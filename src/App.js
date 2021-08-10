///////// UseEffect  

import { useState } from 'react';
import './App.css';


export default function App() {
  const [resourceType, SetResourceType] = useState ('posts')



  return (
<>
<div> 
  <button onClick={() => SetResourceType('posts')} > Posts </button>
  <button onClick={() => SetResourceType('users')} > Users </button>
  <button onClick={() => SetResourceType('comments')} > Comments </button>
    </div> 
    <h1> {resourceType} </h1>
</>
  )
}
