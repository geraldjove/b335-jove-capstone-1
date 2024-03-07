import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Portfolio() {
    return (
        <Container fluid id="portfolio">
            <Container>
                <ProjectCard />
            </Container>
        </Container>
    );
}

export default Portfolio;
