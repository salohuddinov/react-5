import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className='contact'>
            <div className="contact-hero">
                <div className="ch__left">
                    <h2>Have a question ? Let’s get in touch with us.</h2>
                    <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
                </div>
                <div className="ch__right">
                    <div className="rightt__conts">
                        <h3>Location</h3>
                        <p>DLF Cybercity, Bhubaneswar,
                            India, &52050
                        </p>
                    </div>
                    <div className="rightt__conts">
                        <h3>Contact Us</h3>
                        <h4>020 7993 2905</h4>
                        <h4>hi@finsweet.com</h4>
                    </div>
                </div>
            </div>
            <div className="location">
                <div className="nomw">
                    <input className='imput' type="text" placeholder='first name' />
                    <input className='imput' type="text" placeholder='Last name' />
                    <input className='imput' type="text" placeholder='Email id' />
                    <input className='imput' type="text" placeholder='Mobile NO' />
                    <textarea className='coment' required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
                    <button className='submit'>Submit</button>
                </div>
                <div className="iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.073069253105!2d69.20123767587322!3d41.285514171313025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1711872930516!5m2!1sen!2s"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact