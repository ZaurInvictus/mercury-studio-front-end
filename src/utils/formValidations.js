export default function formValidations (formData, setFormErrors) {
    let firstNameError = ''
    let lastNameError = ''
    let emailError = ''
    let dateError = ''


    if (formData.first_name.match(/[^a-zA-Z_ ]/g) // should not contain special characters or numbers.
    || formData.first_name.match(/^$|\s+/) !== null // No spaces
    || formData.first_name.length > 255) { // max length 255 characters
      firstNameError = "First Name cannot contain special characters, numbers or empty spaces"
    }

    if (formData.last_name.match(/[^a-zA-Z_ ]/g) // should not contain special characters or numbers.
    || formData.last_name.match(/^$|\s+/) !== null // No spaces
    || formData.last_name.length > 255) { //  max length 255 characters) 
      lastNameError = "Last Name cannot contain special characters, numbers or empty spaces"
    }

    // First Name & Last Name Validations
    if (!formData.first_name) { // cannon be blank
      firstNameError = "Must enter a First Name"
    }
    if (!formData.last_name) { // cannon be blank
      lastNameError = "Must enter a Last Name"
    }

    // Email Validation
    if (formData.email.toLowerCase().match(
        /*eslint no-useless-escape: */
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    ) === null 
    || formData.email.length > 255) { 
       emailError = "Email is invalid"
    }

    if (!formData.email) { // cannon be blank
        emailError = "Must enter an Email"
    }


    // Date Validations
    if (!formData.date) { // cannon be blank
        dateError = "Must choose a date"
    }


    // Setting errors to the state
    if (firstNameError || lastNameError || emailError || dateError) {
      setFormErrors({ firstNameError, lastNameError, emailError, dateError })
      return false
    }
    return true
}
