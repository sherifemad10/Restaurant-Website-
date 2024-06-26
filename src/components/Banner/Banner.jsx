import './banner.css'
import mainImg from '../../assets/dish1.png'
import subImg from '../../assets/dish2.png'
import subImg2 from '../../assets/dish3.png'
import subImg3 from '../../assets/dish4.png'
import subImg4 from '../../assets/dish5.png'
import subImg5 from '../../assets/dish6.png'
import quality from '../../assets/quality.png'
import { useState } from 'react'


const Banner = () => {

  const [changeImg, setchangeImg] = useState(mainImg)
  return (
    <div className='banner' id='home' data-aos= "fade-down">

         {/* Left Side */}

      <div className='leftSide'>


        
        <div className='leftSideCon'>


<div className='leftSidetop'>

<div className='quality'>  
  
  <div className="light-button">
  
       <button className="bt">
        
          <div className="light-holder">
               <div className="dot" />
                 <div className="light" />
        </div>
  
          <div className="button-holder">
               <img src={quality} alt="Quality" />
           </div>
  
       </button>
  
    </div>
  </div> {/* //quality */}




  
          <div className='leftSideText'>
            <p> ــــــــ Healthy & Quality ــــــــ</p>
            
            <h5>Delicious</h5>
            <h6>Food Menu</h6>
          </div> {/* // leftSideText */}
  
          

</div> {/* // leftSidetop */}



        {/* Order Buttom */}
<div className='orderButton'>
  
          <button className="continue-application">
    <div>
      <div className="pencil" />
      <div className="folder">
        <div className="top">
          <svg viewBox="0 0 24 27">
            <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
          </svg>
        </div>
        <div className="paper" />
      </div>
    </div>
    Make Order
  </button>
</div>  {/* // orderButton */}



        </div>  {/* // leftSideCon */}



      </div>  {/* // leftSideCon */}






      {/*>>>>> right Side <<<<<<<< */}

      <div className='rightSide'>




        <div className='rightSideCon'>
          <div className='mainImg'>
            <img src={changeImg} alt='Main Img' name="main"/>  
          </div> {/* // mainImg */}
          
          
          
          <div className='subImg'>
            <img src={mainImg} alt='Main Img' onClick={()=> setchangeImg(mainImg)} /> 
            <img src={subImg} alt='Sub Img' onClick={()=> setchangeImg(subImg)} />
            <img src={subImg2} alt='Sub Img' onClick={()=> setchangeImg(subImg2)} />
            <img src={subImg3} alt='Sub Img' onClick={()=> setchangeImg(subImg3)} />
            <img src={subImg4} alt='Sub Img' onClick={()=> setchangeImg(subImg4)} />
            <img src={subImg5} alt='Sub Img'onClick={()=> setchangeImg(subImg5)} />
          </div> {/* // subImg */}
          
        </div> {/* // rightSideCon */}

    

      </div> {/* // rightSide */}

      
    </div>
  )
}

export default Banner
