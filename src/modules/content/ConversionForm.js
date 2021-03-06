import PropTypes from 'prop-types';
import {
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useMemo, useState } from 'react';
import { PRECISION } from '../../constants';

/**
 * Component responsible for handling the temperature input provided by the
 * user and displaying the result of the provided input.
 */
function ConversionForm(props) {
  // Track the previous state of whether or not user is starting with Celsius
  const [state, setState] = useState(props.isCelsius);
  // Provide an error message for invalid input
  const [error, setError] = useState('');
  // The I/O result of the inputted temperature
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  // Swap I/O on Celsius toggle
  useEffect(() => {
    // Only swap if the previous state has changed.
    if (state !== props.isCelsius) {
      const currentFrom = from;
      const currentTo = to;
      setFrom(currentTo);
      setTo(currentFrom);
      // update the previous state to the current state to prevent infinite
      setState(props.isCelsius)
    }
  }, [props.isCelsius, state, from, to]);

  // Memo if user spams duplicate values.
  useMemo(() => {
    // Only convert temperature if previous conversion state was similar
    if (state === props.isCelsius) {
      // Ensure input is of valid number
      if (from && !isNaN(+from)) {
        // set to no error if we pass our validation
        setError('');
        const degree = +((+from).toFixed(PRECISION));
        // 9 / 5 = 1.8
        const result = props.isCelsius
          ? (degree * 1.8) + 32 // C -> F
          : (degree - 32) * (5 / 9); // F -> C
        setTo(parseFloat(result.toFixed(PRECISION)));
      } else if (from !== 0 && from !== '') {
        setError('Input provided is not a number.');
      }
    }
  }, [from, props.isCelsius, state]);
  return (
    <Box
    component="form"
    autoComplete="off"
    >
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="temperature-from">
              Enter {props.from} Here
            </InputLabel>
            <OutlinedInput
            id="temperature-from"
            value={from}
            onChange={({target: {value}}) => setFrom(value)}
            endAdornment={
                <InputAdornment position="end">
                  &deg;{props[props.from]}
                </InputAdornment>
            }
            label={`Enter ${props.from} Here`}
            error={error !== ''}
            />
            <FormHelperText error={error !== ''}>{error}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="temperature-to" defaultValue={`Converted {props.to} Will Show Here`}>
              {props.to}
            </InputLabel>
            <FilledInput
            disabled
            id="temperature-to"
            value={to}
            endAdornment={
                <InputAdornment position="end">
                  &deg;{props[props.to]}
                </InputAdornment>
            }
            label={`Converted ${props.to} Will Show Here`}
            // label={`Enter ${props.from} Here`}
            />
          </FormControl>
        </Grid>
      </Grid>
      
      {/* <CardActions sx={{ m: 2 }}>
          <Button variant="contained" onClick={convertTemperature}>
            Convert to &deg;{props[props.to]}
          </Button>
          <Button variant="contained"
          onClick={() => {
              setFrom('');
              setTo('');
              setError('');
          }}
          color="secondary"
          >
          Reset
          </Button>
      </CardActions> */}
      
    </Box>
  );
}

ConversionForm.propTypes = {
  Celsius: PropTypes.string.isRequired,
  Fahrenheit: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired
};

export default ConversionForm;
