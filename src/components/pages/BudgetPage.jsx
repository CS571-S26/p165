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
        <br></br>
        <br></br>
        <h2>Your Budgets</h2>
        <br></br>
        <Button onClick={() => alert("This button is not yet implemented")}>Add Budget</Button>
    </div>
}