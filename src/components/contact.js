import React, { useRef } from 'react';
import './contact.css';
import Intex from '../assets/intex.jpg'
import CTC from '../assets/ctc.jpg'
import Wofx from '../assets/wofx.jpg'
import AIFTP from '../assets/aiftp.jpg'
import Worldex from '../assets/worldex.jpg'
import Gstpam from '../assets/gstpam.jpg'
import Linkedn from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'   
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
     // Access form values using form.current
     const yourName = form.current['your_name'].value.trim();
     const yourEmail = form.current['your_email'].value.trim();
     const message = form.current['message'].value.trim();

     // Check if the required fields are not empty
     if (yourName === '' || yourEmail === '') {
         alert('Please fill out the required fields (Name and Email).');
         return; // Do not proceed with form submission
     }
 



        emailjs.sendForm('service_sfx9zhf', 'template_4wud2bd', form.current, 'G6HXgvsd9xvISz7RL')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Successfully Sent!')
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id="contactPage">
        <div id="myClients">
            <h1 className="contactPageTitle">
               My Clients
            </h1>
            <span className="clientsDesc">
                I have had the opportunity to work with a diverse
                group of Organizations. Some of the notable organizations I have worked with includes

            </span>
            <div className="clientimgs">
               <a href="https://aiftponline.org/" target='_blank'> <img src={AIFTP} alt='client' title=" All India Federation of Tax Practitioners " className="clientimg" /></a>
               <a href="https://in.intexsouthasia.com/" target='_blank'> <img src={Intex} alt='client' title="Intex India" className="clientimg" /></a>
               <a href="https://ctconline.org/" target='_blank'> <img src={CTC} alt='client' title="Chamber of Tax Consultants" className="clientimg" /></a>
               <a href="https://www.worldexindia.com/" target='_blank'><img src={Worldex} alt='client' title="Worldex India" className="clientimg" /> </a>
               <a href="https://wofxworldexpo.com/" target='_blank'> <img src={Wofx} alt='client' title="WOFX - World Furniture Expo" className="clientimg" /></a>
               <a href="https://www.gstpam.org/" target='_blank'><img src={Gstpam} alt='client' title="The Goods & Services Tax Practitioners'Association of Maharashtra" className="clientimg" /> </a>
            </div>
        </div>

    
    <div id="contact">
        <h1 className="contactPageTitle"> Contact Me </h1>
        <span className="clientsDesc"> Please fill to contact me </span>

        <form className='contactForm' ref={form}  onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="email" className="email" placeholder="Your Email" name='your_email' />
            <textarea  className="message" name='message' placeholder='Your message' rows="5"></textarea>
        <button type="submit" value="Send" className='submitbtn' >Submit</button>
       <div className="links">
        <img src={Linkedn} alt="LinkedIn" className="link" />
        <img src={Instagram} alt="Instagram" className="link" />
       

       </div>
        </form>


    </div>

    </section>
    
  )
}

export default Contact