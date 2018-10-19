import React from 'react';
import "./Captain.css";
import { Card, CardTitle, CardText, CardBody, CardSubtitle, Container, Row, Col, CardImg } from 'reactstrap';

const Captain = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Captain Information: CLASSIFIED</CardTitle>
                        <CardSubtitle>Captain Biography</CardSubtitle>
                        <CardText>Biography Goes HERE!</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}
export default Captain;