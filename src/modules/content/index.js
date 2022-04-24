import { Card, CardContent, CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import ConversionForm from './ConversionForm';
import SwapTitle from './SwapTitle';

/**
 * Responsible for declaring the main structure of the application content.
 * Conversion will take place in the body of a Card component. test
 */
function Main() {
  // Track state of temperature intentions that change as a group
  const [temperature, setTemperature] = useState({
    from: 'Celsius',
    to: 'Fahrenheit',
    Celsius: 'C', // For easy label mapping
    Fahrenheit: 'F', // for easy label mapping
    isCelsius: true
  });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Card sx={{ minWidth: '60%' }}>
        <CardHeader
          title={
            <SwapTitle {...temperature}
              swap={() =>
                setTemperature(({ from, to, isCelsius, ...rest }) =>
                  ({...rest, from: to, to: from, isCelsius: !isCelsius}))
              }
            />
          }
        />
        <CardContent>
          <ConversionForm {...temperature} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default Main;
