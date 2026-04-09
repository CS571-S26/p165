import { HashRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";
import BudgetPage from "./pages/BudgetPage";
import RoutinesPage from "./pages/RoutinesPage";
import AboutPage from "./pages/AboutPage";

export default function TheRouterTM()
{
    return <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/lists" element={<ListsPage />} />
                <Route path="/routines" element={<RoutinesPage />} />
                <Route path="/budget" element={<BudgetPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Route>
        </Routes>
    </HashRouter>
}   
