import { AxiosResponse } from "axios";

import serverConnectAPI from "@/server_api/config/server-connect-api";
import { apiEndpoints } from "@/server_api/config/api.endpoints";


const fetchAPIData = async (params = {}): Promise<AxiosResponse> => {
    return await serverConnectAPI.get((params as any).apiEndpoint, params);
};

const general = {
    fetchAPIData,
};

export default general;

