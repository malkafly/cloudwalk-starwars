import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
