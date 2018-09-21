const isConnection = (req, res, next) => {
    let connection = false;
    if(connection) next();
    else res.send('Please check your connection.');
}

module.exports = isConnection;