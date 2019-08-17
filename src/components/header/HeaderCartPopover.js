import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CartList from './CartList';


const useStyles = makeStyles({
  root: {
    float: 'right',
  },

  rightMargin: {
    marginRight: '15vh !important',
  },

  rightMarginSmall: {
    marginRight: '5vh !important',
  },

  button: {
    color: '#888 !important',
    fontSize: '58% !important',
  },
});


const HeaderCartPopover = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const smallPhones = useMediaQuery('(max-width:480px)');
  const smallTablet = useMediaQuery('(max-width:767px)');
  const tabletPortrait = useMediaQuery('(max-width:1023px)');
  const monitorBigTablet = useMediaQuery('(max-width:1200px)');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  
  const addedToCart = props.userCart.length;
  const open = Boolean(anchorEl) && addedToCart > 0 ;
  const id = open? 'simple-popover' : undefined;
  const isCart = smallPhones || smallTablet;
  const rightMargin = isCart ? classes.rightMarginSmall : classes.rightMargin;
  return (
    <div className={`${classes.root} ${rightMargin}`}>
      <Button aria-describedby={id} className={classes.button} size="small" onClick={handleClick}>
        {isCart && <ShoppingCart />}{`${!isCart ? 'My Cart' : ''} (${addedToCart})`}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <CartList userCart={props.userCart} />
      </Popover>
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({
    userCart: cart.userCart,
});

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderCartPopover)
