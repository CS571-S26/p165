import { HashRouter, Route, Routes } from "react-router";

export default function TheRouterTM()
{
    return <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/lists" element={<ListsPage />} />
                <Route path="/routines" element={<RoutinesPage />} />
                <Route path="/budget" element={<BudgetPage />} />
            </Route>
        </Routes>
    </HashRouter>
}   
