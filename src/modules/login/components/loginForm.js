import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <Field name="password_confirmation" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(LoginForm)

export default LoginForm
