import React from 'react'
import contactImg from '../images/contact-vector.png'


const Form = () => {
  return (
    <section className='contact'>
        <h2 className='text-center pt-5 pb-5'>CONTACT US</h2>
        <div className='contact_content container pb-5'>
            <div className='row gx-5'>
                <img src={contactImg} className="contact_img w-30 col-lg-6 col-md-12 img-fluid" alt='contact-img'/>

                {/* form section */}
                <form className='w-30 col-lg-6 col-md-12  contact_form'>
                    <div class="mb-3 border-0">
                        <input type="text" class="form-control floatingInput" id="formGroupExampleInput" placeholder="full name" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control floatingPassword" id="formGroupExampleInput2" placeholder="name@example.com" />
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    </div>
                    <button type="button" class="btn btn-dark mt-4 px-5">SEND</button>
                </form>
            </div>
        </div>
    </section>
    
  )
}

export default Form
