import React from 'react'
import Results from './components/Results'
import ResultsPeople from './components/ResultsPeople'
import totoro from './img/totoro.jpg'


export default class App extends React.Component {

  state = {
    loading: true,
    movie: [],
    people: [],
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
        <h1>Ghibli Studio Movie Database</h1>
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
        } else {
          return (
            <img className="totoro" src={totoro} alt="Totoro"/>
          )
        }
      })()}
        
      </main>
    </div>
  );
  }
  
}





