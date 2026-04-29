import { Link } from "react-router";

export default function BadLink() {
    return (
        <div className="page-layout">
            <h2>That's a 404.</h2>
            <p>Uh oh, looks like you've taken a wrong turn!</p>
            <p>
                <Link to="/">Back to safety.</Link>
            </p>
        </div>
    );
}