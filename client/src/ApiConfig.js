
let BASE = '';
if(process.env.NODE_ENV == 'development') {
    BASE = 'http://localhost:4000';
}

const BASE_URL = `${BASE}/v1/`

export default BASE_URL;
