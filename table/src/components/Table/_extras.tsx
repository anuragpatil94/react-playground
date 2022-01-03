interface ITable {
  settings: ITableSettings;
}

interface ITableSettings {
  rows: number;
  columns: number;
  headers?: boolean;
  data?: ITableData;
}

interface ITableData {
  headers?: ITableDataHeader[];
  rows?: ITableDataRow[];
}

interface ITableDataHeader {
  orderNumber: number;
  title: string;
}

interface ITableDataRow {}

interface ICustomize {
  fnApplySettings: (settings: ITableSettings) => void;
}

export type { ITable, ITableSettings, ICustomize };

// Default Table Settings
export const DefTableSettingsObj: ITableSettings = {
  rows: 0,
  columns: 0,
  headers: true,
  data: {},
};
