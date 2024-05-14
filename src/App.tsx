import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Components/game';

function App() {
  return (
    <div className="App">
      <div className='header-salary'>Bầu cua</div>
      <Game />
      <div style={{ minHeight: "80px" }} />
      <div className='foolter-copyright'>
        <div>Copyright by <a href='https://github.com/TrungXI'>Nguyễn Việt Trung</a></div>
        <div>, Icon and Components by <a href='https://ant.design/'>Ant Design</a></div>
      </div>
    </div>
  );
}

export default App;
