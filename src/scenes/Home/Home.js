import React from 'react';
import logo from '../../logo.svg';
import './Home.css';
import MovieCard from '../../components/MovieCard/MovieCard'

class Home extends React.Component {
  // camelCase= Funciones, nombre varibales
  // UpperCamelCase = nombres de clase

  // componente state
  state = {
    movie_name: "Toy Story",
    movieList: [
      { id: 1, name: "Toy Story", url: "https://i2.wp.com/hotbook.com.mx/wp-content/uploads/2018/11/imagen-que-contiene-juguete-muneca-cielo-mesa.jpeg?resize=1024%2C640&ssl=1", descrip: "Woody siempre ha tenido claro cuál es su labor en el mundo y cuál es su prioridad: cuidar a su dueño, ya sea Andy o Bonnie. Sin embargo, Woody descubrirá lo grande que puede ser el mundo para un juguete cuando Forky se convierta en su nuevo compañero de habitación. Los juguetes se embarcarán en una aventura de la que no se olvidarán jamás."},
      { id: 2, name: "Rey León", url: "https://img-cdn.hipertextual.com/files/2019/07/hipertextual-rey-leon-2019-original-pero-peor-2019588919.jpg?strip=all&lossy=1&quality=57&resize=960%2C640&ssl=1",descrip: "Tras la muerte de su padre, Simba vuelve a enfrentar a su malvado tío, Scar, y reclamar el trono de rey." },
      { id: 3, name: "Aladdin", url: "https://miro.medium.com/max/1838/1*8ucdN9cO-PYKqDnDh6HM3w@2x.jpeg",descrip: "Aladdin es un ladronzuelo que se enamora de la hija del Sultán, la princesa Jasmine. Para poder conquistarla aceptará un desafío de Jafar. Aladdín tendrá que entrar en una cueva en mitad del desierto y conseguir una lámpara mágica que contiene al Genio que será el encargado de concederle todos sus deseos."}
    ]
  }

  setMovieName(event) {
    //console.log("hola") // me lo muestra en la consola
    //this.setState({movie_name: "Toy Story 2"});
    this.setState({ movie_name: event.target.value });
  }

  signup() {
    // let es variable
    let newArray = this.state.movieList;
    newArray.push({
      id: this.state.movieList.length + 1,
      name: this.state.movie_name
    });
    this.setState({ movieList: newArray });

  }
  delete(id) {
    let newArray = this.state.movieList;
    newArray.splice(id,1);
    this.setState({ movieList: newArray });
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p> {this.state.movie_name}</p>*/}
          
          { this.state.movieList.map((movie,i) => {
              return (
                <MovieCard key={movie.id} id={movie.id} name={movie.name} url={movie.url} descrip = {movie.descrip}/>
               /* <div key={movie.id} >
                  <p key={movie.id}>{movie.id}{movie.name}</p>
                  <button onClick={() => this.delete(i)}> Eliminar </button>
                </div> */
              )
            })
          }


          < input type="text" placeholder="nombre pelicula" onChange={(event) => this.setMovieName(event)} />
          <button onClick={() => this.signup()}>
            Registrar
        </button>
        </header>
      </div>
    );
  }

}

export default Home;
