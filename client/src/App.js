import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import Home from "./pages/Home";
import UserAdd from "./pages/UserAdd";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <Topbar />
        <div className="section-app">
          <Sidebar />
          <Routes>
            <Route path="/home" exact={true} element={<Home/>}></Route>
          </Routes>
          <Routes>
            <Route path="/addUser" exact={true} element={<UserAdd/>}></Route>
          </Routes>
          <Routes>
            <Route
              path="/analiticsManage"
              exact={true}
              element={<Home />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
