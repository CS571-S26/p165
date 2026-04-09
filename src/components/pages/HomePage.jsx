import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function HomePage()
{
    const navigate = useNavigate();
    return <div style={{ alignItems: "center"}}>
        <h1>Home</h1>
        <Button onClick={() => navigate("/lists")}>Placeholder, will show lists</Button>
        <Button onClick={() => navigate("/routines")}>Placeholder, will show routines</Button>
        <Button onClick={() => navigate("/budget")}>Placeholder, will show budget</Button>
    </div>
}