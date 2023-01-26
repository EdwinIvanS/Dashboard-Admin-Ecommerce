import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <Topbar />
        <div className="section-app">
          <Sidebar />
          <Routes>
            <Route path="/Home" exact={true} element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/AnaliticsManage" exact={true} element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
