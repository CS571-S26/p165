import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function HomePage()
{
    const navigate = useNavigate();
    return <Container className="page-layout">
        <h1>Welcome to Toolbox!</h1>
        <br></br>
        <h2>Quick Access</h2>
        <Card onClick={() => navigate("/lists/todo")}>To Do List</Card>
        <Card onClick={() => navigate("/routines/morning_routine")}>Morning Routine</Card>
        <Card onClick={() => navigate("/routines/night_routine")}>Night Routine</Card>
        <Card onClick={() => navigate("/budgets/master_budget")}>Master Budget</Card>
    </Container>
}