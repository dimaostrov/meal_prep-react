import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import { compose } from "recompose";
import { Link } from "react-router-dom";

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
  const loggedIn = false;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            style={{ textDecoration: "none" }}
            variant="h6"
            color="inherit"
            component={Link}
            to="/"
          >
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
          {loggedIn ? (
            <Button color="inherit">Logout</Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/signin">
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/signup"
                variant="contained"
              >
                Join
              </Button>
            </>
          )}
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
