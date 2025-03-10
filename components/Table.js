import React from 'react'

const Table = ({children}) => {
  return (
<div className="col-span-1">
            <table className="w-full border-3 text-sm text-lefttext-gray-400">
                <thead className="text-sm text-white uppercase bg-gray-600">
                    <tr>
                    <th scope="col" className="font-bold text-center text-lg px-6 py-1">
                            ANALYSIS DETAIL RESULT
                        </th>
                        <th scope="col" className="font-bold text-center text-lg px-6 py-1">
                            ERGONOMIC ADVICED
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
        
  )
}

export default Table
