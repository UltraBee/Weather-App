import React from 'react';

import WeatherNow from './WeatherNow';
import WeatherNextDays from './WeatherNextDays';
import Form from './Form';
import Footer from './Footer';
import Navigation from './Navigation';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';



const API_KEY = "e33f000cd35778b38ad279e2d5ed6db1";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();

    if(city){
      console.log(data);
       this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
      });
    } else {
      this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please, enter the value"
    });
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <Form getWeather={this.getWeather}/>
        <Container maxWidth="lg" component="main">
          
          {this.state.city &&
            <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <WeatherNow 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}/>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper>
                  <WeatherNextDays />
              </Paper>
            </Grid>
            </Grid>
            }
            
            
          
        </Container>
        <Footer />
      </div>
      
    );
  }
}



export default App;
