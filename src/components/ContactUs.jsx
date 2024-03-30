import React from 'react'
import "../styles/ContactUs.scss"
export const ContactUs = () => {
    return (
        <div className='ContactUs'>
            <div className='ContactUs-MapContainer'>

                <iframe className='ContactUs-Map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54310830.98979912!2d165.53165723536833!3d33.815666308702774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland!5e0!3m2!1ses-419!2sar!4v1711478105706!5m2!1ses-419!2sar"

                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
            <div className='ContactUs-FormContainer'>
                <h2 className='ContactUs-FormTitle'>
                    Lorem, ipsum.
                </h2>
                <form action="" className='ContactUs-Form'>
                    
                    <input type="text" id="name" placeholder='Name'
                    className='ContactUs-FormInput' />


                    <input type="email" id="mail" placeholder='Mail'className='ContactUs-FormInput' />

             
                    <textarea id="message" cols="" rows="" placeholder='Message'className='ContactUs-FormTextArea' ></textarea>

                    <input type="submit" value={"Send"} className='ContactUs-FormSubmit' />
                </form>

            </div>
        </div>
    )
}
