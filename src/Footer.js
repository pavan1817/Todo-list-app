import React from 'react'

const Footer = ({length}) => {
    // const year = new Date();
  return (
    <footer>
        {/* Copyright &copy; {year.getFullYear()} */}
        {length} list {length <= 1 ? 'item' : 'items'}
    </footer>
  )
}

export default Footer;