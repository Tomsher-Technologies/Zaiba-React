import { AxiosRequestConfig, AxiosResponse } from "axios";

import serverConnectAPI from "@/server_api/config/server-connect-api";

const postAPI = async (postAPIValues: any): Promise<AxiosResponse<any>> => {
    const { apiEndpoint, ...restParams } = postAPIValues;
    // console.log('postAPIValues  ', postAPIValues);
    if (restParams.formData) {
        var formData = new FormData();
        for (const newValues in restParams) {
            formData.append(newValues, restParams[newValues]);
        }
        return await serverConnectAPI.post(apiEndpoint, formData);
    } else {
        return await serverConnectAPI.post(apiEndpoint, restParams);
    }
};

const apiPost = {
    postAPI,
};

export default apiPost;
