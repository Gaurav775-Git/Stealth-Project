import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpages from "./pages/Mainpages";
import Notespage from "./pages/Notespage";
import Pyqpage from "./pages/Pyqpages";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Mainpages />} />
        <Route path="/notes" element={<Notespage />} />
        <Route path="/pyq" element={<Pyqpage />} />
      </Routes>
   
  );
}

export default App;
