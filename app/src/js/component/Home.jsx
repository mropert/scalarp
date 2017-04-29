import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

function Home(props) {
  return (
    <Grid>
      <Row>
        <Col>
          <Button bsSize="lg" onClick={() => props.navigate('character')}>
            <Glyphicon glyph="user" style={{ fontSize: '50px' }} /><br />
            Character Sheet
          </Button>
        </Col>
      </Row>
    </Grid>
  );
}

Home.propTypes = {
  navigate: PropTypes.func.isRequired,
};

module.exports = Home;
