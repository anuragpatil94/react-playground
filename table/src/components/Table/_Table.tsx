import React from 'react';
import { ITable } from './_extras';

function Table({ settings }: ITable) {
  let rows = [];
  for (let row = 0; row < settings.rows; row++) {
    let columns = [];
    for (let column = 0; column < settings.columns; column++) {
      columns.push(
        <td style={{ border: '1px solid black' }} key={`column-${column}`}>
          {row}:{column}
        </td>
      );
    }
    rows.push(<tr key={`row-${row}`}>{columns}</tr>);
  }

  return (
    <table>
      {!!settings.rows && !!settings.columns && <tbody>{rows}</tbody>}
    </table>
  );
}

export default Table;
