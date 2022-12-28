import { loginUrl, signupUrl } from "./../url/auth";
import instance from "../httpinstance/axios";
import { getAuthToken } from "../../helpers/auth";

export const loginUser = async (url, method, data) => {
    // console.log(url, method, data);
    const token = await getAuthToken();
    return await instance(url, method, data, token);
};
export const signUp = (data) => {
    // return axios.post(signupUrl(), data);
};
