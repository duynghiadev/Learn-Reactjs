import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './Header.scss'

Header.propTypes = {}

function Header() {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <a
              className='header__link header__title'
              href='https://www.facebook.com/duynghia.22302/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Duy Nghia Dev
            </a>
          </Col>

          <Col xs='auto'>
            <NavLink
              exact
              className='header__link'
              to='/sign-in'
              activeClassName='header__link--active'
            >
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
