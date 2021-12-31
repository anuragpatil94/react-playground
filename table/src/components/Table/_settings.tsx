import React, { useState } from 'react';
import { ICustomize, DefTableSettingsObj } from './_extras';

export default function Customize({ fnApplySettings }: ICustomize) {
  const [settings, setSettings] = useState(DefTableSettingsObj);

  function fnOnChangeInputText(event: React.ChangeEvent<HTMLInputElement>) {
    setSettings((previousSettings) => ({
      ...previousSettings,
      [event.target.name]: event.target.valueAsNumber || 0,
    }));
  }

  function fnOnClickApply() {
    fnApplySettings(settings);
  }

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex gap-2 ">
        <label htmlFor="rows">Rows</label>
        <input
          type="number"
          id="rows"
          name="rows"
          className="flex-grow px-2 py-1 rounded-sm"
          onChange={fnOnChangeInputText}
        />
      </div>
      <div className="flex gap-2 ">
        <label htmlFor="cols">Columns</label>
        <input
          type="number"
          id="cols"
          name="columns"
          className="flex-grow px-2 py-1 rounded-sm"
          onChange={fnOnChangeInputText}
        />
      </div>

      <button className="p-1 bg-green-600 rounded-md" onClick={fnOnClickApply}>
        Apply
      </button>
    </div>
  );
}
