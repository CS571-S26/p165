import { Card, Button } from "react-bootstrap"

export default function RoutinesPage()
{
    return <div>
        <h1>Routines</h1>
        <Card style={{
            borderRadius: 10,
            maxHeight: 100,
            maxWidth: 100
        }}>
            <p>This is where the morning routine will go</p>
        </Card>
        <Card style={{
            borderRadius: 10,
            maxHeight: 100,
            maxWidth: 100
        }}>
            <p>This is where the night routine will go</p>
        </Card>
        <br></br>
        <br></br>
        <h2>Your Routines</h2>
        <br></br>
        <Button onClick={() => alert("This button is not yet implemented")}>Add Routine</Button>
    </div>
}