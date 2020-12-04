import React from 'react'

const SiteTable = (props) => {

    const inputData = props.data
    const columns = props.columns

    const displayColumns = columns.map((column, index) => <td key={index}>{column}</td>)

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
        <div>
            <tr>
                {displayColumns}
            </tr>
            {displayData}
        </div>
        
    )
}

export default SiteTable