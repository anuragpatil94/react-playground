import React, { useState } from 'react';
import {
  Customize,
  DefTableConfigObj,
  DefTableDataObj,
  DefTableHeaderObj,
  DefTableSettingsObj,
  ITableSettings,
  ITableConfigs,
  Table,
} from './Table';

function Home() {
  const [configs, setConfigs] = useState<ITableConfigs[]>();
  const [data, setData] = useState(DefTableDataObj);
  const [settings, setSettings] = useState(DefTableSettingsObj);

  const fnApplySettings = (updatedSettings: ITableSettings) => {
    const configSettings = { ...settings, ...updatedSettings };
    if (configSettings.columns) {
      setConfigs((previousData) => {
        let newConfigs = previousData;
        for (let column = 0; column < configSettings.columns; column++) {
          newConfigs?.push({
            ...DefTableConfigObj,
            orderNumber: column + 1,
          });
        }
        return newConfigs;
      });
    }

    if (configSettings.headers) {
      setData((previousData) => {
        let generatedData = { ...previousData };
        for (let column = 0; column < configSettings.columns; column++) {
          generatedData?.headers?.push({
            ...DefTableHeaderObj,
            orderNumber: column + 1,
          });
        }
        return generatedData;
      });
    }

    setSettings((previousSettings) => ({
      ...previousSettings,
      ...configSettings,
    }));
  };
  //FIXME Configs undefined
  console.log(configs, data, settings);

  return (
    <div className="flex flex-col h-screen gap-2 p-2">
      <div className="flex justify-center leading-8 align-middle bg-orange-400 rounded-md">
        Table
      </div>
      <div className="flex items-stretch flex-1 gap-2 ">
        <div className="flex flex-col justify-center w-2/3 p-2 align-middle bg-gray-200 rounded-md">
          <div className="h-8 text-center align-middle">Playground</div>
          <div className="flex items-start justify-start flex-1 p-4 overflow-x-auto border border-gray-700 rounded-md">
            <Table configs={configs} data={data} settings={settings} />
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/3 p-2 align-middle rounded-md bg-zinc-200">
          <div className="h-8 text-center align-middle">Settings</div>
          <div className="flex-1 flex-grow border border-gray-700 rounded-md">
            <Customize fnApplySettings={fnApplySettings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
