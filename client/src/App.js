import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import Home from "./pages/Home";
import UserAdd from "./pages/UserAdd";
import AllUsers from "./pages/AllUsers"
import Product from "./pages/Product";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <Topbar />
        <div className="section-app">
          <Sidebar />
          <Routes>
            <Route path="/home" exact={true} element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/allUsers" exact={true} element={<AllUsers />}></Route>
          </Routes>
          <Routes>
            <Route path="/addUser" exact={true} element={<UserAdd />}></Route>
          </Routes>
          <Routes>
            <Route path="/addProducts" exact={true} element={<Product />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
