import http from '../http-common';


class PhotographerLoginService {
    register(data) {
        return http.post('/customer', data);
    }
}

export default new PhotographerLoginService();