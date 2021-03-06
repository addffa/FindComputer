import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const description = (props.description === null || props.description === '')
    ? "No description" : props.description;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Category: {props.category}
        </Typography>
        <Typography variant="body2" component="p">
          Description: {description}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Rp.{props.price}
        </Typography>
      </CardContent>
      {props.canBuy && (<CardActions>
        <Button size="small">Buy</Button>
      </CardActions>)}
    </Card>
  );
}
