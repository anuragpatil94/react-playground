import React from 'react';

interface ITableSettingsProps {
  applySettings: () => void;
}

export default function TableSettings({ applySettings }: ITableSettingsProps) {
  function fnCreateTable() {}
  return (
    <div className="flex flex-col gap-2 p-2">
      <button className="p-1 bg-green-600 rounded-md" onClick={fnCreateTable}>
        Create Table
      </button>
      <div className="flex gap-2 ">
        <label htmlFor="rows">Rows</label>
        <input type="text" id="rows" className="flex-grow rounded-sm" />
      </div>
      <div className="flex gap-2 ">
        <label htmlFor="cols">Columns</label>
        <input type="text" id="cols" className="flex-grow rounded-sm" />
      </div>

      <button className="p-1 bg-green-600 rounded-md" onClick={applySettings}>
        Apply
      </button>
    </div>
  );
}
