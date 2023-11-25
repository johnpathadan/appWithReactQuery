import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import HomePage from "./components/Home.page";
import RQSuperheroesPage from "./components/RQSuperheroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperheroesPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
