import 'bootstrap/dist/css/bootstrap.min.css';
import about1 from './images/about1.jpg';
import img1 from './images/img1.jpg';
import { useNavigate } from 'react-router-dom';
function About() {
  const navigate=useNavigate();
function get()
{
  navigate('/gallery');
}
  return (
    <div className='container-fluid' id="aboutc">
      <div className='row'>
        <div className='col-md-12 ' style={{padding:"60px"}}>
          <h1 className='text-center text-light'id="aboutname">About Us</h1>
        </div>
      </div>
      <div className='row '>
        <div className='col-md-2' ></div>
        <div className='col-md-4 p-5'>
          <img src={about1} className="img-fluid shiny-hover" alt="Responsive image" style={{ width: '600px', height: '350px' }} id="aboutpic" />
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-3 p-5'>
          <div className='row'>
          <b className='text-light mb-6' id="about7 ">Meet Babji Neelam: Founder & CEO of Technical Hub</b>
          <p className="text-light" id="about8">Babji Neelam is the visionary leader behind Technical Hub, a dynamic platform empowering tech enthusiasts worldwide. With a passion for innovation and a drive for excellence, Babji has led Technical Hub since its inception, steering it towards success in the ever-evolving tech landscape.</p>
        </div>
        <div className='col-md-2'></div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-11 p-3'>
          <h3 className='text-light ml-5'>Our skills</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-4'>
          <b className='text-light'>Programming Languages, Web Development, Database Management, Software Development Lifecycle (SDLC), Version Control Systems, DevOps Practices, Cybersecurity Awareness, Continuous Learning, Problem-Solving and Troubleshooting</b>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-5'>
          <div className='row'>
            <div className='col-md-5'>
              {/* <h1 className='text-light text-center' style={{ marginLeft: "20px" }}>10000+</h1>
              <p className='text-light text-center'id="para" style={{ marginLeft: "60px" }}>Certified Students</p> */}
            </div>
            <div className='col-md-4'>
            <button type="submit" className="btn btn-primary"id="aboutbutton"onClick={get}>View more</button>
            </div>
            <div className='col-md-3'>
              {/* <h1 className='text-light text-center' style={{ marginLeft: "70px" }}>6000+</h1> */}
              {/* <p className='text-light text-center' id="para"style={{ marginLeft: "80px" }}>Placements</p> */}
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
      <div className='row p-4'>
        <div className='col-6'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-9'>
              <br />
              <b className='ml-5 text-light'>coding skills</b>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <br />
              <b className='ml-5 text-light'>technical skills</b>
              <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <br />
              <b className='ml-5 text-light'>logical skills</b>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <br />
              <b className='ml-5 text-light'>Reasoning skills</b>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-md-5 p-3'>
              <h1 className='text-light text-center' style={{ marginRight: "30px" }}>120+</h1>
              <p className='text-light text-center'id="para">Best Trainers</p>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-5 p-3'>
              <h1 className='text-light text-center' style={{ marginRight: "20px" }}>20+</h1>
              <p className='text-light text-center' id="para">Certifications</p>
            </div>
            <div className='col-md-1'></div>
          </div>
          <div className='row'>
            <div className='col-md-5 p-4'>
              <h1 className='text-light text-center' >10000+</h1>
              <p className='text-light text-center'id="para" style={{ marginLeft: "30px" }}>Certified Students</p>
            </div>
            <div className='col-md-2 '></div>
            <div className='col-md-5 p-4'>
              <h1 className='text-light text-center'  style={{ marginRight: "30px" }}>6000+</h1>
              <p className='text-light text-center' id="para">Placements</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8 bg-success p-5'id="about3">
          <h1 className='text-center'style={{ marginTop: "500px" }}>jfgnon</h1>.
        </div>
        <div className='col-md-2'></div>
      </div> */}
       <div className="container-fluid">
        <div className='row'></div>
        <div className='row'>
          <div className='col-md-2'></div>
            <div
                className="col-md-8 p-5"id="bggrad">
              <h1 className='text-light text-center p-3'id="grad"></h1>
                <h4 className='text-light text-center'><q>We are ready to adopt any type of Technoligies</q> </h4>
                <h4 className='text-light text-center'><q>
"We can enhance anyone's technical skills through our training."</q> </h4>
               <h1 className='text-center text-light p-2'></h1>
                <div className='col-md-2'></div>
            </div>
        </div>
        </div>
        <br></br>
       
    </div>
    
  );
}
export default About;
