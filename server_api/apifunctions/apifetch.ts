import { AxiosResponse } from "axios";

import serverConnectAPI from "@/server_api/config/server-connect-api";
import { apiEndpoints } from "@/server_api/config/api.endpoints";


const fetchAPIData = async (params = {} as any): Promise<AxiosResponse> => {
    const { apiEndpoint, ...restParams } = params;

    return await serverConnectAPI.get(apiEndpoint, { params: restParams });
};
const general = {
    fetchAPIData,
};

export default general;

