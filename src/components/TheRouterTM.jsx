import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";
import BudgetPage from "./pages/BudgetPage";
import RoutinesPage from "./pages/RoutinesPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./Layout";
import ToDo from "./big4/ToDo";

export default function TheRouterTM()
{
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route path="lists" element={<ListsPage />} />
                <Route path="lists/todo" element={<ToDo />} />

                <Route path="routines" element={<RoutinesPage />} />
                <Route path="budget" element={<BudgetPage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    </HashRouter>
}   
