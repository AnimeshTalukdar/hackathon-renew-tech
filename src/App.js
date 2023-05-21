import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Community from "./pages/Community";
import Support from "./pages/Support";
import About from "./pages/About";
import Home from "./pages/Home";
import AdminPage from "./pages/store/AdminPage";
import ProductPage from "./pages/store/ProductPage";
function App() {
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <main>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
          <Route path="/community" element={<Community></Community>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
            <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
            <Route path={"/ProductPage"} element={<ProductPage></ProductPage>}></Route>

        </Routes>
      </main>
    </div>
  );
}

export default App;
