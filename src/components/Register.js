import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../store/actions/register'
import FormErrors from './layout/FormErrors'
import formValidations from '../utils/formValidations'
import Alert from './layout/Alert'



const Register = ({ register, loading }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        date: ''
    })

    const [formErrors, setFormErrors] = useState({
      firstNameError: '', lastNameError: '', emailError: '', dateError: ''
    })

    const { firstNameError, lastNameError, emailError, dateError } = formErrors
    const { first_name, last_name, email, date } = formData

    const changeHandler = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value })


    const submitForm = e => {
        e.preventDefault()
        const isValid = formValidations(formData, setFormErrors)
        if (isValid) {
            setFormErrors({
                firstNameError: '', lastNameError: '', emailError: '', dateError: ''
            })
      
            register(formData)
            setFormData({ first_name: '', last_name: '', email: '', date: '' })
        }
    }

    // Getting today's date and passing it to the date input as "min's" value to disable choosing today or past date for registering
    const today = new Date().toISOString().split('T')[0]

    return (
        <>
          <main className="main">
             <section className="section section--full">
               <div className="container tp--sm bp--sm">
                 <div className="content content--sm content--center">
            <h1 className='large text-primary'>Event Registration Form</h1> 
            <Alert />
            <form className='form' data-testid='form-element' onSubmit={submitForm}>
                <div className="input__section">
                    <input
                        className={firstNameError ? 'input--text error' : 'input--text'}
                        type='text'
                        placeholder="First Name"
                        name='first_name'
                        value={first_name}
                        onChange={changeHandler}
                        //required
                    />
                </div>
                <FormErrors message={firstNameError}/>
                <div className="input__section">
                    <input
                        className={lastNameError ? 'input--text error' : 'input--text'}
                        type='text'
                        placeholder="Last Name"
                        name='last_name'
                        value={last_name}
                        onChange={changeHandler}
                        //required
                    />
                </div>
                <FormErrors message={lastNameError}/>
                <div className="input__section">
                    <input
                        className={emailError ? 'input--text error' : 'input--text'}
                        type='text'
                        placeholder="Email"
                        name='email'
                        value={email}
                        onChange={changeHandler}
                        //required
                    />
                </div>
                <FormErrors message={emailError}/>
                <div className="input__section">
                    <input
                       className={dateError ? 'input--text error' : 'input--text'}
                        type='date'
                        placeholder="Date"
                        name='date'
                        value={date}
                        onChange={changeHandler}
                        min={today}
                        //required
                    />
                </div>
                <FormErrors message={dateError}/>
                <button className="button button--primary" type="submit">
                  {loading ? <><i className="fa fa-refresh fa-spin link__icon"></i>Loading</> :
                    <><span>Register</span></>
                  }
                </button>
              </form>
              </div>
            </div>
           </section>
         </main>
        </>
    )
}


Register.propTypes = {
    register: PropTypes.func.isRequired,
    loading: PropTypes.bool
}



const mapStateToProps = state => {
    return {
        register: state.register,
        loading: state.register.loading
    }
}

export default connect(
    mapStateToProps,
    { register }
)(Register)