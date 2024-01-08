import React, { useEffect } from 'react'
import './projects.css'
import Qrcode from '../assets/qr-code-gen.png'
import calculator from '../assets/calculator.png'
import Youtube from '../assets/youtube-clone.png'

const Projects = () => {

  useEffect(() => {
    document.body.addEventListener('selectstart', preventTextSelection);
    return () => {
      document.body.removeEventListener('selectstart', preventTextSelection);
    };
  }, []);

  const preventTextSelection = (e) => {
    e.preventDefault();
  };


  return (
   <section id='project-main'>
   <div>
   <span className='Project-title'>
    My Projects!
    </span>
    <span className="description">Crafted user-friendly websites with HTML, CSS, and JavaScript. Designed to be both stylish and functional, <br /> my projects aim to simplify the digital experience. <br /> Explore a blend of design and code for straightforward and enjoyable online interactions.</span>
       </div>
    <div className='project-tile' >
    <div className='project-card'> <center> <h3>Mytube - Video Player</h3>
      <img src={Youtube} alt="profile" className="project-img" />
        <span>Developed a live video player using React, HTML, CSS, and JavaScript. Seamlessly integrated the <br /> YouTube API for live video content, delivering a responsive and engaging user interface.</span>
        </center>
      </div>
      <center> <h3>CalcCraft</h3>
      <img src={calculator} alt="profile" className="project-img" />
       <span>Crafted a sleek calculator with HTML/CSS, featuring dynamic theme switching in JavaScript. <br /> Ensures an intuitive user experience with responsive design and customizable themes.</span>
       </center>
      </div> 
      <div className='project-card'> <center> <h3>Qr Code generator</h3>
      <img src={Qrcode} alt="profile" className="project-img" />
        <span>Designed a versatile QR code generator with HTML, CSS, and JavaScript, utilizing an API for <br /> dynamic functionality. Users can effortlessly generate QR codes for WhatsApp, SMS, text, or URLs, <br /> with the added flexibility to adjust the size for personalized usage.</span>
        </center>
      </div>
    </div>

    {/* <Button variant="contained"> Hi there!!! :D</Button> */}


   </section>


  )
}

export default Projects;
