import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateAddressInput(data) {
  console.log("iannaaan")

  let errors = {};

  if (Validator.isNull(data.reciever_name)) {
    errors.reciever_name = 'Reciever name is required';
  }

  if (Validator.isNull(data.contact_number)) {
    errors.contact_number = 'Phone number is required';
  }

  if (Validator.isNull(data.pincode)) {
    errors.pincode = 'Pincode is required';
  }

  if(Validator.isNull(data.address)) {
    errors.address = 'Address is required';
  }

  if (Validator.isNull(data.locality)) {
    errors.locality = 'Locality is required';
  }

  if (Validator.isNull(data.city)) {
    errors.city = 'City is required';
  }

  if (Validator.isNull(data.state)) {
    errors.state = 'State is required';
  }

  if (Validator.isNull(data.country)) {
    errors.country = 'Country is required';
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
