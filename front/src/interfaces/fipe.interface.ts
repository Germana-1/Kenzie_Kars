interface IFipeModel {
  name: string;
}

interface IFipeBrand {
  brand: IFipeModel[];
}

export interface IFipeContext {
  getModelList: () => Promise<IFipeBrand>;
}

export interface IFipeContextProps {
  children: React.ReactNode;
}
