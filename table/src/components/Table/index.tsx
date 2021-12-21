import React from 'react';

export interface ITableSettings {
  rows: number;
  cols: number;
}

interface ITableProps extends ITableSettings {}

function Table(props: ITableProps) {
  return <div>Table</div>;
}

export default Table;
