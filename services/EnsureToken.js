
function EnsureToken(req,res,next){
    const beareHeader = req.headers["authorization"];
    if(typeof beareHeader !== 'undefined'){
        const bearer = beareHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else{
        const response = { status: false, message: 'Unauthorized access!.', data: 'Token expired!.Try Again.' };
        res.status(403).json(response);
    }
}

module.exports = EnsureToken;