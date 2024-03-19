import axios from "axios";

// const baseUrl = process.env.VUE_APP_API;
const baseUrl = 'https://huynhminhchi-fullstack-js-intern-be.onrender.com/api/v1';

const config = {
    address: baseUrl,
    port: "",
    basePath: "",
    axiosConfig: {
        baseURL: baseUrl,
        headers: {},
        withCredentials: false,
        crossDomain: true,
        timeout: 60000,
    },
    getEndpointUrl() {
        return this.address + (this.basePath ? this.basePath : "");
    },
};

const $http = axios.create(config.axiosConfig);

const sendPostOnce = async (url: string, payload: object, headers = null) => {
    try {
        const response = await $http.post(url, payload, { timeout: 600000 });
        return response;
    } catch (e: any) {
        if (e.response) {
            return e.response;
        } else if (e.toString().includes("Network Error")) {
            return "NETWORK_ERROR";
        } else {
            return null;
        }
    }
};

const sendDeleteOnce = async (url: string, payload: object, headers = null) => {
    try {
        const response = await $http.delete(url, {data: payload});
        return response;
    } catch (e: any) {
        if (e.response) {
            return e.response;
        } else if (e.toString().includes("Network Error")) {
            return "NETWORK_ERROR";
        } else {
            return null;
        }
    }
};

const sendPutOnce = async (url: string, payload: object, headers = null) => {
    try {
        const response = await $http.put(url, payload, { timeout: 600000 });
        return response;
    } catch (e: any) {
        if (e.response) {
            return e.response;
        } else if (e.toString().includes("Network Error")) {
            return "NETWORK_ERROR";
        } else {
            return null;
        }
    }
};

const sendGetOnce = async (url: string, params = {}, headers = null) => {
    try {
        const response = await $http.get(url, { params, timeout: 600000 });
        return response;
    } catch (e: any) {
        if (e.response) {
            return e.response;
        } else if (e.toString().includes("Network Error")) {
            return "NETWORK_ERROR";
        } else {
            return null;
        }
    }
};

export {
sendPostOnce,
sendGetOnce,
sendPutOnce,
sendDeleteOnce,
};
