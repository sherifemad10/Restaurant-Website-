import './contact.css'
import { LuPhoneCall } from "react-icons/lu";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";






const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h2>ـــــ Contact Us ـــــ</h2>

    <div className='contactCon'>

        <div className='details'>
            
          <div className='phone'>
            <LuPhoneCall className='contactIcons'/>
            <p><span>Phone :</span> +1 234 567 890</p>
          </div>
      
          <div className='email'>
             <AiTwotoneMail className='contactIcons'/>
            <p><span>Email :</span> freshy@gmail.com</p>
          </div>
      
          <div className='location'>
            <IoLocationOutline className='contactIcons'/>
            <p><span>Address :</span> 123 Main St, New York, NY 10001</p>
          </div>
      
      
        </div>
      
        <div className='map'>

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.975255341714!2d-73.83400672426978!3d40.76256897138593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2600f928bb159%3A0x939edd86cd71a6ef!2s123%20Main%20St%2C%20Flushing%2C%20NY%2011354%2C%20USA!5e0!3m2!1sen!2seg!4v1719139501197!5m2!1sen!2seg"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>      
        </div>

    </div>
      
    </div>
  )
}

export default Contact
