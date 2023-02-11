import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarosel from "../BrandCarosel/BrandCarosel";
import { AuthProvider } from "../../../context/AuthContex";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const {googleLogin} = useContext(AuthProvider)
  
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () =>{
    googleLogin(provider)
    .then(result =>{
      const user = result.user
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleLogin} className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button className="mb-2" variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div>
        <ListGroup>
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaWhatsapp/> Whatsapp</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaTwitch/> Twitch</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-2">
        <BrandCarosel></BrandCarosel>
      </div>
    </div>
  );
};

export default RightSideNav;
