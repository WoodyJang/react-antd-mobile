import request from '../utils/request.jsx';


const api = {
    nba_schedule(params) {
        return request('post', 'Nba.schedule', params);
    },
};

export default api;

