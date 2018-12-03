import request from '../utils/request.jsx';


const api = {
    nab_schedule(params) {
        return request('post', 'Nba.schedule', params);
    },
};

export default api;

