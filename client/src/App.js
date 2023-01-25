import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
//import { Main } from "./components/Main";


function App() {
  return (    
    <div className="container-app">
    <BrowserRouter>
      <Topbar/>
      <div className="section-app">
        <Sidebar/>
      
      </div>
      
      <Routes>
        <Route to='/' exact></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
