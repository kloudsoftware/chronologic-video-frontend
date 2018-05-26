import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import Auth from './auth';

enum Method {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
    OPTIONS,
    HEAD
}

export default class Http {
    private url: string;
    private method: Method;
    private header: Map<string, string>;
    private data: any;

    constructor(url: string, method: Method) {
        this.url = url;
        this.method = method;
        this.header = new Map<string, string>();
    }

    public static get(url: string): Http {
        return new Http(url, Method.GET);
    }

    public static post(url: string): Http {
        return new Http(url, Method.POST);
    }

    public static put(url: string): Http {
        return new Http(url, Method.PUT);
    }

    public static patch(url: string): Http {
        return new Http(url, Method.PATCH);
    }

    public static delete(url: string): Http {
        return new Http(url, Method.DELETE);
    }

    public addHeader(key: string, value: string): Http {
        this.header.set(key, value);
        return this;
    }

    public addData(data: any): Http {
        this.data = data;
        return this;
    }

    public async fetch(): Promise<AxiosResponse> {
        const key = Auth.getKey();
        this.header.set("Authorization", `Bearer ${key}`);

        const config: AxiosRequestConfig = {
            url: this.getBaseURL() + this.url,
            method: this.stringifyMethod(),
            headers: this.mapHeaders(),
        };

        if (this.method !== Method.GET) {
            config.data = this.data;
        }

        try {
            return await Axios(config);
        } catch (e) {
            return await Axios(config);
        }
    }

    private mapHeaders(): any {
        let headerObject: any = {};

        this.header.forEach((value, key) => headerObject[key] = value);

        return headerObject;
    }

    private stringifyMethod(): string {
        switch (this.method) {
            case Method.POST:
                return "POST";
            case Method.PUT:
                return "PUT";
            case Method.PATCH:
                return "PATCH";
            case Method.DELETE:
                return "DELETE";
            default:
                return "GET";
        }
    }

    private getBaseURL(): string {
        return "http://localhost:8080/";
    }
}
