import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import MainMenu from "./pages/MainMenu";
import RoomPage from "./pages/RoomPage";
import InstructorPage from "./pages/InstructorPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import FloorPage from "./pages/FloorPage";

function App() {
  return (
    <Router basename="/cca-emap">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/schedule" element={<InstructorPage />} />
        <Route path="/faculty" element={<UnderConstructionPage />} />
        <Route path="/laboratory" element={<UnderConstructionPage />} />
        <Route path="/floor/:id" element={<FloorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
