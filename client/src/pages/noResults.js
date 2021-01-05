import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoResults() {
    return (
        <Container>
            <Row>
                <Col size="col-md-12">
                    <Jumbotron>
                        <h1 className="text-white">404 Page Not Found</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoResults;