import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const WeatherNow = props => (
              <Paper>
                <h1>weather now</h1>
                { props.city && props.country && <p>{props.city}, {props.country}</p>}
                { props.temperature && <p>{props.temperature}</p> }
                { props.humidity && <p>{props.humidity}</p> }
                { props.description && <p>{props.description}</p> }
                { props.error && <p>{props.error}</p> }
              </Paper>
        
    )


export default WeatherNow;

