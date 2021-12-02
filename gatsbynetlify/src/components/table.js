import React from "react"
const Table = ({ ...props }) => {
    const headers = props.headers.map((header) => {
        <th>{header}</th>
    });
        return (
            <div className="table">
                <table>
                    {headers}
                </table>
            </div>
        );
    }

export default Table;