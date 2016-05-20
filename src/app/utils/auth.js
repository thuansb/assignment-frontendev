const Auth = {
  handleLogin(email, password) {
    let rs = false;
    if (email === 'admin@abc.com' && password === 'admin') {
      localStorage.setItem('sessiontoken', email + password);
      rs = true;
    }

    return rs;
  },

  isLoggedIn() {
    return !!localStorage.getItem('sessiontoken');
  },

  handleLogout() {
    localStorage.removeItem('sessiontoken');
  }
};

export default Auth;
