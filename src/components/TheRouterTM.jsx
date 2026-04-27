import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";
import BudgetPage from "./pages/BudgetPage";
import RoutinesPage from "./pages/RoutinesPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./Layout";
import ToDo from "./big4/list/ToDo";
import MorningRoutine from "./big4/routines/MorningRoutine";
import NightRoutine from "./big4/routines/NightRoutine";
import MasterBudget from "./big4/budget/MasterBudget";
import Transactions from "./big4/budget/helpers/Transactions";

export default function TheRouterTM()
{
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route path="lists" element={<ListsPage />} />
                <Route path="lists/todo" element={<ToDo />} />

                <Route path="routines" element={<RoutinesPage />} />
                <Route path="routines/morning_routine" element={<MorningRoutine />} />
                <Route path="routines/night_routine" element={<NightRoutine />} />

                <Route path="budgets" element={<BudgetPage />} />
                <Route path="budgets/master_budget" element={<MasterBudget />} />

                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    </HashRouter>
}   
