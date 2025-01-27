export type ResponseType<T> = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: T[];
};
