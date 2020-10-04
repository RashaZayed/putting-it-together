import React from 'react';
import MyNewComponent from "./newcomponent/MyNewComponent"

import './App.css';

function App() {
  return (
    <div className="App">
     <MyNewComponent lastName="Zayed" firstName="Rasha" age={30} hairColor="Brown"/>
     <MyNewComponent lastName="Smith" firstName="Doe" age={40}hairColor="Brown"/>
     <MyNewComponent lastName="Elder" firstName="Augisanda" age={50} hairColor="Brown"/>
     <MyNewComponent lastName="Rendell" firstName="Moh" age={60} hairColor="Black"/>
    </div>
  );
}

export default App;
