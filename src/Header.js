import React from 'react';

const Header = (props) => {
  return (
    <header>
        <h2>{props.title}</h2>
    </header>
  )
};
Header.defaultProps = {
  title : "To do list"
};
export default Header;