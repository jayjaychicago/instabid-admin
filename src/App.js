import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { InstabidSidebar } from './components/InstabidSidebar';

import './assets/styles/App.scss';

function App() {
  return (
      <>
        <Navbar expand="xl" variant="dark" bg="instabid">
          <Container>
            <Navbar.Brand bsPrefix="instabid-nav-brand" href="#"><span>Instabid</span>Admin</Navbar.Brand>
            <Navbar.Text>
              Signed in as: <a href="#login">Julien Jacquet</a>
            </Navbar.Text>
          </Container>
        </Navbar>
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
