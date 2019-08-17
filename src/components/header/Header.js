import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core';
import HeaderCartPopover from './HeaderCartPopover';


const useStyles = makeStyles({
  root: {
    height: '30px',
    backgroundColor: '#F6F6F7',
    marginBottom: '30px',
  },
});


const Header = (props) => {
  const classes = useStyles();
  const addedToCart = 4;
  return (
    <header className={classes.root}>
        <HeaderCartPopover />
    </header>
  );
}

const mapStateToProps = ({}) => ({
})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
