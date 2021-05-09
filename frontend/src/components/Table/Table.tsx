import React from 'react';

interface TableProps {
  colHeaders: string[];
  tableData: string[] | undefined;
}

export const Table: React.FC<TableProps> = ({ colHeaders, tableData }) => {
  const data = tableData?.map((row, index) => {
    let rowData: { key: string; val: string | number }[] = [];

    Object.entries(row).forEach((data, i) => {
      rowData.push({
        key: colHeaders[i],
        val: data[1],
      });
    });

    return (
      <tr key={index}>
        {rowData.map((data, index) => (
          <td
            className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'
            key={index}
            data-heading={data.key}
          >
            {data.val}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className='flex flex-col overflow-x-auto'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  {colHeaders?.map((col: any, index: number) => (
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      key={index}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {data}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
