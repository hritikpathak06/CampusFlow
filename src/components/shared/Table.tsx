import React from "react";

interface ColumnTypes {
  header: string;
  accessor: string;
  className?: string;
}

interface TableProps {
  columns: ColumnTypes[];
  renderRow: (item: any) => any;
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, renderRow, data }) => {
  return (
    <>
      <table className=" w-full mt-4">
        <thead>
          <tr className=" text-left text-gray-600 text-sm">
            {columns.map((col, idx) => {
              return <th key={idx}>{col.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>{data.map((item: any) => renderRow(item))}</tbody>
      </table>
    </>
  );
};

export default Table;
