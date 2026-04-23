import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function HomePage()
{
    const navigate = useNavigate();
    return <div style={{ alignItems: "center"}}>
        <h1>Welcome to Toolbox!</h1>
        <br></br>
        <h2>Quick Access</h2>
        <Card onClick={() => navigate("/lists/todo")}>To Do List</Card>
        <Card onClick={() => navigate("/routines/morning_routine")}>Morning Routine</Card>
        <Card onClick={() => navigate("/routines/night_routine")}>Night Routine</Card>
        <Card onClick={() => navigate("/budget/master_budget")}>Master Budget</Card>
    </div>
}