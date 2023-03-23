import http from '../http-common';


class CustomerRegisterService {
    register(data) {
        return http.post('/customer', data);
    }
}

export default new CustomerRegisterService();