interface ITable {
  settings: ITableSettings;
}

interface ITableSettings {
  rows: number;
  columns: number;
}

interface ICustomize {
  fnApplySettings: (settings: ITableSettings) => void;
}

export type { ITable, ITableSettings, ICustomize };

// Default Table Settings
export const DefTableSettingsObj: ITableSettings = {
  rows: 0,
  columns: 0,
};
