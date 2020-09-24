import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Navigation } from './styles';

import logo from '../../assets/logo.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  handleToggle(e) {
    const { isExpanded } = this.state;

    e.preventDefault();
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="MS Metalúrgica" height="60px" />
          </Link>
        </div>
        <nav className="nav">
          <FontAwesomeIcon icon={faBars} onClick={e => this.handleToggle(e)} />
          <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
            <NavLink activeClassName="active" to="/empresa">
              <li>EMPRESA</li>
            </NavLink>
            <NavLink activeClassName="active" to="/produtos">
              <li>PRODUTOS</li>
            </NavLink>
            <NavLink activeClassName="active" to="/servicos">
              <li>SERVIÇOS</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contato">
              <li>CONTATO</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
