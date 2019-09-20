
let BASE = '';
let BASE_URL = '';
// if(process.env.NODE_ENV == 'development') {
//     BASE = 'http://localhost:4000/';
//     BASE_URL = `${BASE}v1/`;
// }
// else {
    BASE = 'http://ec2-13-126-19-80.ap-south-1.compute.amazonaws.com/';
    BASE_URL = `${BASE}api/v1/`;
// }

export default BASE_URL;
