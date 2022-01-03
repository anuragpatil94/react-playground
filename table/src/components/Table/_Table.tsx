import React from 'react';
import { ITable } from '.';

function Table({ configs, data, settings }: ITable) {
  // TODO: if configs are not passed get default configs for each column
  console.log(configs, data, settings);

  function fnSetHeader() {
    let headers = [];

    if (configs) {
      configs.sort((a, b) => (a.orderNumber < b.orderNumber ? -1 : 1));
    }
    if (data?.headers) {
      data?.headers.sort((a, b) => (a.orderNumber < b.orderNumber ? -1 : 1));
    }

    for (let column = 0; column < settings.columns; column++) {
      headers.push(
        <th
          className={`border border-black ${'whitespace-nowrap'}`}
          key={`header-${column}`}
        >{`header-${column + 1}`}</th>
      );
    }
    return <tr>{headers}</tr>;
  }

  function fnSetBody() {
    let rows = [];
    for (let row = 0; row < settings.rows; row++) {
      let columns = [];
      for (let column = 0; column < settings.columns; column++) {
        columns.push(
          <td className="border border-black" key={`column-${column}`}>
            Row-{row + 1}:Column-{column + 1}
          </td>
        );
      }
      rows.push(<tr key={`row-${row}`}>{columns}</tr>);
    }
    return rows;
  }

  return (
    <table>
      {settings.headers && <thead>{fnSetHeader()}</thead>}
      {!!settings.rows && !!settings.columns && <tbody>{fnSetBody()}</tbody>}
    </table>
  );
}

export default Table;
