import React from 'react'
import Results from './components/Results'
import ResultsPeople from './components/ResultsPeople'
import ResultsLocation from './components/ResultsLocation'
import ResultsSpecie from './components/ResultsSpecie'
import ResultsVehicle from './components/ResultsVehicle'
import totoro from './img/totoro.jpg'


export default class App extends React.Component {

  state = {
    loading: true,
    movie: [],
    people: [],
    place: [],
    specie: [],
    vehicle: [],
    selected: {},

    films: false,
    characters: false,
    locations: false,
    species: false,
    vehicles: false
  };
  
  async componentDidMount() {
    const url = 'https://ghibliapi.herokuapp.com/films';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movie: data, loading: false });

    const urlPeople = 'https://ghibliapi.herokuapp.com/people';
    const responsePeople = await fetch(urlPeople);
    const dataPeople = await responsePeople.json();
    this.setState({ people: dataPeople, loading: false });

    const urlLocation = 'https://ghibliapi.herokuapp.com/locations';
    const responseLocation = await fetch(urlLocation);
    const dataLocation = await responseLocation.json();
    this.setState({ place: dataLocation, loading: false });

    const urlSpecie = 'https://ghibliapi.herokuapp.com/species';
    const responseSpecie = await fetch(urlSpecie);
    const dataSpecie = await responseSpecie.json();
    this.setState({ specie: dataSpecie, loading: false });

    const urlVehicle = 'https://ghibliapi.herokuapp.com/vehicles';
    const responseVehicle = await fetch(urlVehicle);
    const dataVehicle = await responseVehicle.json();
    this.setState({ vehicle: dataVehicle, loading: false });
  }

  handleFilmsClick() {
    this.setState({ films: true });
    this.setState({ characters: false });
    this.setState({ locations: false });
    this.setState({ species: false });
    this.setState({ vehicles: false });
  }
  handleCharactersClick() {
    this.setState({ characters: true });
    this.setState({ films: false });
    this.setState({ locations: false });
    this.setState({ species: false });
    this.setState({ vehicles: false });
  }
  handleLocationsClick() {
    this.setState({ locations: true });
    this.setState({ films: false });
    this.setState({ characters: false });
    this.setState({ species: false });
    this.setState({ vehicles: false });
  }
  handleSpeciesClick() {
    this.setState({ species: true });
    this.setState({ films: false });
    this.setState({ characters: false });
    this.setState({ locations: false });
    this.setState({ vehicles: false });
  }
  handleVehiclesClick() {
    this.setState({ vehicles: true });
    this.setState({ films: false });
    this.setState({ characters: false });
    this.setState({ locations: false });
    this.setState({ species: false });
  }


  render() {



  return (
    <div className="App">
      <header className="App-header">
        <h1>スタジオジブリ</h1>
        <h1>Ghibli Studio Database</h1>
        <nav>
          <button className="button" onClick={() => this.handleFilmsClick()}>
          Films
          </button>
          
          <button className="button" onClick={() => this.handleCharactersClick()}>
          Characters
          </button>
          
          <button className="button" onClick={() => this.handleLocationsClick()}>
          Locations
          </button>
        
          <button className="button" onClick={() => this.handleSpeciesClick()}>
          Species
          </button>
        
          <button className="button" onClick={() => this.handleVehiclesClick()}>
              Vehicles
          </button>
        </nav>
      </header>

      <main>

        {(() => {
        if (this.state.films) {
          return (
            <Results movie={this.state.movie} />
          )
        } else if (this.state.characters) {
          return (
            <ResultsPeople people={this.state.people} />
          )
        } else if (this.state.locations) {
          return (
            <ResultsLocation place={this.state.place} />
          )
        } else if (this.state.species) {
          return (
            <ResultsSpecie specie={this.state.specie} />
          )
        } else if (this.state.vehicles) {
          return (
            <ResultsVehicle vehicle={this.state.vehicle} />
          )  
        } else {
          return (
            <img className="totoro" src={totoro} alt="Totoro"/>
          )
        }
      })()}
        
      </main>
      <footer>
        <p>All data fetched from <a className="link" rel="noreferrer" target="_blank" href="https://ghibliapi.herokuapp.com/#">Studio Ghibli API</a></p>
      </footer>
    </div>
  );
  }
  
}





