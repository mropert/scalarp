import PropTypes from 'prop-types';
import React from 'react';
import { Button, ButtonToolbar, Col, Container, Row } from 'reactstrap';
import { FaHome, FaPowerOff } from 'react-icons/lib/fa'

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
    return <Button onClick={onLogout}><FaPowerOff /></Button>;
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

function NavWidget({ character, navigateHome, onLogout }) {
  return (
    <Container>
      <Row>
        <Col xs={2} md={2}><Greetings character={character} /></Col>
        <Col xs={2} md={2}>
          <ButtonToolbar>
            <Button onClick={() => navigateHome()}><FaHome /></Button>
            <LogoutButton character={character} onLogout={onLogout} />
          </ButtonToolbar>
        </Col>
      </Row>
    </Container>
  );
}

NavWidget.propTypes = {
  character: Character.props(),
  navigateHome: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

NavWidget.defaultProps = {
  character: null,
};

export default function Header({ character, navigateHome, onLogout }) {
  return (
    <div>
      <Container>
        <Row style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Col xs={12} md={8}><h1>Scalable LARP Manager</h1></Col>
          <Col xs={6} md={4}>
            <NavWidget
              character={character}
              navigateHome={navigateHome}
              onLogout={onLogout}
            />
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
}

Header.propTypes = {
  character: Character.props(),
  navigateHome: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  character: null,
};
