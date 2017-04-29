import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

import Character from '../model/Character.jsx';

function LoginWidget(props) {
  if (props.character) {
    return (
      <Grid>
        <Row>
          <Col xs={2} md={2}>Hello {props.character.name}</Col>
          <Col xs={1} md={1}>
            <Button onClick={props.onLogout}><Glyphicon glyph="off" /></Button>
          </Col>
        </Row>
      </Grid>
    );
  }
  return null;
}

LoginWidget.propTypes = {
  character: Character.props(),
  onLogout: PropTypes.func.isRequired,
};

LoginWidget.defaultProps = {
  character: null,
};

function Header(props) {
  return (
    <div>
      <Grid>
        <Row style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Col xs={12} md={8}><h1>Scalable LARP Manager</h1></Col>
          <Col xs={6} md={4}>
            <LoginWidget character={props.character} onLogout={props.onLogout} />
          </Col>
        </Row>
      </Grid>
      <hr />
    </div>
  );
}

Header.propTypes = {
  character: Character.props(),
  onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  character: null,
};

module.exports = Header;
