import React from 'react'
import Results from './components/Results'


export default class App extends React.Component {

  state = {
    loading: true,
    movie: [],
    selected: {}
  };
  
  async componentDidMount() {
    const url = 'https://ghibliapi.herokuapp.com/films';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movie: data, loading: false });
  }

  
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>スタジオジブリ</h1>
        <h1>Ghibli Studio Movie Database</h1>
      </header>
      <main>
          {this.state.loading || !this.state.movie ? (
            <div className="loading">Loading...</div>
          ) : (
              <Results movie={this.state.movie} />
          )}
      </main>
    </div>
  );
  }
  
}





