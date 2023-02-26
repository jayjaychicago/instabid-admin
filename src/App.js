
import { InstabidSidebar } from './components/InstabidSidebar';
import { InstabidTopMenu } from './components/InstabidTopMenu';

import './assets/styles/App.scss';

function App() {
  return (
      <>
        <InstabidTopMenu />
        <InstabidSidebar />
      </>
  );

//   <SubMenu label="Charts">
//   <MenuItem> Pie charts </MenuItem>
//   <MenuItem> Line charts </MenuItem>
// </SubMenu>
// <MenuItem> Documentation </MenuItem>
// <MenuItem> Calendar </MenuItem>
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
