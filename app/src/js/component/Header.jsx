import PropTypes from 'prop-types';
import React from 'react';
import { Button, ButtonToolbar, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

import Character from '../model/Character.jsx';

function Greetings({ character }) {
  if (character) {
    return <p>Hello {character.name}</p>;
  }
  return null;
}

Greetings.propTypes = {
  character: Character.props(),
};

Greetings.defaultProps = {
  character: null,
};

function LogoutButton({ character, onLogout }) {
  if (character) {
    return <Button onClick={onLogout}><Glyphicon glyph="off" /></Button>;
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

function NavWidget({ character, navigate, onLogout }) {
  return (
    <Grid>
      <Row>
        <Col xs={2} md={2}><Greetings character={character} /></Col>
        <Col xs={2} md={2}>
          <ButtonToolbar>
            <Button onClick={() => navigate('home')}><Glyphicon glyph="home" /></Button>
            <LogoutButton character={character} onLogout={onLogout} />
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

function Header({ character, navigate, onLogout }) {
  return (
    <div>
      <Grid>
        <Row style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Col xs={12} md={8}><h1>Scalable LARP Manager</h1></Col>
          <Col xs={6} md={4}>
            <NavWidget
              character={character}
              navigate={navigate}
              onLogout={onLogout}
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
