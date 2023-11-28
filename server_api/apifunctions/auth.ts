import { AxiosResponse } from "axios";

import serverConnectAPI from "@/server_api/config/server-connect-api";
import { apiEndpoints } from "@/server_api/config/api.endpoints";

const customerLogin = async (loginValues: any): Promise<AxiosResponse<any>> => {
    return await serverConnectAPI.post(apiEndpoints.customerLogin, loginValues)
};

const registerLogin = async (registerValues: any): Promise<AxiosResponse<any>> => {
    return await serverConnectAPI.post(apiEndpoints.registerLogin, registerValues)
};

const resendOTP = async (values: any): Promise<AxiosResponse<any>> => {
    return await serverConnectAPI.post(apiEndpoints.resendOTP, values)
};

const verifyMobileOTP = async (values: any): Promise<AxiosResponse<any>> => {
    return await serverConnectAPI.post(apiEndpoints.verifyMobileOTP, values)
};

const loginOTP = async (values: any): Promise<AxiosResponse<any>> => {
    return await serverConnectAPI.post(apiEndpoints.loginOTP, values)
};

const auth = {
    customerLogin,
    registerLogin,
    verifyMobileOTP,
    resendOTP,
    loginOTP,
};

export default auth;