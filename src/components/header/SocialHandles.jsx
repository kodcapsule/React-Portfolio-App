import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const SocialHandles = () => {
  return (
    <div className="social_media_handles">
      <a href="https://www.linkedin.com/feed/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/kodcapsule">
        <AiFillGithub />
      </a>
      <a href="https://web.facebook.com/">
        <BsFacebook />
      </a>
    </div>
  );
};

export default SocialHandles;
