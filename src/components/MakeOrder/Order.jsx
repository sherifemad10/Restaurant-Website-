import './order.css'
import orderImg from '../../assets/ordernow.png'
import { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Order = () => {


    // show dessert input
  const [show , setShow] = useState("dessertInputHide")

  const changeDisplay = () =>{
    setShow("dessertInputShow")
  }

  const changeDisplayHide = () =>{
    setShow("dessertInputHide")
  }

   // show snacks input
  const [showSnacks , setshowSnacks] = useState("snacksInputHide")

  const changeDisplaysnacks = () =>{
    setshowSnacks("snacksInputShow")
  }

  const changeDisplayHidesnacks = () =>{
    setshowSnacks("snacksInputHide")
  }

    // show Drinks input
  const [showDrinks , setshowDrinks] = useState("drinksInputHide")

  const changeDisplayDrinks = () =>{
    setshowDrinks("drinkInputShow")
  }

  const changeDisplayHideDrinks = () =>{
    setshowDrinks("drinksInputHide")
  }

  // accuss input value
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const address = useRef();


  const inputMainFood = useRef();
  const inputDessert = useRef();
  const inputSnacks = useRef();
  const inputDrinks = useRef();

  const [mainfood, setmainfood] = useState("")
  const [dessert, setdessert] = useState("")
  const [snacks, setsnacks] = useState("")
  const [drinks, setdrinks] = useState("")



  const Input = () => {
    setmainfood(inputMainFood.current.value);
    setdessert(inputDessert.current.value);
    setsnacks(inputSnacks.current.value);
    setdrinks(inputDrinks.current.value);
    if (name.current.value !='' && email.current.value !='' && phone.current.value !='' && address.current.value !=''&& inputMainFood.current.value !='') {
      let thankscontaner = document.querySelector(".thankscontaner");
      thankscontaner.style.display = thankscontaner.style.display === "flex" ? "none" : "flex";
    }else{
      console.log("nooo")
    }
  
    
    
    

  }

  const hideThank = () => {
    let thankscontaner = document.querySelector(".thankscontaner")
    thankscontaner.style.display = thankscontaner.style.display === "none" ? "flex" : "none"
  }






  // send order to your email  use emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qm2u6jp', 'template_358eahi', form.current, {
        publicKey: '7n8s8qqhxViNfz9K2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="order" id='order'>

    <h2>ـــــ Make Order ـــــ</h2>

    <div className='orderCon'>


      <div className='orderImg'>
        <img src= {orderImg} alt='Order Img'/>
      </div>
      
       
       <form ref={form} onSubmit={sendEmail}>
        
         <div className="formInput">

         <h3>ـــــ Order Now ـــــ</h3>
      
          <div className="nameInput">
            <label>Your Name:</label>
            <input type="text" placeholder="Sherif Emad Shoby" name="user_Name" required  className = 'input' ref={name}/>
          </div>
          
          <div className="emailInput">
            <label>Your Email:</label>
            <input type="email" placeholder="sherifemad@gmail.com" name="user_Email" required className = 'input' ref={email}/>
          </div>
           
          <div className="addressInput">
            <label>Address in detail:</label>
            <input type="text" placeholder="Governorate, City, village" name="user_Address" required className = 'input' ref={address}/>
          </div>
      
          <div className="numberInput">
            <label>Your Number:</label>
            <input type="text" placeholder="+201234567891" required name="user_Number" className = 'input' ref={phone}/>
          </div>
      
          <div className="mainInput">
            <label>Main Food:</label>
            <input type="text" placeholder="Chicken Curry && Steak Frites" name="user_Main" required className = 'input foodinput' ref={inputMainFood}/>
          </div>
      
          <div className="doYouHaveDessert">

            <label>Do You Have a Dessert ?</label>

            <div className='Radio'>

            <div className='Yes'>
              <input type="radio" name='Dessert' value= 'Yes' required   onChange={changeDisplay}/>
                <label>Yes</label>
            </div>
                
              <div className='No'>
                <input type="radio" name='Dessert' value= 'No' required  onChange={changeDisplayHide}/>
                <label>No</label>
              </div>

            </div>

              <div className={`${show}`}>
               <label>Dessert:</label>
              <input type="text" placeholder="Apple Pie && Chocolate Mousse" name="user_Dessert" className = 'input foodinput' ref={inputDessert}/>
             </div>
            
            </div>


            <div className="doYouHaveSnacks">

            <label>Do You Have a Snacks ?</label>

            <div className='Radio'>

            <div className='Yes'>
              <input type="radio" name='Snacks' value= 'Yes' required  onChange={changeDisplaysnacks}/>
                <label>Yes</label>
            </div>
                
              <div className='No'>
                <input type="radio" name='Snacks' value= 'No' required  onChange={changeDisplayHidesnacks}/>
                <label>No</label>
              </div>

            </div>

              <div className={`${showSnacks}`}>
               <label>Snacks:</label>
              <input type="text" placeholder="Onion Rings && Nachos" name="user_Snacks" className = 'input foodinput' ref={inputSnacks}/>
             </div>
            
            </div>

            <div className="doYouHaveSnacks">

            <label>Do You Have a Drinks ?</label>

            <div className='Radio'>

            <div className='Yes'>
              <input type="radio" name='Drinks' value= 'Yes' required  onChange={changeDisplayDrinks}/>
                <label>Yes</label>
            </div>
                
              <div className='No'>
                <input type="radio" name='Drinks' value= 'No' required  onChange={changeDisplayHideDrinks}/>
                <label>No</label>
              </div>

            </div>

              <div className={`${showDrinks}`}>
               <label>Drinks:</label>
              <input type="text" placeholder="Lemonade && Fruit Juice" name="user_Snacks" className = 'input foodinput' ref={inputDrinks}/>
             </div>
            
            </div>
      
        
          

            <button className="btn" id="bt" onClick={Input}>
    <span className="msg" id="msg"></span>
    Order Now
</button>

         </div>

       </form>

    </div>

    {/* thank you  */}

    

  
      <div className='thankscontaner'>
    <div className='thankYou'>


    <div className="cardthank">

  <div className="header">
    <div className="image">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M20 7L9.00004 18L3.99994 13"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </g>
      </svg>
    </div>
    <div className="content">
      <span className="title">Order validated</span>
      <p className="message">
      Thank you for your purchase. Your order will be delivered as soon as possible
      </p>

      <div className='your-Order'>

          {/* mainfood */}

      {
    mainfood !== '' && <h4><span>Your Main Food is:</span> {mainfood} </h4> 

  }

    {/* dessert */}

{
    dessert !== '' && <h4><span>Your Dessert is:</span> {dessert} </h4>  
     
  }

  {/* Snakes */}

  {
    snacks !== '' &&   <h4><span>Your Snacks is:</span> {snacks} </h4>   
     
  }

  {/* Drinks */}

  {
    drinks !== '' &&   <h4><span>Your Drinks is:</span> {drinks} </h4>  
     
  }

      {/* {
        mainfood === '' ? '' : <h4><span>Your Main Food is:</span> {mainfood} </h4>
      } */}
       
       

      {/* {
        dessert === '' ? '' : <h4><span>Your Dessert is:</span> {dessert} </h4> 
      } */}

      {/* {
        snacks === '' ? "" : <h4><span>Your Snacks is:</span> {snacks} </h4> 
      } */}

       {/* {
        drinks === '' ? "" : <h4><span>Your Drinks is:</span> {drinks} </h4>
      } */}
      
      
       


       

      </div>

      
    </div>
    <div className="actions">
      <button className="history" type="button" onClick={hideThank}>
        OK
      </button>
    </div>
  </div>


  
</div>











    </div>

    </div>








    </div>
  )
}

export default Order
