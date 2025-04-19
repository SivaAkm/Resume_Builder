import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage';
import PersonalDetails from "./components/PersonalDetails";
import PDFviewer from "./components/PDFviewer";



const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/Resume_Builder" element={<LandingPage />} />
      <Route path="/PersonalDetails" element={<PersonalDetails />} />
      <Route path="/PDFviewer" element={<PDFviewer />} />
    </Routes>
  </Router>
  );
};





export default App;
