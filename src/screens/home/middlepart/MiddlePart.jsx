import React from 'react'
import LOGO from '../../../assets/logo.png'
import './middlepart.css'
import { useEffect } from 'react'
import BG_IMAGE from '../../../assets/bg_image.jpg'
import CHESS_BANNER from '../../../assets/chess_banner.jpg'
import BOARD_IMG from '../../../assets/board_image.png'
import PAWN_KING from '../../../assets/pawn_king.jpg'
import TestimonialsCards from './testimonials/components/TestimonialsCards'

const MiddlePart = () => {

  // this cursor thingy doesn't work 

  const testimonials = [
    {
      name: 'Armaan',
      message: 'I feel like the courses given are amazing!, and brilliant!',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Armaan',
      message: 'I feel like the courses given are amazing!, and brilliant!',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Armaan',
      message: 'I feel like the courses given are amazing!, and brilliant!',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
   
    // Add more testimonial objects as needed
  ];

  return (
    <>

      <div className="middlePart">
        <br />
        <center>
          <h2 className='titleText'>
            Welcome to Jagraon Chess Club
          </h2>
          <br />
          <br />
          <img src={LOGO} className='img' />
          <br />
          <br />
          <div className="container">
            <img src={BG_IMAGE} alt="Chess" />
            <h3 className='centered'>LEARN | PLAY | GROW</h3>
          </div>
          <br />
          <br />
          <input type="button" className="getStartedBtn" value="Get Started" />
          <br />
          <br />

          <hr className='myHr' />
          <div className="features">
            <div className="feature">
              <img src={CHESS_BANNER} className='featureImage' style={{ marginLeft: "5rem" }} />
              <div className="featureDescription">
                <h2 className='featureTitle'>Online Chess</h2>
                <p className='featureDescription'>Sessions/Workshops can be taken online from the very basics (pieces moving) to the most advance things like tactics, strategies etc.</p>
              </div>
            </div>
            <br />
            <div className="feature">

              <div className="featureDescription">
                <h2 className='featureTitle'>2 WEEKS TRAINING PROGRAM</h2>
                <p className='featureDescription'>Jagraon Chess Club will provide 2 weeks training program with daily basis report and chess.com premium for 2 weeks.</p>
              </div>
              <img src={BOARD_IMG} className='featureImage' style={{ marginRight: "5rem" }} />
            </div>
          </div>
          <div className="features">
            <div className="feature">
              <img src={PAWN_KING} className='featureImage' style={{ marginLeft: "5rem" }} />
              <div className="featureDescription">
                <h2 className='featureTitle'>Free for Disabled People</h2>
                <p className='featureDescription'>Everything for lifetime will be free for disabled people. In addition, this club will help them be better in health by the means of donations!</p>
              </div>
            </div>
            <br />
          </div>
          <br /><br />
          <input type="button" value="Know More!" className='knowMoreBtn' />
          <br /><br />
          <hr className='myHr' />
          <br />
          <h2 style={{ color: "white" }} className="testimonialsText">
            Testimonials
          </h2>
          <br />
          <br/>
          <div className="testimonials">
              
    
      {testimonials.map((testimonial, index) => (
        <TestimonialsCards
          key={index}
          name={testimonial.name}
          message={testimonial.message}
          image={testimonial.image}
        />
      ))}
          </div>

          <br /><br />
        </center>
      </div>
    </>
  )
}

export default MiddlePart
