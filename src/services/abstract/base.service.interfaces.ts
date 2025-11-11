export interface IFindAll<T> {
  rows: T[];
  count: number;
}

export interface IBaseModel {
  id: number;
}

export interface IAuditableNotSoftDelete extends IBaseModel {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IAuditableModel extends IBaseModel {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export interface IBaseService<TResult, TCreate> {
  getAll(params?: Record<string, any>): Promise<IFindAll<TResult>>;
  getOne(id: number): Promise<TResult>;
  create(data: TCreate): Promise<TResult>;
  update(id: number, data: Partial<TCreate>): Promise<TResult>;
  delete(id: number): Promise<number>;
}
