import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Default from "layouts/Default/Default";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={Default} />
      </Switch>
    </Router>
  );
}

export default App;
