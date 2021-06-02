import React from "react";
import Cards from "./Components/Cards/Cards";
// import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import styles from "./App.css";
import { fetchData } from "./api";
import coronaImage from "./images/image1_4.png";

import Grid from '@material-ui/core/Grid';
import Modal from "./Modal";
import Typography from '@material-ui/core/Typography';
import History from "./History";
import Card1 from "./Card1";
import precaution from "./images/precaution.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
   
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
  
    return (
      <div >
      <img className={styles.image} src={coronaImage} width="100%" height="300px"  alt="COVID-19" />
        <br />
        <Typography color="Primary" align="centre"><h1>Covid Tracker:</h1></Typography>
         <text>
          <b>Select Country to find Corona Virus Statistics</b>
        </text>
        <br/>
      <CountryPicker handleCountryChange={this.handleCountryChange} />
       <Cards data={data} country={country} />
   
       <Grid>
       <Typography align="centre"><h1>History of Covid-19?:</h1></Typography>
      
      <History></History>
      </Grid>
      <Card1></Card1>
    
      
      <Typography align="centre" color="primary"><h1>PREVENTION IS BETTER THAN CURE</h1></Typography>
       
       <Typography align="centre" color="SECONDARY"><h3>And the very first prevention ? VACCINATION</h3></Typography>
       <br/>
       
       <Typography align="centre"><h1>Click on the image to see the difference between Covaxin and Covishield:</h1></Typography>
      
       <Modal></Modal>
       
       <br/>
      
       <Typography align="centre" color="primary"><h1>PRECAUTIONS:</h1></Typography>
       <br/>
       <img 
     src={precaution} width="50%" height="10%" alt="COVID-19" />
 
       <br/>
       <Typography align="centre" color="primary"><h1>STAY HOME , STAY SAFE:)</h1></Typography>
        
       </div>
     
    
    );
  }
}

export default App;