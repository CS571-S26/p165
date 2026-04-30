import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function HomePage()
{
    const navigate = useNavigate();
    return <div className="page-background">
    <div className="page-layout">
        <h1>Welcome to Toolbox!</h1>
        <br></br>
        <h2>Quick Access</h2>
        <div className="display-row">
            <Row>
                <Col>
                <br></br>
                    <Card className="list-card-front-page" onClick={() => navigate("/list")}>To Do List</Card>
                </Col>
                <Col>
                    <div className="display-text">
                        <h3>To Do List</h3>
                            <p>
                                The goal of the to do list is to allow a user to keep track of small, one 
                                off tasks and keep track of what they've done so far.
                            </p>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="display-row">
            <Row>
                <Col>
                    <Card className="morning-routine-card-front-page" onClick={() => navigate("/morning_routine")}>Morning Routine</Card>
                </Col>
                <Col>
                    <div className="display-text">
                        <h3>Morning Routine</h3>
                            <p>
                                Going to bed and waking up at the same times
                                every day, when paired with a consistent routine, are shown to improve 
                                sleep, boosting numerous areas of wellness.
                            </p>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="display-row">
            <Row>
                <Col>
                    <Card className="night-routine-card-front-page" onClick={() => navigate("/night_routine")}>Night Routine</Card>
                </Col>
                <Col>
                    <div className="display-text">
                        <h3>Night Routine</h3>
                            <p>
                                Just as important as the morning routine, a solid routine at night can
                                yield many benefits. 
                            </p>
                    </div>
                </Col>
            </Row>
        </div>
        <br></br>
        <h3>Our Mission!</h3>
        <p>
            A few years ago when I decided to start taking a more purposeful approach to 
            organizing my life, I discovered that my phone was a major black hole for my 
            time. Not only was it chock full of apps that wasted my time and took me away
            from my responsibilties, but the apps that WERE useful were so spread out that
            often times, all it took for me to lose focus was to see a time-wasting app 
            while I was trying to open a positive one.
        </p>
        <p>
            In response, I decided to consoidate that amount of services and apps I was using 
            into one app. I wanted to be able to simply grab my phone, do productive stuff, and
            immediately get off the phone so I wouldn't get distracted.
        </p>
        <p>
            The goal of this website is to help anyone else struggling with that more purposeful
            approach take the next step towards their goals.
        </p>
    </div>
    </div>
}