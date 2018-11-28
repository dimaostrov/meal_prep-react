import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withWidth from '@material-ui/core/withWidth';
import { compose } from 'recompose';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 22,
    marginRight: 20,
  },
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" brown>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Meal-Prep
          </Typography>
          <Button color="inherit" variant="raised" className={classes.menuButton}>Menu</Button>
          <div className={classes.grow} />
          <p>{props.width}</p>
          <Button color="inherit">Login</Button>
          <Button color="inherit" variant="raised">Join</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    withWidth(),
)(Navbar)