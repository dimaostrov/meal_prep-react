import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import { compose } from "recompose";

import SmallToolbar from "./SmallToolbar";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 22,
    marginRight: 20
  }
};

function Navbar(props) {
  return <div>{responsiveBar(props)}</div>;
}

const responsiveBar = props => {
  return props.width === "xs" ? (
    <SmallToolbar {...props} />
  ) : (
    <RegularToolbar {...props} />
  );
};

const RegularToolbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Meal-Prep
          </Typography>
          <Button
            color="inherit"
            variant="contained"
            className={classes.menuButton}
          >
            Menu
          </Button>
          <div className={classes.grow} />
          <Button color="inherit">Login</Button>
          <Button color="inherit" variant="contained">
            Join
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Navbar);
