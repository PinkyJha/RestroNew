import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './MenuCounter.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));

export default function BadgeVisibility() {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div className={classes.root}>
      <div>
        {/* <Badge color="secondary" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge> */}
        <ButtonGroup className="ButtonGroupcart" style={{background:'green',borderRadius:'10px',width:'9vw',color:'white',height:'6vh'}}>
          <Button
            aria-label="reduce"
            style={{border:'none'}}
            onClick={() => {
              setCount(Math.max(count - 1, 0));
              sessionStorage.setItem('count',count-1)
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <p className="Count" style={{textAlign:'center',paddingTop:'1.5vh'}}>{count}</p>
          <Button
            aria-label="increase"
            style={{border:'none'}}
            onClick={() => {
              setCount(count + 1);
              sessionStorage.setItem('count',count+1)
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
      </div>
    </div>
  );
}
