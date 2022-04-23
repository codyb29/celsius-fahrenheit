import PropTypes from 'prop-types';
import { Button, Grid, Paper } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

/**
 * A title component that takes two title texts and swaps them by button click.
 */
function SwapTitle(props) {
  return (
    <Grid container component="h2" rowSpacing={3}>
      <Grid item xs={12} sm={5} textAlign="center">
        <Paper elevation={6}>
          {props.from}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={2} textAlign="center">
        <Button aria-label="ConversionSwapIcon"
          onClick={props.swap}
          variant="outlined"
        >
            <CompareArrowsIcon fontSize="large" />
        </Button>
      </Grid>
      <Grid item xs={12} sm={5} textAlign="center">
        <Paper elevation={6}>
          {props.to}
        </Paper>
      </Grid>
    </Grid>
  );
}

SwapTitle.propTypes = {
  Celsius: PropTypes.string.isRequired,
  Fahrenheit: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired
};

export default SwapTitle;