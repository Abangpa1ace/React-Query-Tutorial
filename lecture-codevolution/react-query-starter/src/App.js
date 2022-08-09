import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import RQDependentQueriesPage from "./components/RQDependentQueries.page";
import RQDynamicParallelQueriesPage from "./components/RQDynamicParallelQueries.page";
import RQInfiniteQueriesPage from "./components/RQInfiniteQueries.page";
import RQPaginatedQueryPage from "./components/RQPaginatedQuery.page";
import RQParallelQueriesPage from "./components/RQParallelQueries.page";
import { RQSuperHeroDetailPage } from "./components/RQSuperHeroDetail.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-dependent">RQ Dependent</Link>
            </li>
            <li>
              <Link to="/rq-parallel">RQ Parallel</Link>
            </li>
            <li>
              <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel</Link>
            </li>
            <li>
              <Link to="/rq-dependent">RQ Dependent</Link>
            </li>
            <li>
              <Link to="/rq-paginated">RQ Paginated</Link>
            </li>
            <li>
              <Link to="/rq-infinite">RQ Infinite</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/rq-infinite">
            <RQInfiniteQueriesPage />
          </Route>
          <Route path="/rq-paginated">
            <RQPaginatedQueryPage />
          </Route>
          <Route path="/rq-dependent">
            <RQDependentQueriesPage email="vishwas@example.com" />
          </Route>
          <Route path="/rq-dynamic-parallel">
            <RQDynamicParallelQueriesPage heroIds={[1, 3]} />
          </Route>
          <Route path="/rq-parallel">
            <RQParallelQueriesPage />
          </Route>
          <Route path="/rq-super-hero/:heroId">
            <RQSuperHeroDetailPage />
          </Route>
          <Route path="/super-heroes">
            <SuperHeroesPage />
          </Route>
          <Route path="/rq-super-heroes">
            <RQSuperHeroesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
