import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Community from "./pages/Community";
import Support from "./pages/Support";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App dark:bg-black">
      <MainHeader></MainHeader>
      <main>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
          <Route path="/community" element={<Community></Community>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
