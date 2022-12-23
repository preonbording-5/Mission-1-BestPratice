const regex = {
  email: /^[a-zA-Z0-9+-.]*@[a-zA-Z0-9+-.]*$/,
  password: /^.{8,}$/,
};

const getRegexVerification = (type: 'email' | 'password', value: string) => {
  return regex[type].test(value);
};

export default getRegexVerification;
