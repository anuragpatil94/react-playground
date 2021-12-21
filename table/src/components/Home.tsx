import React, { useState } from 'react';
import { Table, TableSettings } from '.';
import { ITableSettings } from './Table';

function Home() {
  const [settings, setSettings] = useState({});
  const fnApplySettings = (settings: ITableSettings) => {
    console.log(settings);

    setSettings(settings);
  };

  return (
    <div className="flex flex-col h-screen gap-2 p-2">
      <div className="flex justify-center leading-8 align-middle bg-orange-400 rounded-md">
        Table
      </div>
      <div className="flex items-stretch flex-1 gap-2">
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-gray-200 rounded-md">
          <div className="h-8 text-center align-middle">Playground</div>
          <div className="flex-1 flex-grow border border-gray-700 rounded-md">
            <Table settings={settings} />
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/3 p-2 align-middle rounded-md bg-zinc-200">
          <div className="h-8 text-center align-middle">Settings</div>
          <div className="flex-1 flex-grow border border-gray-700 rounded-md">
            <TableSettings applySettings={fnApplySettings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;