import logo from './fractal.png';
import load from './spinner.gif';
import './Mandel2.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import up from './up.svg';
import down from './down.svg';
import zoomOut from './zoom-out.svg';
import zoomIn from './zoom-in.svg';
import refresh from './refresh.svg';
import text from "./mandel_text.png"
import text2 from "./mandel_text2.png"
var vertical=0;
var horizontal=0;
var zoom=1
const Mandel = () => {
      
      const [Render, setRender] = useState();
      
      function sayMandel() {
        const url="https://en.wikipedia.org/wiki/Mandelbrot_set";
        window.open(url);
      }
      function sayBenoit() {
        const url="https://en.wikipedia.org/wiki/Benoit_Mandelbrot";
        window.open(url);
      }




    function getRender(){
      setRender(load);

      return render()
    }
      
    const render = async () => {
      try{  
        var Transform=horizontal.toString()+"px"+vertical.toString()+"px"+zoom.toString()+"px";
      }
      catch{}
      console.log(Transform)
      const res = await fetch("/data?"+Transform)
     
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setRender(imageObjectURL);
    };
    function updateVert1(){
      vertical-=100;
    }
    function updateVert2(){
      vertical+=100;
    }
    function updateHorz1(){
      horizontal-=100;
    }
    function updateHorz2(){
      horizontal+=100;
    }
    function updateZoom1(){
      zoom+=1;
    }
    function updateZoom2(){
      zoom-=1;
    }
    function reset(){
      vertical=0;
      horizontal=0;
      zoom=1;
    }

    return ( 

        <div className='App1'>

        <header className="App-header2">

            <Navbar>
            <img onClick={sayBenoit}
            src={logo}
            alt="Sample Brand Logo"
            width="35"
            className="align-top d-inline-block"
            height="35"
          />
            <p onClick={sayMandel}>MANDELBROT</p>
            <div className='panel'>
              <Button variant='primary' style={{ backgroundColor: "#00B1E1" }} className='rounded-circle' onClick={updateVert1}>
                <img src={up} className='btn-img' alt="btn"></img>
              </Button>
              <Button variant='primary' style={{ backgroundColor: "#00B1E1" }} className='rounded-circle' onClick={updateVert2}>
                <img src={down} className='btn-img' alt="btn"></img>
              </Button>
              <Button variant='primary' style={{ backgroundColor: "#00B1E1" }} className='rounded-circle' onClick={updateHorz1}>
                <img src={down} className='btn-img' alt="btn" style={{ rotate:"90deg" }}></img>
              </Button>
              <Button variant='primary' style={{ backgroundColor: "#00B1E1" }} className='rounded-circle' onClick={updateHorz2}>
                <img src={down} className='btn-img' alt="btn" style={{ rotate:"-90deg" }}></img>
              </Button>
              <Button variant='primary' style={{ backgroundColor: "#00B1E1" }} className='rounded-circle' onClick={updateZoom1}>
                <img src={zoomIn} className='btn-img' alt="btn"></img>
              </Button>
              <Button variant='primary' style={{ backgroundColor: "#00B1E1" }} className='rounded-circle' onClick={updateZoom2}>
                <img src={zoomOut} className='btn-img' alt="btn"></img>
              </Button>
              <Button variant='primary' style={{ backgroundColor: "#00B1E1" }} className='rounded-circle' onClick={reset}>
                <img src={refresh} className='btn-img' alt="btn"></img>
              </Button>
            </div>
          <Button variant="info" onClick={getRender}>
            RENDER
          </Button>
            
            </Navbar>
            
        </header>
        <div className='container2'>
          <div className='canvas'>
            <img src={Render} className='render' alt=""></img>
          </div>
          <div className='controls'>
            <p id="text">
              <img src={text} alt="" className='text'></img>
            </p>
          </div>
        </div>
        <div className='footer'>
        <img src={text2} alt="" className='text2'></img>
        </div>

        </div>
    );
}
 
export default Mandel;

/*  try{    setTransform(document.getElementsByClassName('react-transform-component')[0].style.transform);
      console.log(Transform)}
      catch{} */