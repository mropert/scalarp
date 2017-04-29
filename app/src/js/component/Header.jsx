import PropTypes from 'prop-types';
import React from 'react';
import { Button, ButtonToolbar, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

import Character from '../model/Character.jsx';

function Greetings(props) {
  if (props.character) {
    return <p>Hello {props.character.name}</p>;
  }
  return null;
}

Greetings.propTypes = {
  character: Character.props(),
};

Greetings.defaultProps = {
  character: null,
};

function LogoutButton(props) {
  if (props.character) {
    return <Button onClick={props.onLogout}><Glyphicon glyph="off" /></Button>;
  }
  return null;
}

LogoutButton.propTypes = {
  character: Character.props(),
  onLogout: PropTypes.func.isRequired,
};

LogoutButton.defaultProps = {
  character: null,
};

function NavWidget(props) {
  return (
    <Grid>
      <Row>
        <Col xs={2} md={2}><Greetings character={props.character} /></Col>
        <Col xs={2} md={2}>
          <ButtonToolbar>
            <Button onClick={() => props.navigate('home')}><Glyphicon glyph="home" /></Button>
            <LogoutButton character={props.character} onLogout={props.onLogout} />
          </ButtonToolbar>
        </Col>
      </Row>
    </Grid>
  );
}

NavWidget.propTypes = {
  character: Character.props(),
  navigate: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

NavWidget.defaultProps = {
  character: null,
};

function Header(props) {
  return (
    <div>
      <Grid>
        <Row style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Col xs={12} md={8}><h1>Scalable LARP Manager</h1></Col>
          <Col xs={6} md={4}>
            <NavWidget
              character={props.character}
              navigate={props.navigate}
              onLogout={props.onLogout}
            />
          </Col>
        </Row>
      </Grid>
      <hr />
    </div>
  );
}

Header.propTypes = {
  character: Character.props(),
  navigate: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  character: null,
};

module.exports = Header;
