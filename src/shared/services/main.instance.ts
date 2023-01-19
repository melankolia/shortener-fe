import axios from "axios";

import type {
  ResponseType,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

import type { MainInstanceTypes } from "@/shared/types/instance/main";

const instance = axios.create({
  baseURL: "https://cawaproject.site/api/",
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error)
);

const MainInstance: MainInstanceTypes = {
  async query(
    resource: string,
    params: Record<string, unknown> | undefined
  ): Promise<AxiosResponse> {
    return instance.get(resource, params);
  },
  async download(
    resource: string,
    params: Record<string, unknown> | undefined,
    type: ResponseType
  ): Promise<AxiosResponse> {
    return instance.get(resource, { params, responseType: type });
  },
  async fetch(
    resource: string,
    slug = "",
    params: Record<string, unknown> | undefined
  ): Promise<AxiosResponse> {
    return instance.get(`${resource}/${slug}`, params);
  },
  async post(
    resource: string,
    params: Record<string, unknown> | undefined,
    config: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse> {
    return instance.post(`${resource}`, params, config);
  },
  async create(
    resource: string,
    slug = "",
    params: Record<string, unknown> | undefined,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return instance.post(`${resource}/${slug}`, params, config);
  },
  async update(
    resource: string,
    slug: string,
    params: Record<string, unknown> | undefined
  ): Promise<AxiosResponse> {
    return instance.put(`${resource}/${slug}`, params);
  },
  async put(
    resource: string,
    params: Record<string, unknown> | undefined,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return instance.put(`${resource}`, params, config);
  },
  async delete(
    resource: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return instance.delete(resource, config);
  },
  async deleteSlug(
    resource: string,
    slug: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return instance.delete(`${resource}/${slug}`, config);
  },
};

export default MainInstance;
