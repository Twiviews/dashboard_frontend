import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductionValuesRadioButtonGroup from './ProductionValuesRadioButtonGroup'
import HowFilmWorksRadioButtonGroup from './HowFilmWorksRadioButtonGroup'
import EnjoyabilityRadioButtonGroup from './EnjoyabilityRadioButtonGroup'
import WhyFilmWorksRadioButtonGroup from './WhyFilmWorksRadioButtonGroup'
import EffectsOnPeopleRadioButtonGroup from './EffectsOnPeopleRadioButtonGroup'
import OverallSentimentRadioButtonGroup from './OverallSentimentRadioButtonGroup'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const ColumnGridRadioButtonGroups = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Grid container xs={9} direction="row" spacing={2}>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <ProductionValuesRadioButtonGroup />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <HowFilmWorksRadioButtonGroup />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
             <EnjoyabilityRadioButtonGroup /> 
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <WhyFilmWorksRadioButtonGroup />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
            <Paper className={classes.paper}>
                <EffectsOnPeopleRadioButtonGroup />
            </Paper>
      </Grid>
      <Grid container item xs={2} zeroMinWidth>
              <Paper className={classes.paper}>
                <OverallSentimentRadioButtonGroup />
              </Paper>
      </Grid>      
    </Grid>
  </div>
));

export default ColumnGridRadioButtonGroups;