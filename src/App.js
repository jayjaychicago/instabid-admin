import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BsFillGearFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaGavel, FaSearch } from 'react-icons/fa';
import { SlDocs } from 'react-icons/sl';
import SearchInput from 'react-search-input'

import logo from './logo.svg';

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
        <Sidebar
          rootStyles={{
            height: "100vh",
            width: "16.66667%"
          }}
        >
          <Menu width="16.666667%">
            <SearchInput className="sidebar-search-input" />
            <hr />
            <MenuItem icon={<BsFillGrid3X3GapFill />}>My Products</MenuItem>
            <MenuItem icon={<FaGavel />}>Bids</MenuItem>
            <hr />
            <MenuItem icon={<SlDocs />}>API Docs</MenuItem>
            <MenuItem icon={<SlDocs />}>UI Docs</MenuItem>
            <hr />
            <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem>
          </Menu>
      </Sidebar>
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
