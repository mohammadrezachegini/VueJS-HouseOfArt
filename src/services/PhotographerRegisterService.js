import http from '../http-common';


class PhotographerLoginService {
    register(data) {
        return http.post('/photographers', data);
    }
}

export default new PhotographerLoginService();