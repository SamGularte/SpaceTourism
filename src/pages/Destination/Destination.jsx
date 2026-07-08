import styles from './Destination.module.css'

import { useState } from "react";

import data from "./DestinationData.json";

import NavBar from '../../components/NavBar/NavBar'

const Destination = () => {
  const [activePlanet, setactivePlanet] = useState(0);

  const handlePlanetChange = (index) => {
    setactivePlanet(index);
  };

  return (
    <div className={styles.background}>
      <NavBar />
      <main className={styles.container}>
        <h4><span className={styles.blackColor}>01</span> Pick your destination</h4>
        <section className={styles.planetContainer}>
          <img 
            key={activePlanet}
            src={data[activePlanet].image} 
            alt={data[activePlanet].title} 
            className={styles.planet}
            width={480}
            height={480}
            loading="lazy"
          />
          <div className={styles.contentContainer}>
            <div className={styles.buttonContainer}>
              {data.map((planet, index) => (
                <button className={`${activePlanet === index ? styles.activeDestinationButton : styles.destinationButton}`} key={index} onClick={() => handlePlanetChange(index)} > {planet.name} </button>
              ))}
            </div>
            <h1 className={styles.activePlanetTitle}>{data[activePlanet].name}</h1>
            <p className={styles.activePlanetDescription}>{data[activePlanet].description}</p>
            <div className={styles.horizontalLine} />
            <div className={styles.statisticsContainer}>
              <div>
                <p>Avg. distance</p>
                <h3>{data[activePlanet].distance}</h3>
              </div>
              <div>
                <p>Est. travel time</p>
                <h3>{data[activePlanet].travel}</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Destination