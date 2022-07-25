import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';
import Video from '../components/Video';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Video />
        <Link to="/weather" >
          <Button name="узнать погоду" />
        </Link>
        <Link to="/mobile">
          <Button name="узнать погоду подробнее" />
        </Link>
    </div>
  )
}

export default Home