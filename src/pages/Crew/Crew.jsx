import styles from './Crew.module.css'
import { motion } from "framer-motion";

import { useState } from "react";

import data from "./CrewData.json";

import NavBar from '../../components/NavBar/NavBar'

const Crew = () => {
  const [activeCrewmember, setactiveCrewmember] = useState(0);

  const handelCrewMemberChange = (index) => {
    setactiveCrewmember(index);
  };
  
  return (
    <div className={styles.background}>
      <NavBar />
      <main className={styles.container}>
        <h4><span className={styles.blackColor}>02</span> Meet your crew</h4>
        <section className={styles.crewContainer}>
          <div className={styles.crewContentContainer}>
            <div>
              <h5 className={styles.activeCrewmateRole}>{data[activeCrewmember].role}</h5>
              <h3 className={styles.activeCrewmateName}>{data[activeCrewmember].name}</h3>
              <p className={styles.activeCrewmateDescription}>{data[activeCrewmember].bio}</p>
            </div>
            <div className={styles.buttonsContainer}>
              {data.map((crew, index) => (
                <button className={`${activeCrewmember === index ? styles.activeCrewmatebutton : styles.Crewmatebutton}`} key={index} onClick={() => handelCrewMemberChange(index)} ></button>
              ))}
            </div>
          </div>
          <motion.img 
            key={activeCrewmember}
            src={data[activeCrewmember].image} 
            alt={`${data[activeCrewmember].role} image`} 
            className={styles.crew}
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

export default Crew