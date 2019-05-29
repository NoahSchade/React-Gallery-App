import React from 'react';
import Form from './Form';
import Nav from './Nav';

const Header = (props) => {
  return (
    <div className="header-container">
      <Form searching={props.searching}/>
      <Nav incrementTwo={props.incrementTwo} />
    </div>
  );
}

export default Header;