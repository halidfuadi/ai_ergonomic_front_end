import React from 'react'

const TableRow = ({name, status_ergo}) => {
    name = name.toUpperCase()

    let status = "";
    let advice = "";
    let color = "text-green-600"

    if (name.includes("ARM") && status_ergo == true) {
        status = "HIGH";
        advice = "LOWER ARM/TOOLS POSITION";
        color = "text-red-500"
    } else if (name.includes("BACKPOSE") && status_ergo == true) {
        status = "LOWER";
        advice = "LEVEL UP WORK POSITION";
        color = "text-red-500"
    } else {
        status = "GOOD";
        advice = "NO NEED ACTION";
    }

  return (
        <tr className="border-b bg-gray-800 border-gray-700">
            <td className="font-bold text-md px-5 py-7 text-gray-300">
                {name} POSITION HAVE {status} POSITION
            </td>
            <td className={`font-bold text-sm px-4 py-1 ${color}`}>
                {advice}
            </td>
        </tr>
  )
}

export default TableRow
