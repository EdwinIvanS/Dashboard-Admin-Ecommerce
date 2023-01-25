import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";


function App() {
  return (    
    <div className="container-app">
    <BrowserRouter>
      <Topbar/>
      <Sidebar/>
      <Routes>
        <Route to='/' exact></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
