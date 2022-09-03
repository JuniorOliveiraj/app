import logo from './logo.svg';
import './App.css';
import './css/styleMenu.css'
import Tubar from './menu-home/Tubar';
import ListItensMenu from './menu-home/ListItensMenu';
import GridColor from './GridColor/GridColor'
import Loading from './loanding/loanding';
import {useState} from 'react'


function App() {

  
  
  return (
    <div id="pp" className="App">

    

      <Tubar />
      <ListItensMenu />

      {/* <div className='centerColor'>
        <GridColor />
      </div> */}
       
       <div className='centerColor'>
       <Loading />
      </div> 
     


    </div>
  );
}

export default App;