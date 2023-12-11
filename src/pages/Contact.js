
import './Main.css'

function Contact() {
  return (
    <div className='contact-page'> 
     <form>
        <label htmlFor='Name'>Name</label>
        <input type='text'/>
        <label htmlFor='email'>Email</label>
         <input type='email'/>
         <label htmlFor='phone'>Phone</label>
         <input type='tel'/>
         <label htmlFor='message'>Message</label>
         <textarea ></textarea>
         <input type='submit' className='submit-btn'/>
         <input type='reset' className='reset-btn'/>
     </form>
    </div>
  )
}

export default Contact
