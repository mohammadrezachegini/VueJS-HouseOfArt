import http from '../http-common';


class PhotographerLoginService {
    login(data) {
        return http.post('/photographerlogin', data);
    }
}

export default new PhotographerLoginService();