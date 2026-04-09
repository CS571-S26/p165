import { Card, Button } from "react-bootstrap"

export default function BudgetPage()
{
    return <div>
        <h1>Budget</h1>
        <Card style={{
            borderRadius: 10,
            maxHeight: 100,
            maxWidth: 100
        }}>
            <p>This is where the default budget will go</p>
        </Card>

        <Button onClick={() => alert("This button is not yet implemented")}>+</Button>
    </div>
}