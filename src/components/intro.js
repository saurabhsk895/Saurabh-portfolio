import React from 'react';
import './intro.css';
import bg from '../assets/avatar.jpeg';
import hiremeimg from '../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello </span>
        <span>
          I'm <span className="introName">Saurabh </span> <br />
          <span>Web Developer</span>
        </span>
        <span className="introPara">
          with a passion for crafting delightful user experiences. <br />
          I love creating intuitive interfaces that make people's lives easier. 💻✨
        </span>
        <a href="https://drive.google.com/file/d/1N0j2e1dDIgmqwrw_JJcRwB1W9l4THK5R/view?usp=sharing" target='_blank' rel="noopener noreferrer">
          <button className="btn">
            <img src={hiremeimg} alt="" className="btnImg" />
            Resume
          </button>
        </a>
      </div>

      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
