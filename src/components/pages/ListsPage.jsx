import { Card, Button } from "react-bootstrap"

export default function ListsPage()
{
    return <div>
        <h1>Lists</h1>
            <Card style={{
                borderRadius: 10,
                maxHeight: 100,
                maxWidth: 100
            }}>
                <p>This is where the to-do will go</p>
            </Card>

            <Button onClick={() => alert("This button is not yet implemented")}>+</Button>
    </div>
}