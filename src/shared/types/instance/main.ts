import type { AxiosResponse, AxiosRequestConfig, ResponseType } from "axios";

export type MainInstanceTypes = {
  query(
    resource: string,
    params: Record<string, unknown> | undefined
  ): Promise<AxiosResponse>;
  download(
    resource: string,
    params: Record<string, unknown> | undefined,
    type: ResponseType
  ): Promise<AxiosResponse>;
  fetch(
    resource: string,
    slug: string,
    params: Record<string, unknown>
  ): Promise<AxiosResponse>;
  post(
    resource: string,
    params: Record<string, unknown> | undefined,
    config: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse>;
  create(
    resource: string,
    slug: string,
    params: Record<string, unknown> | undefined,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse>;
  update(
    resource: string,
    slug: string,
    params: Record<string, unknown> | undefined
  ): Promise<AxiosResponse>;
  put(
    resource: string,
    params: Record<string, unknown> | undefined,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse>;
  delete(resource: string, config: AxiosRequestConfig): Promise<AxiosResponse>;
  deleteSlug(
    resource: string,
    slug: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse>;
};
