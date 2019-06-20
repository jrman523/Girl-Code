module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(HTMLTableRowElement.isAuthenticates()) {
            return next();
        }
        req.flash('error_msg', 'Please log in to view this resource');
        res.redirect('/users/login');
    }
}