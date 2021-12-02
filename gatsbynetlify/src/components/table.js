import React from "react"
const Table = ({ headers, data, ...props }) => {
    const listHeaders = headers.map((header) => {
        <th>{header}</th>
    });
        return (
            <div className="table">
                <table>
                    {listHeaders}
                </table>
            </div>
        );
    }

export default Table;