import React from 'react';
import './skills.css';
import Uidesign from '../src/assets/ui-design.png';
import Webdesign from '../src/assets/website-design.png';
import Appdesign from '../src/assets/react.png';
const Skills = () => {
  return (
    <section id='skills'>
      <span className="skilltitle">
        About Me
      </span>
      <span className="skillDesc">  Hi! 👋 I'm Saurabh, a web developer from India with a BSc in Computer Science. Proficient in HTML, CSS, JavaScript, React, Git, GitHub, and MongoDB. I'm passionate about crafting delightful user experiences. Currently seeking exciting opportunities to contribute and grow in the world of web development.
</span>
      <div className="skillBars">
    <div className="skillBar">
      <img src={Uidesign} alt="" className="skillBarImg" />
      <div className="skillBartext">
        <h2>
        Frontend Development

        </h2>
        <span>
        I specialize in crafting dynamic and responsive interfaces using JavaScript, HTML, and CSS. From interactive elements to cross-browser compatibility, I bring designs to life for seamless web applications.
        </span>
      </div>
    </div>
    <div className="skillBar">
      <img src={Webdesign} alt="" className="skillBarImg" />
      <div className="skillBartext">
        <h2>
    Web Design & Styling
        </h2>
        <span>
        I design and style websites with flair, using CSS frameworks like Bootstrap. Collaborating with designers, I ensure visually appealing layouts that elevate the user experience.
        </span>
      </div>
    </div>
     <div className="skillBar">
      <img src={Appdesign} alt="" className="skillBarImg" />
      <div className="skillBartext">
        <h2>
        React.js Development

        </h2>
        <span>
        I create scalable single-page applications with a focus on interactivity and efficiency. Let's build web applications that captivate and stand out!
        </span>
      </div>
    </div>
      </div>




    </section>
  )
}

export default Skills;