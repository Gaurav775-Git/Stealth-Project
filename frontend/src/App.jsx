import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpages from "./pages/Mainpages";
import Notespage from "./pages/Notespage";
import Pyqpage from "./pages/Pyqpages";

                   // semester pages

import Sem1page from "./pages/semnotespages/Sem1page";
import Sem2page from "./pages/semnotespages/Sem2page";
import Sem3page from "./pages/semnotespages/Sem3page";
import Sem4page from "./pages/semnotespages/Sem4page";
import Sem5page from "./pages/semnotespages/Sem5page";
import Sem6page from "./pages/semnotespages/Sem6page";
import Sem7page from "./pages/semnotespages/Sem7page";
import Sem8page from "./pages/semnotespages/Sem8page";

                    // pyqpages
                    
import Pyq1page from "./pages/Pyqnotespages/Pyq1page";
import Pyq2page from "./pages/Pyqnotespages/Pyq2page";
import Pyq3page from "./pages/Pyqnotespages/Pyq3page";
import Pyq4page from "./pages/Pyqnotespages/Pyq4page";
import Pyq5page from "./pages/Pyqnotespages/Pyq5page";
import Pyq6page from "./pages/Pyqnotespages/Pyq6page";
import Pyq7page from "./pages/Pyqnotespages/Pyq7page";
import Pyq8page from "./pages/Pyqnotespages/Pyq8page";

//                       subjects

import Maths from "./pages/subjects/sem1/Maths";
import Coa from "./pages/subjects/sem1/Coa";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Mainpages />} />
          <Route path="/notes" element={<Notespage />} />
             <Route path="/notes/sem1" element={<Sem1page />} />
               <Route path="/notes/sem1/math" element={<Maths />} />
               <Route path="/notes/sem1/coa" element={<Coa />} />
             <Route path="/notes/sem2" element={<Sem2page />} />
             <Route path="/notes/sem3" element={<Sem3page />} />
             <Route path="/notes/sem4" element={<Sem4page />} />
             <Route path="/notes/sem5" element={<Sem5page />} />
             <Route path="/notes/sem6" element={<Sem6page />} />
             <Route path="/notes/sem7" element={<Sem7page />} />
             <Route path="/notes/sem8" element={<Sem8page />} />

            
          <Route path="/pyq" element={<Pyqpage />} />
             <Route path="/pyq/paper1" element={<Pyq1page />} />
             <Route path="/pyq/paper2" element={<Pyq2page />} />
             <Route path="/pyq/paper3" element={<Pyq3page />} />
             <Route path="/pyq/paper4" element={<Pyq4page />} />
             <Route path="/pyq/paper5" element={<Pyq5page />} />
             <Route path="/pyq/paper6" element={<Pyq6page />} />
             <Route path="/pyq/paper7" element={<Pyq7page />} />
             <Route path="/pyq/paper8" element={<Pyq8page />} />
       
        
      </Routes>
   
  );
}

export default App;
