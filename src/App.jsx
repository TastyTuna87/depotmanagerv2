import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Datas from "./pages/Datas";
import Assortment from "./pages/Assortment";
import Tasks from "./pages/Tasks";
import Sidebar from "./components/Sidebar";
import Nutrition from "./pages/Nutrition";
import { Notes } from "./pages/Notes";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/assortment" element={<Assortment />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/" element={<Tasks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/datas" element={<Datas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
