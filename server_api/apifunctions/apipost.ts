import { AxiosRequestConfig, AxiosResponse } from "axios";

import serverConnectAPI from "@/server_api/config/server-connect-api";

const postAPI = async (postAPIValues: any): Promise<AxiosResponse<any>> => {
    const { apiEndpoint, ...restParams } = postAPIValues;
    // console.log('postAPIValues  ', postAPIValues);

    return await serverConnectAPI.post(apiEndpoint, restParams);
};

// const doccumentUpload = async (doccumentUploadValues: any): Promise<AxiosResponse<any>> => {
//     var formData = new FormData();
// 	for (const doccValues in doccumentUploadValues) {
// 		formData.append(doccValues, doccumentUploadValues[doccValues]);
// 	}

//     return await serverConnectAPI.post(apiEndpoints.doccumentUpload, formData);
// };

const apiPost = {
    postAPI,
};

export default apiPost;
