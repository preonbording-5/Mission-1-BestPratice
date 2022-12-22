const getRegexVerification = (type: 'email' | 'password', value: string) => {

    const email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    const password = /^.{8,}$/
    if (type === 'email') {
      return email.test(value)
    } else {
      return password.test(value)
    }
  }
  
  export default getRegexVerification
