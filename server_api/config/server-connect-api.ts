
import axios from "axios";
import Router from "next/router";

import { getData, getToken } from "@/server_api/storage";
import { baseURL } from "@/server_api/config/api.endpoints";

const serverConnectAPI = axios.create({
    baseURL: baseURL,
    // headers: { "Content-Type": "application/json;charset=UTF-8", Accept: "application/json" },
    headers: { "Content-Type": "multipart/form-data", Accept: "*/*" },
});

serverConnectAPI.interceptors.request.use(async function (config: any) {
    const authToken = await getToken();
    const uuid = await getData('medon_uuid');

    config.headers["Authorization"] = `Bearer ${authToken}`;
    config.headers["UserToken"] = uuid;
    // console.log('config.headers', config.headers);

    // config.headers = {
    //     "Authorization": `Bearer ${authToken}`
    // }
    return config;
}, function (error) {

    return Promise.reject(error);
});

serverConnectAPI.interceptors.response.use(async function (response: any) {
    // console.log("response", response);
    if ((response) && (response.status === 200)) {
        if (response.data) {
            if ((response.data.status === false) && (response.data.message !== "")) {
                throw response.data.message;
            } else {
                if (response.data) {
                    return response.data;
                } else {
                    return response;
                }
            }
        }
    } else {
        if (response.status === 204) {
            throw "No content found";
        } else {
            setAlertParams_Later({
                type: 'danger',
                icon: '',
                title: 'Sorry... Something went wrong.',
                message: 'An Error occured while executing your request.. please try again later',
                showAlert: true,
                callBack: () => {
                    Router.reload();
                },
            });
            throw "Unknown database error (code:2)";
        }
    }
}, function (error) {
    if (error && error.response) {
        const { data, status } = error.response;
        if ((data) && (status == '401')) {// validation error
            if (data.errorMsg) {
                return Promise.reject(data.errorMsg);
            } else {
                if (data.message) {
                    return Promise.reject(data.message);
                } else {
                    return Promise.reject("Validation error (status 401)");
                }
            }
        } else {
            return Promise.reject(error.message);
            // throw error?.message;
        }
    } else {
        return Promise.reject(error.message);
        // throw error?.message;
    }
    return Promise.reject(error);
});



// function (error) {
//     if (error && error.response) {
//         const { data, status } = error.response;
//         if ((data) && (status == '401')) {// validation error
//             if (data.errorMsg) {
//                 throw data.errorMsg;
//             }
//         } else {
//             throw error?.message;
//         }
//     } else {
//         throw error?.message;
//     }
//     return Promise.reject(error);
// });

const setAlertParams_Later = (args: any) => {
    setTimeout(() => {
        alert(args.message);
    }, 100);
    //setTimeout(() => { setAlertParams(...args) }, 100)
};
export default serverConnectAPI;