import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import ToDo from "../big4/ToDo"

export default function ListsPage()
{
    const navigate = useNavigate();

    return <div>
        <h1>Lists</h1>
        <Card style={{
            borderRadius: 10,
            maxHeight: 100,
            maxWidth: 100
        }}
        onClick={() => navigate("/lists/todo")}>
            To do list
        </Card>
        <br></br>
        <br></br>
        <h2>Your Lists</h2>
        <br></br>
        <Button onClick={() => alert("This button is not yet implemented")}>Add List</Button>
    </div>
}