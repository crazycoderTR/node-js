const isLogin = (req, res, next) => {
    let login = true;
    if(login) next();
    else res.send('Please sign in.');
}

module.exports = isLogin;