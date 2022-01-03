interface ITable {
  settings: ITableSettings;
  data?: ITableData;
  configs?: ITableConfigs[];
}

interface ITableSettings {
  rows: number;
  columns: number;
  headers?: boolean;
  wordwrap?: boolean;
}

interface ITableData {
  headers?: ITableDataHeader[];
  rows?: ITableDataRow[];
}

interface ITableConfigs {
  orderNumber: number;
  wordwrap?: boolean;
}

interface ITableDataHeader {
  orderNumber: number;
  title?: string;
}

interface ITableDataRow {}

interface ICustomize {
  fnApplySettings: (settings: ITableSettings) => void;
}

export type { ITable, ITableConfigs, ITableSettings, ICustomize };

export const DefTableDataObj: ITableData = {
  headers: [],
  rows: [],
};

// Default Table Settings
export const DefTableSettingsObj: ITableSettings = {
  rows: 0,
  columns: 0,
  headers: true,
  wordwrap: false,
};

export const DefTableConfigObj: ITableConfigs = {
  orderNumber: -1,
  wordwrap: true,
};

export const DefTableHeaderObj: ITableDataHeader = {
  orderNumber: -1,
};
