import Spline from '@splinetool/react-spline';

import '../../styles/home.css'
import Navbar from "../../components/Navbar";


const Home = () => {
  return (
    <div>
      <div className='w-full border-2'></div>
      <Navbar />
      <div className="Home">
        <div>
          <Spline
            className='spline-scene'
            scene="https://prod.spline.design/CrhB9Bm-dPnhhRsw/scene.splinecode"
          />
          <h1 className='hero-text'>Secondary Healthcare meets AI+ML</h1>
        </div>
      </div>
      <div className='border-2 border-black p-2 rounded'>Next div</div>
    </div>
  )
}

export default Home