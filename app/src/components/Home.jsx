import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { FaUser } from 'react-icons/lib/fa'

export default function Home({ navigate }) {
  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={() => navigate('character')}>
            <FaUser style={{ fontSize: '50px' }} /><br />
            Character Sheet
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

Home.propTypes = {
  navigate: PropTypes.func.isRequired,
};
