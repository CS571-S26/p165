import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function HomePage()
{
    const navigate = useNavigate();
    return <Container className="page-layout">
        <h1>Welcome to Toolbox!</h1>
        <br></br>
        <h2>Quick Access</h2>
        <Card className="list-card" onClick={() => navigate("/list")}>To Do List</Card>
        <Card className="routine-card" onClick={() => navigate("/morning_routine")}>Morning Routine</Card>
        <Card className="routine-card" onClick={() => navigate("/night_routine")}>Night Routine</Card>
        <Card className="budget-card" onClick={() => navigate("/budget")}>Master Budget</Card>
    </Container>
}