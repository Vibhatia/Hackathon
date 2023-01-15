
import './App.css';
import Table from './components/Table'
import Navbar from './components/Navbar';
import Cards from  "./components/Cards"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Capsule from './components/medicines/Capsule';
function App() {
  return (
    // <div className="App">
    <>
   <Navbar/>
    {/* <Table/> */}

    <Cards/>
    </>
      
    // </div>
  );
}

export default App;
