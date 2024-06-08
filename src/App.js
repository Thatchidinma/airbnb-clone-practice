import { Card } from './components/Card';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import {data} from './components/data'
import React from 'react';


function App() {
  const cardComponent = data.map(item => <Card key={item.id} {...item}/>)

  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Hero/>
        <div className='cardComponent'>
        {cardComponent}
        </div>
      </div>
    </div>
  );
}

export default App;
