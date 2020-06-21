import axios from 'axios';

const getData = () => {
    return axios.get('https://instasport.co/dashboard/api/v1/clubs/')
}
export default getData;