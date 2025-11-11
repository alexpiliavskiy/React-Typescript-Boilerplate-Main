import type { AxiosInstance } from "axios";
import type { IBaseService, IFindAll } from "./base.service.interfaces";

export abstract class BaseService<TResult, TCreate>
  implements IBaseService<TResult, TCreate>
{
  protected axios: AxiosInstance;
  protected path: string;

  protected constructor(axios: AxiosInstance, basePath: string) {
    this.axios = axios;
    this.path = basePath;
  }

  private preprocessData<T extends Record<string, any>>(data: T): T {
    const result: T = { ...data };
    Object.keys(result).forEach((key) => {
      if (result[key] === "") delete result[key];
    });
    return result;
  }

  async getAll(params?: Record<string, any>): Promise<IFindAll<TResult>> {
    const res = await this.axios.get<IFindAll<TResult>>(this.path, { params });
    return res.data;
  }

  async count(params?: Record<string, any>): Promise<Record<string, number>> {
    const res = await this.axios.get<Record<string, number>>(
      this.path + "/count",
      {
        params,
      },
    );
    return res.data;
  }

  async getOne(id: number | string): Promise<TResult> {
    const res = await this.axios.get<TResult>(`${this.path}/${id}`);
    return res.data;
  }

  async create(data: TCreate): Promise<TResult> {
    const moderatedData = this.preprocessData(data as Record<string, any>);
    const res = await this.axios.post<TResult>(this.path, moderatedData);
    return res.data;
  }

  async update(id: number, data: Partial<TCreate>): Promise<TResult> {
    const res = await this.axios.put<TResult>(`${this.path}/${id}`, data);
    return res.data;
  }

  async delete(id: number): Promise<number> {
    const res = await this.axios.delete<{ id: number }>(`${this.path}/${id}`);
    return res.data.id;
  }
}
