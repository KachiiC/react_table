import React from 'react'

const SiteTable = (props) => {

    const inputData = props.data
    const columns = props.columns

    const displayColumns = columns.map((column, index) => {
        const columnTitle = column.split("_").join(" ")

        return (
            <th key={index}>{columnTitle}</th>
        )
    })

    const displayData = inputData.map((data, index) => {
        const singleColumn = columns.map((column, index) => (
            <td key={index}>{data[`${column}`]}</td>
        ))
        return (
            <tr key={index}>
                {singleColumn}
            </tr>
        )

    })

    return (
        <table>
            <tr>
                {displayColumns}
            </tr>
            {displayData}
        </table>
        
    )
}

export default SiteTable