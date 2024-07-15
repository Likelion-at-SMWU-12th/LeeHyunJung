import "./App.css";
import { Routes, Route } from "react-router-dom";
import Week01 from "./pages/Week01";
import Week02 from "./pages/Week02";
import Week03 from "./pages/Week03";
import Week04 from "./pages/Week04";
import Week05 from "./pages/Week05";
import Menubar from "./pages/Menubar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/week01" element={<Week01 />} />
        <Route path="/week02" element={<Week02 />} />
        <Route path="/week03" element={<Week03 />} />
        <Route path="/week04" element={<Week04 />} />
        <Route path="/week05" element={<Week05 />} />
      </Route>
    </Routes>
  );
}

export default App;
