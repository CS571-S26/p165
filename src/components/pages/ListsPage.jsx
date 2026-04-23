import { Card, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export default function ListsPage()
{
    const navigate = useNavigate();

    return <Container className="page-layout">
        <h1>Lists</h1>
        <Card 
        className="list-card"
        onClick={() => navigate("/lists/todo")}>
            To do list
        </Card>
        <h2>Your Lists</h2>
        <Button onClick={() => alert("This button is not yet implemented")}>Add List</Button>
    </Container>
}