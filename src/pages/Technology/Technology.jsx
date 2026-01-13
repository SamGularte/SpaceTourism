import styles from './Technology.module.css'
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

import { useState } from "react";

import data from "./technologyData.json";

import NavBar from '../../components/NavBar/NavBar'

const Technology = () => {
  const [activeTechnology, setactiveTechnology] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: 960 });

  const handelTechnologyChange = (index) => {
    setactiveTechnology(index);
  };
  return (
    <div  className={styles.background}>
      <NavBar />
      <main className={styles.container}>
        <h4><span className={styles.blackColor}>03</span> Space launch 101</h4>
        <section className={styles.technologyContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.buttonsContainer}>
              {data.map((technology, index) => (
                <button className={`${activeTechnology === index ? styles.activeTechnologybutton : styles.Technologybutton}`} key={index} onClick={() => handelTechnologyChange(index)} > {index + 1} </button>
              ))}
            </div>
            <div className={styles.contentTextContainer}>
              <h5 className={styles.terminology}>The terminology...</h5>
              <h3 className={styles.activeTechnologyName}>{data[activeTechnology].name}</h3>
              <p className={styles.activeTechnologyDescription}>{data[activeTechnology].description}</p>
            </div>
          </div>
          <motion.img 
            key={activeTechnology}
            src={isMobile ? data[activeTechnology].image.mobile : data[activeTechnology].image.desktop} 
            className={styles.technologyImg}
            alt={`${data[activeTechnology].name} image`} 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </section>
      </main>
    </div>
  )
}

export default Technology