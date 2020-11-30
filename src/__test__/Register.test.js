import React from 'react'
import Register from '../components/Register'
import { render, fireEvent, wait } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store/store'


test('should submit the form', async () => {
    // Arrange

    // Set up a fake handle submit function to replace the real handle submit function
    const handleSubmit = jest.fn()
  
    //  Set up a test user object which will contain fields matching form to be tested
    const testUser = {
       first_name: 'Zaur', 
       last_name: 'Guliyev', 
       email: 'zaur.quliyev@gmail.com', 
       date:'10/10/2020' 
    }

    // Get your selectors and render the component you wish to test, pass in any fake functions or props
    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <Register submit={handleSubmit} />
      </Provider>
    )
  
    // Use your selectors to select the field nodes needed to fill out the form
    const firstNameNode = getByPlaceholderText('First Name')
    const lastNameNode = getByPlaceholderText('Last Name')
    const emailNode = getByPlaceholderText('Email')
    const dateNode = getByPlaceholderText('Date')
    const formNode = getByTestId('form-element')
  
    // Act
  
    // Set the value of these nodes to the values from your object
    fireEvent.change(firstNameNode, { target: { value: testUser.first_name } })
    fireEvent.change(lastNameNode, { target: { value: testUser.last_name } })
    fireEvent.change(emailNode, { target: { value: testUser.email } })
    fireEvent.change(dateNode, { target: { value: testUser.date } })
  
    // Fire off the event by clicking on the submit button
    fireEvent.submit(formNode)

    // Assert
    await wait(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleSubmit).toHaveBeenCalledWith(testUser)
    })

  })

