import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Community from "./pages/Community";
import Support from "./pages/Support";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <main>
        <Routes>
          <Route path="/community" element={<Community></Community>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
