function middleware(req, res, next) {
    console.log('Hello from middleware');

    console.log(req.params);

    if (req.params.catId) {
        next();
        return;
    }

    res.status(403).send('<h2>You need to specify catId</h2>');
}

module.exports = middleware;