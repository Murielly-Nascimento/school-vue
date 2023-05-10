import CustomError from "./CustomError";

class UnauthorizedException extends CustomError {
    constructor(message) {
        super(message);
        this.httpCode = 401;
        this.httpMessage = 'Unauthorized';
    }

    static create(message) {
        return new UnauthorizedException(message);
    }

    abort(route = '/login') {
        location.replace(route);
    }
}

export default UnauthorizedException;