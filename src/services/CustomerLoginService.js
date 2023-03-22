import http from '../http-common';


class CustomerLoginService {
    login(data) {
        return http.post('/customerLogin', data);
    }
}

export default new CustomerLoginService();