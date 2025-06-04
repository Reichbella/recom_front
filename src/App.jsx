import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../../../recom_stream/front/src/pages/Movies";

function App() {
  return (
    <Router>
      <Routes>
        <Route />
        <Route path="/" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
