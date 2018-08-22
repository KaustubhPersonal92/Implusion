import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {

  let errors = {};

  if (Validator.isNull(data.firstName)) {
    errors.firstName = 'First name is required';
  }

  if(Validator.isNull(data.lastName)) {
    errors.lastName = 'Last name is required';
  }

  if (Validator.isNull(data.email)) {
    errors.email = 'Email is required';
  }

  else if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isNull(data.password)) {
    errors.password = 'Password is required';
  }

  if (Validator.isNull(data.number)) {
    errors.number = 'Mobile is required';
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
