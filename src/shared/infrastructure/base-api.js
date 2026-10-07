import axios from "axios";
import {iamInterceptor} from "@/iam/infrastructure/iam.interceptor.js";

const platformApi = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

export class BaseApi {
    /**
     * @private
     * Axios HTTP client instance for making API requests.
     * @type {import('axios').AxiosInstance}
     */
    #http;

    constructor() {
        this.#http = axios.create({
            baseURL: platformApi,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
        // Add the IAM interceptor to the Axios instance
        // this.#http.interceptors.request.use(iamInterceptor);
    }

    get http() {
        return this.#http;
    }

}