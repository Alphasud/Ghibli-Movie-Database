import React from 'react'
import Results from './components/Results'


export default class App extends React.Component {

  state = {
    loading: true,
    movie: []
  };
  
  async componentDidMount() {
    const url = 'https://ghibliapi.herokuapp.com/films';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movie: data, loading: false });
    console.log(data);
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
            <div>
              <div>{this.state.movie.title}</div>
            </div>  
          )}
        <Results movie={this.state.movie} />
      </main>
    </div>
  );
  }
  
}

