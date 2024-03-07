import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ProjectCard() {
    const portCards = [
        {
            portTitle: "Testing0",
            portParagraph: "Testing Paragraph0",
            portCode: "Testing Port Code0",
            portLink: "Testing Port Link0",
        },
        {
            portTitle: "Testing1",
            portParagraph: "Testing Paragraph1",
            portCode: "Testing Port Code1",
            portLink: "Testing Port Link1",
        },
        {
            portTitle: "Testing2",
            portParagraph: "Testing Paragraph2",
            portCode: "Testing Port Code2",
            portLink: "Testing Port Link2",
        },
    ];

    return (
        <Container className="py-5" fluid>
            {portCards.map((portCard, index) => (
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} md={6}>
                        <h1>{portCard.portTitle}</h1>
                        <p>{portCard.portParagraph}</p>
                        <Row className="d-flex">
                            <p>{portCard.portCode}</p>
                            <p>{portCard.portLink}</p>
                        </Row>
                    </Col>
                    <Col
                        xs={12}
                        md={"auto"}
                        className="d-flex justify-content-center"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png"
                            alt="profile_picture"
                            width={"300px"}
                        />
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default ProjectCard;
