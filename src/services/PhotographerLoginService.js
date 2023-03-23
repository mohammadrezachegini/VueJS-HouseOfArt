import http from '../http-common';


class PhotographerLoginService {
    login(data) {
        return http.post('/photographerLogin', data);
    }
}

export default new PhotographerLoginService();