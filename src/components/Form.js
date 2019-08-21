import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { sizing } from '@material-ui/system';
import FormControl from '@material-ui/core/FormControl';




const useStyles = makeStyles(theme => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    input: {
        padding: theme.spacing(0, 0, 0, 0),
        margin: theme.spacing(0, 0, 2, 0)
    },
    button: {

    }
  }));
  

function Form (props) {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Enter city
            </Typography>
        
            <form align="center" onSubmit={props.getWeather}>
                <Input
                    placeholder="City"
                    className={classes.input}
                    inputProps={{
                    'aria-label': 'description',
                    }}
                    name="city"
                    type="search"
                    fullWidth
                    autoFocus
                />
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    Get Weather
                </Button>
            </form>
        </Container>
    );
}
export default Form;