import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function HomePage()
{
    const navigate = useNavigate();
    return <div style={{ alignItems: "center"}}>
        <h1>Welcome to Toolbox!</h1>
        <br></br>
        <h2>Quick Access</h2>
        <Button onClick={() => navigate("/lists")}>Placeholder, will show lists</Button>
        <Button onClick={() => navigate("/routines")}>Placeholder, will show routines</Button>
        <Button onClick={() => navigate("/budget")}>Placeholder, will show budget</Button>
    </div>
}