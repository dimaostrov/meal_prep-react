import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  homeHero: {
    background: "url('http://source.unsplash.com/0BhSKStVtdM')",
    backgroundSize: "cover",
    width: "100%",
    height: "100%"
  }
});

class GuttersGrid extends React.Component {
  state = {
    spacing: "16"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="Spacing"
                  value={spacing}
                  onChange={this.handleChange("spacing")}
                  row
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="16" control={<Radio />} label="16" />
                  <FormControlLabel value="24" control={<Radio />} label="24" />
                  <FormControlLabel value="32" control={<Radio />} label="32" />
                  <FormControlLabel value="40" control={<Radio />} label="40" />
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuttersGrid);

/*
  <template>
    <v-container fluid fill-height class="home-hero">
      <v-layout justify-center align-center column pa-5>
        <div class="display-4 font-weight-black white--text text-xs-center">HEALTHY MEALS</div>
        <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div>
        <div class="display-1 font-weight-bold white--text text-xs-center">Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
        <v-btn fab class="mt-5 brown darken-4">
          <v-icon large color="white">expand_more</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </template>
*/
