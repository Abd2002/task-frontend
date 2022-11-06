import api from './api';
const userInsert = async (data) => {
    let response = api.post('/user',data).catch((err) => console.log(err));
    response = response.data
    return response;
}

export { userInsert };