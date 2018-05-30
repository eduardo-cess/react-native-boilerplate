export const equalPassword = (password, confirmPassword) => {
  var equalPassword = false
  console.log(password + confirmPassword)
  if( password === confirmPassword ){
    equalPassword = true
  }
  return equalPassword;
}
