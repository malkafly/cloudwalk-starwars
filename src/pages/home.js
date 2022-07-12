import React from "react";
import starwarsPlanets from '../services/starwars-planets'
import starwarsPeoples from '../services/starwars-people'

const Home = () => {
  const [planets_list, setPlanets] = React.useState();
  const [characters_list, setCharacters] = React.useState();
  const [hasMoreCharacter, setLoadmode] = React.useState(false);

  const getPlanets = async () => {
    starwarsPlanets().then((response) => {
      setPlanets(response);
    });
  };

  const getCharacters = async (next) => {
    starwarsPeoples(next).then((response) => {
      setCharacters(response);
    });
  };

  React.useEffect(() => {
    getPlanets();
    getCharacters();
  }, []);

  const changePlanet = (event) => {
  };

  const loadMore = async () => {
    let current_list = characters_list.results;
    await starwarsPeoples(characters_list.next).then((response) => {
      let newlist = [...current_list, ...response?.results];
      response.results = newlist;
      setLoadmode((!response.next));
      setCharacters(response);
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Star Wars Characters</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>
      <section className="filter">
        <form>
          <label>Filter by Planets:</label>
          <select onChange={changePlanet} placeholder="Planets">
            <option value="0">All</option>
            {planets_list?.results?.map((option, index) => (
              <option value={option.name} key={index}>
                {option.name}
              </option>
            ))}
          </select>
        </form>
        <button type="button" className="btn">Clear all</button>
      </section>
      <section className="content">
        <h2>All Characters</h2>
        <div className="grid">{characters_list?.results?.map((character, i) => {
          return (
            <div className="card" key={i}>
              <img src={"https://picsum.photos/300/230?sig=" + i} alt="" />
              <div className="card-content">
                <h3>{character.name}</h3>
                <h4>{character.homeworld}</h4>
                <ul>
                  <li>HEIGHT • {character.height}M</li>
                  <li>MASS • {character.mass}KG</li>
                  <li>GENDER • {character.gender}</li>
                </ul>
              </div>
            </div>
          );
        })
        }</div>
        <div className="loadmore">
          <button type="submit" className="btn" disabled={hasMoreCharacter} onClick={loadMore}>
            Load More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
