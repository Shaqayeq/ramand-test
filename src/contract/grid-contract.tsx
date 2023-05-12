export interface ResponseDataModel {
  data:GridDataModel[],
  total: number,
}

export interface GridDataModel {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
}

export interface PropsMethodModel {
  searchTerm: string;
  pageNo: number;
  pageSize: number;
}