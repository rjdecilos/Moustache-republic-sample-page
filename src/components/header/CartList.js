import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classicTee from '../../resources/img/classic-tee.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    backgroundColor: theme.palette.background.paper,
    color: '#222',
  },
  inline: {
    display: 'inline',
  },
  listItem: {
    marginBottom: '10px',
  },
  listItemText: {
    marginLeft: '10px',
  },
  productName: {
    fontSize: '80%',
    marginTop: '-5px',
    color: '#222 !important',
  },
}));

export default function CartList(props) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
        {props.userCart.map(data => (
            <ListItem className={classes.listItem} alignItems="flex-start">
                <img src={classicTee} height="100px" width="65px" />
                <ListItemText
                    className={classes.listItemText}
                    primary={
                        <React.Fragment>
                            <p className={classes.productName}>{data.name}</p>
                            <p className={classes.productName}>{`${data.count}x`}<strong>{data.amount}</strong></p>
                            <p className={classes.productName}>{`Size: ${data.size}`}</p>
                        </React.Fragment>
                    }
                />
            </ListItem>
        ))}
    </List>
  );
}