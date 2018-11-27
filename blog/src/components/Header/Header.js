import React from 'react'
import Button from '../Button/Button'
import classes from './Header.css'

const Header = () => {
  return (
    <div className={classes.Header}>
      <h1>My Blog</h1>
      <Button> Logout </Button>
    </div>
  )
}

export default Header
