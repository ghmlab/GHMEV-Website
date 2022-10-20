
import {BikeComponent, Features, Hero} from '../components'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const HomePage = ({preloader}) => {
    // useLocoScroll(!preloader)
    gsap.registerPlugin(ScrollTrigger);
  
 
  return (
    <>
      <div className="bg-ghmLight" preloader={preloader}>
        <Hero id="heros" className='section' preloader={preloader} />
        <BikeComponent className='section' preloader={preloader}  />
      </div>
    </>
  )
}

export default HomePage;