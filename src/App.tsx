import '../src/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/components/profile';
import WatchScreen from './screens/components/watchScreen';

function App() {
  return (
    <div className="base-flex App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomeScreen mediaPage={'home'} />} />
          <Route path="/movies" exact component={() => <HomeScreen mediaPage={'Movie'} />} />
          <Route path="/shows" exact component={() => <HomeScreen mediaPage={'Show'} />} />
          <Route path="/watch" exact component={() => <WatchScreen />} />
          <Route path="/add-data" exact component={() => <ProfileScreen />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
