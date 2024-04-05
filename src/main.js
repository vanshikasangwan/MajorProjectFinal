import React from 'react';
import MemoryGame from './matchcards';
import NewMemoryGame from './matchcards';
import ColourMemory from './colourmemory';
import NewColourMemory from './colourmemory';
import { useNavigate } from 'react-router-dom/dist';


const MainPage = () => {
  const fixedParagraph = 'Quantitative Checklist for Autism in Toddlers (Q-CHAT) ' ;
  const navigate = useNavigate();
  return (
    <div>
    <div style={{backgroundImage: 'url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s104-0372.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e1b1ad4ae2db4690837a34ecfeee1b7b")', backgroundSize: '100%', marginBottom: '0px', marginTop:'0px' }}>
    
    <div >
      <div style={{ marginLeft:"20px", fontSize:'50px', color:"white" }}>
      <p style={{marginTop:'5px'}}>Quantitative Checklist for Autism in Toddlers (Q-CHAT)</p>
    </div>
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '30px', marginRight:'900px', color:"white"}}> The Q-CHAT is a normally distributed quantitative measure of autistic traits in children 18-24 months old. It is the first ASC screening instrument, designed for use with toddlers, that has been shown to produce a range of scores that approximates to a normal distribution. If your child scores more than 3 out of 10, the health professional may consider referring your child for a multi-disciplinary assessment. Follow the link to attempt the assessment : 
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5JGWCRt7RsdD7KRH4NX_EkNcyLN5fjdde8QGpIkTzmK3qUA/viewform?usp=sharing">Start the assessment!</a>
      </h2>
    </div>

    </div>
    <div style={{ marginTop: '90px', fontSize:'50px', marginLeft:'750px', color:"white"}}>
      FUN GAMES FOR CHILDREN
    </div>
    <div style={{ marginTop: '20px', fontSize:'20px', fontWeight: 'bolder', marginLeft:"750px" , color:"white"}}>
      Match Cards Puzzle Game:  
      <button type='button'  onClick= {()=> navigate('/matchcards')} style={{marginLeft: '6px', color:'red', borderWidth:'medium', background:'pink',height:'40px',width:'90px',fontSize:'15px', borderRadius:'7px'}}> Play Now

      </button>

    </div>
    <div style={{ marginTop: '20px', fontSize:'20px', fontWeight: 'bolder', marginLeft:"750px" , color:"white" }}>
    Color Memory Game:  
      <button type='button'  onClick= {()=> navigate('/colourmemory')} style={{marginLeft: '6px', color:'red', borderWidth:'medium', background:'pink',height:'40px',width:'90px',fontSize:'15px', borderRadius:'7px'}}> Play now

      </button>

    </div>
    <div style={{ marginTop: '220px', fontSize:'20px', fontWeight: 'bolder', marginLeft:"1250px" , color:"white" }} >
      For more help, visit https://www.practo.com/ 
    </div>

      
    </div>
    </div>
    
  );
};

export default MainPage;
