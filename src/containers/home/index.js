import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  addToCart,
} from '../../modules/cart';
import Header from '../../components/header/Header';
import ClassicTee from '../../resources/img/classic-tee.jpg';

const useStyles = makeStyles({
  root: {
    padding: 0,
    backgroundColor: '#fff',
    color: '#222',
    fontFamily: 'Open Sans, Lato, Arial, sans-serif',
    fontWeight: 500,
    fontSize: '20px',
    textRendering: 'optimizeLegibility',
    overflowX: 'hidden',
  },
  section: {
    flexGrow: 1,
  },
  photo: {
    textAlign: 'right',
  },
  itemDetails: {
    paddingLeft: '150px !important',
  },
  itemDetailtabletPortrait: {
    paddingLeft: '110px !important',
  },
  itemDetailsSmallTablet: {
    paddingLeft: '60px !important',
  },
  itemDetailsSmallPhone: {
    paddingLeft: '10px !important',
    maxWidth: '100% !important'
  },
  price: {
    marginTop: '20px',
    borderTop: '1px solid #f2f2f2',
    borderBottom: '1px solid #f2f2f2',
    marginBottom: '22px',
    padding: '8px 0',
    fontSize: '70%',
    width: '90%',
  },
  priceSmallPhone: {
    borderTop: 'none !important',
    borderBottom: 'none !important',
  },
  description: {
    fontSize: '65%',
    color: '#888888', 
    marginBottom: '30px',
    width: '90%',
    lineHeight: '20px',
  },
  size: {
    fontSize: '60%',
    color: '#888888', 
    marginBottom: '8px',
  },
  button: {
    minWidth: 0,
    marginRight: '8px',
    padding: '8px 15px',
    border: '1px solid #ccc',
    borderRadius: '1px',
    color: '#888',
    fontSize: '60%',
  }, 
  buttonActive: {
    minWidth: 0,
    marginRight: '8px',
    padding: '7px 14px',
    border: '2px solid #222',
    borderRadius: '1px',
    color: '#222',
    fontSize: '60%',
  },
  addToCart: {
    minWidth: 0,
    marginTop: '20px',
    padding: '7px 30px',
    border: '2px solid #222',
    borderRadius: '1px',
    color: '#222',
    fontSize: '68%',
    '&:hover': {
      background: '#222',
      color: '#fff',
    },
  }
});


const Home = (props) => {
  const [size, setSize] = React.useState(undefined);
  const classes = useStyles();
  const smallPhones = useMediaQuery('(max-width:480px)');
  const smallTablet = useMediaQuery('(max-width:767px)');
  const tabletPortrait = useMediaQuery('(max-width:1023px)');
  const monitorBigTablet = useMediaQuery('(max-width:1200px)');

  function setCurrentSize(newSize) {
    if (newSize === size) 
      setSize(undefined);
    else
      setSize(newSize);
  }
  const imageSize = smallTablet ? 
    {
      height: '550px',
      width: '360px',
    } : {
      height: '600px',
      width: '420px',
    };
  const direction = smallPhones ? 'column' : 'row';
  let itemDetails = classes.itemDetails;
  if (smallPhones)
    itemDetails = classes.itemDetailsSmallPhone;
  else if (smallTablet)
    itemDetails = classes.itemDetailsSmallTablet;
  else if (tabletPortrait)
    itemDetails = classes.itemDetailtabletPortrait;
  return (
    <div className={classes.root}>
      <Header />
      <Grid container direction={direction} justify="center" className={classes.root} spacing={2}>
        <Grid item xs={6} className={classes.photo}>
          <img src={ClassicTee} height={imageSize.height} width={imageSize.width} />
        </Grid>
        <Grid item xs={6} className={itemDetails}>
          Classic Tee
          <div className={`${classes.price} ${smallPhones ? classes.priceSmallPhone : ''}`}><strong>$75.00</strong></div>
          <div className={classes.description}>
            Dolor sit amet, consectetur adipscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actsum est, id officium appellamus dolor sit amet, consectur adipscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus
          </div>
          <div className={classes.size}><strong>SIZE<span style={{color: 'red'}}>*</span> <span style={{color: '#222'}}>{size ? size : ''}</span></strong></div>
          <div>
            <Button onClick={() => setCurrentSize('S')} size="small" variant="outlined" className={size === 'S' ? classes.buttonActive : classes.button}>
              S
            </Button>
            <Button onClick={() => setCurrentSize('M')} size="small" variant="outlined" className={size === 'M' ? classes.buttonActive : classes.button}>
              M
            </Button>
            <Button onClick={() => setCurrentSize('L')} size="small" variant="outlined" className={size === 'L' ? classes.buttonActive : classes.button}>
              L
            </Button>
          </div>
          <Button onClick={() => props.addToCart(size)} size="small" variant="outlined" className={classes.addToCart}>
            <strong>ADD TO CART</strong>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ }) => ({
})

const mapDispatchToProps = {
  addToCart,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
