import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import AllUsers from "./pages/AllUsers"
import AddProduct from "./pages/AddProduct";

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
            <Route path="/addUser" exact={true} element={<AddUser />}></Route>
          </Routes>
          <Routes>
            <Route
              path="/addProducts"
              exact={true}
              element={<AddProduct />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
