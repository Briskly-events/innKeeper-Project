import React from 'react'
import signimg from '../images/signimg'


const Signup = () => {
  return (
    <section className='signin_content'>
        <div className='container'>
            <div className='row'>
                <form className='col-6 col-lg-6 col-md-12'>
                    <h3 className='text-center'>SIGN UP</h3>
                    
                </form>
                <img src={signimg} className="signimg img-fluid" />
            </div>
            
        </div>
    </section>
    
  )
}

export default Signup
