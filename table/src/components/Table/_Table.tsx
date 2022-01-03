import React from 'react';
import { ITable } from './_extras';

function Table({ settings }: ITable) {
  let headers = [];
  for (let column = 0; column < settings.columns; column++) {
    headers.push(
      <th className="border border-black" key={`header-${column}`}>{`header-${
        column + 1
      }`}</th>
    );
  }

  let rows = [];
  for (let row = 0; row < settings.rows; row++) {
    let columns = [];
    for (let column = 0; column < settings.columns; column++) {
      columns.push(
        <td className="border border-black" key={`column-${column}`}>
          {row}:{column}
        </td>
      );
    }
    rows.push(<tr key={`row-${row}`}>{columns}</tr>);
  }

  return (
    <table>
      {settings.headers && <thead>{headers}</thead>}
      {!!settings.rows && !!settings.columns && <tbody>{rows}</tbody>}
    </table>
  );
}

export default Table;
