import "./Video.scss";
import "./Button.scss";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video" className="cover-video">
        <source src='https://thenewcode.com/assets/videos/jupiter-juno-perijove.mp4' type="video/mp4" />
      </video>
      <div className="content">
        <h2>Погода во всех городах мира</h2>
      </div>
    </div>
  );
};

export default Video;
