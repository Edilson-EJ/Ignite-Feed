import { Header } from "./components/Header";
import { Post } from "./Post";

import './style.css';

export function App() { 

  return (
    <div>
      <Header />

      <Post 
        author="Edilson" 
        content="Hello React"
      />
      
    </div>
    
  )
}


