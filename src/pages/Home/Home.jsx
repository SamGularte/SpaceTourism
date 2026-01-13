import styles from './Home.module.css'

import { NavLink } from "react-router-dom";

import NavBar from '../../components/NavBar/NavBar'

const Home = () => {
  return (
    <div className={styles.background}>
      <NavBar />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h4>So, you want to travel to</h4>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </section>
        <section className={styles.heroButtonSection}>
          <NavLink className={styles.heroButton} to="/destination">Explore</NavLink>
        </section>
      </main>
    </div>
  )
}

export default Home