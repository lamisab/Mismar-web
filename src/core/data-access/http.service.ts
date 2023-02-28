import axiosObject from "../configs/axios.config";
import { HttpMethods } from "../enums/httpMethods.enum";

export const baseURL = process.env.REACT_APP_BACKEND_URL;
export const safcspURL = process.env.REACT_APP_SAFCSP_USERS_SERVICES_LINK;
export const coderHubURL = process.env.REACT_APP_CODUURHUB_BACKEND_URL;

export type MakeRequest = {
	url: string;
	method: HttpMethods;
	data?: Object | undefined;
	params?: Object | undefined;
};

export const makeRequest = async (req: MakeRequest) => {
	const { url, method, data, params } = req;
	return axiosObject({
		url,
		method,
		data,
		params,
	}).then((res) => {
		return res.data;
	});
};
