import React from 'react'

function SignInModal({toggleSignIn, isOpen}) {
  return (
    <div>
      <div id='user-modal' className={`modal-dialog modal-dialog-centered ${isOpen ? "show" : ""}` }>
         <div className='modal-content'>
            <div className='modal-content-dialog modal-content-dialog-centered p-3'>
                <div className='modal-content-content'>
                    <div className='border-0 modal-header d-flex justify-content-between align-items-center p-3'>
                        <h5 className='fs-3 fw-bold modal-title' id='userModalLabel'>Sign Up</h5>
                        <button className='btn-close' type='button' onClick={toggleSignIn}></button>
                    </div>git 
                    <div className="modal-body p-3">
                        <form action="#" className='needs-validation'>
                            <div className="mb-3">
                                <label htmlFor="fullName" className='form-label'>Name</label>
                                <input type="text" placeholder='Enter Your Name' required id='fullName' className='form-control'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label'>Email address</label>
                                <input type="email" placeholder='Enter Email Address' required id='email' className='form-control'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className='form-label'>Password</label>
                                <input type="text" placeholder='Enter Password' className='form-control'/>
                                <small className='form-text'>
                                    By Signup, you agree to our <a href="#" className='signin-text'>Terms & Conditions</a> & <a href="#" className='signin-text'>Privacy Policy</a>.
                                </small>
                            </div>
                            <button className='btn btn-primary' type='button'>Sign Up</button>
                        </form>
                    </div>
                    <div className='border-0 justify-content-center modal-footer'>
                        Already have an account? <a href="/signin" className='signin-text'> Sign In</a>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default SignInModal
