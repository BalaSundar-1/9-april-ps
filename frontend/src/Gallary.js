import React from 'react';
import { Carousel } from 'react-bootstrap';

import Img1 from './images/gallary5.jpg';
import Img2 from './images/gallary6.jpg';
// import Img3 from './images/gallary8.jpg';
import Img from './images/gallary9.jpg';
import P1 from './images/gdrive.png';
import P2 from './images/gowlcoder.png';
import P3 from './images/gprojectspace.png';
import P4 from './images/gtse.png';
import P5 from './images/gvlsi.png';
import P6 from './images/gdrive2.png';
import './gallary.css';


const Gallery = () => {
    return (
        <>
            <Carousel    style={{padding:"60px"}}>
                <Carousel.Item interval={100}>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
              
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                      
                    </Carousel.Caption>
                </Carousel.Item>
              
                <Carousel.Item>
                    <img className='d-block w-100'
                    src={Img1} 
                    alt="Fifth Slide" />

                    
                </Carousel.Item>




                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                      
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h1><center>Events Conducted</center></h1>
            <div className='container-fluid'>
            <div className='row justify-content-evenly'>
            <div className="card col-md-3" style={{ width: "20rem" }}>
            <div className="card-img text-center" id="gallaryImg">
                <img src={P1} className="card-img-top" alt="..." />
                 <h3>Technoliges</h3>
                {/* <div className='btn btn-primary  '>Enroll Course</div> */}
                <div className="card-body">
                    {/* Card Content */}
                </div>
            </div>
        </div>
            
            
        <div className="card col-md-3" style={{ width: "20rem" }}>
            <div className="card-img text-center"id="gallaryImg">
                <img src={P2} className="card-img-top" alt="..." />
                <h3>Coding SKills</h3>
                {/* <div className='btn btn-primary  '>Enroll Course</div> */}
                <div className="card-body">
                    {/* Card Content */}
                </div>
            </div>
        </div>
            

        
        <div className="card col-md-3" style={{ width: "20rem" }}>
            <div className="card-img text-center"id="gallaryImg">
                <img src={P3} className="card-img-top" alt="..." />
                <h3>Real Time Projects</h3>
                {/* <div className='btn btn-primary  '>Enroll Course</div> */}
                <div className="card-body">
                    {/* Card Content */}
                </div>
            </div>
        </div>
            
      
            





            </div>

        
            </div>
            <br/>



            <div className='container-fluid'>
            <div className='row justify-content-evenly'>
            <div className="card col-md-3" style={{ width: "20rem" }}>
            <div className="card-img text-center"id="gallaryImg">
                <img src={P6} className="card-img-top" alt="..." />
                <h3>Different  Skills</h3>
                {/* <div className='btn btn-primary  '>Enroll Course</div> */}
                <div className="card-body">
                    {/* Card Content */}
                </div>
            </div>
        </div>
            
            
        <div className="card col-md-3" style={{ width: "20rem" }}>
            <div className="card-img text-center"id="gallaryImg">
                <img src={P4} className="card-img-top" alt="..." />
                <h3>Gaming</h3>
                {/* <div className='btn btn-primary  '>Enroll Course</div> */}
                <div className="card-body">
                    {/* Card Content */}
                </div>
            </div>
        </div>
            

        
        <div className="card col-md-3" style={{ width: "20rem" }}>
            <div className="card-img text-center"id="gallaryImg">
                <img src={P5} className="card-img-top" alt="..." />
                 <h3>Electronics</h3>
                {/* <div className='btn btn-primary  '>Enroll Course</div> */}
                <div className="card-body">
                    {/* Card Content */}
                </div>
            </div>
        </div>
            
      
            





            </div>

            

           

            </div>
<br/>

            <br/>

 
           <br/>

            <div class="container-fluid">
        <footer class="row bg-dark text-light">
            <div class="col-md-6">
                <h5>Contact Us</h5>
                <ul>
                    <li>Email: Technicalhub@gmail.com</li>
                    <li>Phone: +1234567890</li>
                </ul>
            </div>
            {/* <div class="col-md-6"> */}
                
                {/* <ul>
                <h5>Follow Us</h5>
                <i class="fab fa-facebook-f"><a href='https://www.facebook.com/login/'><span>Facebook</span></a></i><br/>
                <i class="fab fa-instagram"><a href='https://www.instagram.com/login/'><span>Instagram</span></a></i><br/>
                 <i class="fab fa-whatsapp dec"><a href='https://www.whatsapp.com/login/' ><span>WhatsApp</span></a></i>

                </ul>
            </div> */}
        </footer>
    </div>

  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


    <link rel="icon" href="favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
        </>
        
    );
}

export default Gallery;