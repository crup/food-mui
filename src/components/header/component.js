import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import config from "../../constants/config";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  wrap: {
    flexGrow: 1,
  },
}));

const Header = ({
  history,
  totalItems
}) => {
  const classes = useStyles();
  const onClickCartIcon = () => {
    history.push("/cart");
  }
  const onClickTitle = () => {
    history.push("/");
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={onClickTitle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          {config.title}
        </IconButton>
        <div className={classes.wrap} />
        <Button onClick={onClickCartIcon} color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  )
};

export default withRouter(Header);