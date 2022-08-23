import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Route path='/movie'>
        <Detail />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
