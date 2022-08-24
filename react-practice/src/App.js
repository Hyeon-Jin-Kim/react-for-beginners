import { Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie' element={<Detail />} />
    </Routes>
  </Router>;
}

export default App;
