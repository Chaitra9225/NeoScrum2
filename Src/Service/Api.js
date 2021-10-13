const BASE_URL = "http://www.someapi.com";

export const Api = (url,method,body=null,headers ={}) => {
try {
    const endPoint = BASE_URL.concat(url);
const reqBody = body ? JSON.stringify(body) : null;

const fetchParams = {method, headers};

if ((method=== "POST" && method=== "PUT") && !body) {
    throw new Error("Request body required");
}

if(reqBody) {
    fetchParams.headers["content-type"] = "application/json";
    fetchParams.body = fetchParams;
}

const fetchPromise = fetch(endPoint, fetchParams);
const timeOutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 10000);
});
const response = Promise.race([fetchPromise, timeOutPromise]);
return response;
}
catch (e) {
    throw new Error(e);
}
}


export const fetchApi = async (url, method, body,statusCode,token=null,loader= false) => {
try {
    const headers = {}
    if(token) {
        headers["x-auth"] = token;
    }
    const response = await Api(url,method,body,headers);
    if ( response.status === statusCode) {
        const responseBody = await response.JSON();
        return responseBody;
    }
     throw response;
}
catch (error) {
     throw error;
}

}