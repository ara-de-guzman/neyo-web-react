import "./Main.css";
import { Button } from "../components/Button";
import Hand from "../images/hand.png";
import { listUserImage } from "../images/ExportImage";
import camera from "../images/camera.png";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Home() {
  const [counter, setCounter] = useState(0);

  const nextImg = () => {
    if (counter < 3) setCounter(counter + 1);
    else {
      setCounter(0);
    }
  };

  const prevImg = () => {
    if (counter > 0) setCounter(counter - 1);
    else {
      setCounter(3);
    }
  };

  return (
    <div className="home-page">

      <div className="hero-section">
        <div className="hero-text">
          <p className="user-name">NEYO</p>
          <p className="title">Photograper</p>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="hero-btn">
          <Button
            classes={"regular-btn"}
            text={"View my work"}
            link={"/work"}
            classLink={"link-regular-btn"}
          />
          <Button
            classes={"underline-btn"}
            text={"Contact me"}
            link={"/contact"}
          />
          </div>
        </div>
        <div className="hero-img">
          <img src={Hand} alt="hand-img"/>
        </div>
      </div>


      <div className="about-me">
        <div className="image-camera">
          <img src={camera} alt="camera" />
        </div>
        <div className="about-me-img">
          <img src={listUserImage[counter]} alt="me" />

          <FaArrowCircleLeft
            onClick={() => prevImg()}
            className="img-btn prev-btn"
          />
          <FaArrowCircleRight
            onClick={() => nextImg()}
            className="img-btn next-btn"
          />
        </div>
        <div className="about-me-text">
          <h1>ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin ac orci phasellus egestas. Lobortis elementum nibh
            tellus molestie. Viverra ipsum nunc aliquet bibendum enim. Malesuada
            pellentesque elit eget gravida. Pulvinar neque laoreet suspendisse
            interdum consectetur libero. Leo vel orci porta non pulvinar neque.
            Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis
            rhoncus. Aenean euismod elementum nisi quis. Donec et odio
            pellentesque diam volutpat commodo sed egestas egestas. Sed arcu non
            odio euismod lacinia at. Accumsan sit amet nulla facilisi morbi
            tempus iaculis urna. Id interdum velit laoreet id donec ultrices
            tincidunt arcu non. Ut sem viverra aliquet eget sit. Tellus
            elementum sagittis vitae et leo duis ut. Tristique risus nec feugiat
            in fermentum posuere urna nec tincidunt
          </p>
          <Button
            classes={"regular-btn"}
            text={"More about me"}
            classLink={"link-regular-btn"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
