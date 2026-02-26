export default function CommonTable({ columns, data, renderActions }) {
    return (
        <table border="1" cellPadding="10" cellSpacing="5">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                    {renderActions && <th>Action</th>}
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td
                            colSpan={columns.length + (renderActions ? 1 : 0)}
                            style={{ textAlign: "center" }}
                        >
                            No data found
                        </td>
                    </tr>
                ) : (
                    data.map((row, index) => (
                        <tr key={row._id || index}>
                            {columns.map((col) => (
                                <td key={col.key}>
                                    {col.render
                                        ? col.render(row, index)
                                        : row[col.key]}
                                </td>
                            ))}
                            {renderActions && (
                                <td>{renderActions(row)}</td>
                            )}
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}