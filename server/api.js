import axios from 'axios';

let base = 'api';

//获取全部用户
export const getSensorList = params => {
    return axios.get(`../src/components/page/VueTable.vue`, { params: params});
} 