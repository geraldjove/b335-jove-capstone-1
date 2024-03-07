import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutSection() {
    return (
        <Container
            fluid
            className="vh-100 bg-light d-flex align-items-center"
            id="about"
        >
            <Container className="">
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png"
                            alt="profile_picture"
                            width={"300px"}
                        />
                    </Col>
                    <Col>
                        <h3 className="text-primary">About Me</h3>
                        <h1 className="fw-bold">
                            Enim cillum ipsum ad nisi aliqua proident
                            consectetur et officia exercitation.
                        </h1>
                        <p>
                            Id aliqua exercitation sit ad anim magna mollit
                            mollit Lorem. Et anim ullamco labore reprehenderit
                            aute et consectetur magna dolore ad. Officia ut
                            aliqua elit laboris minim. Tempor Lorem id minim
                            ullamco sit dolor dolor. Enim exercitation eu
                            cupidatat ex. Nulla nisi aliquip consectetur id in
                            dolore do ea ex aute do. Aliqua sint adipisicing
                            fugiat nisi ullamco enim qui incididunt qui laborum
                            culpa minim dolor.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AboutSection;
