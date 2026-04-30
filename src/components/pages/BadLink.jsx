import { Link } from "react-router";

export default function BadLink() {
    return (
        <div className="page-background">
        <div className="page-layout">
            <h2>That's a 404.</h2>
            <p>Uh-oh! Someone has ventured out into the Void! It'll get totally SPOILED!</p>
            <p>
                <Link to="/">Back to safety.</Link>
            </p>
        </div>
        </div>
    );
}