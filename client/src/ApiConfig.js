
let BASE;
if(process.env.NODE_ENV == 'development') {
    BASE = 'http://ec2-13-126-19-80.ap-south-1.compute.amazonaws.com/';
}
else if(process.env.NODE_ENV == 'production') {
    BASE = 'http://127.0.0.1/'
}

const BASE_URL = `${BASE}api/v1/`

export default BASE_URL;
