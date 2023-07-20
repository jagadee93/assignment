
const TableComponent = ({ data }) => {
    return (
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Year</th>
                        <th>Total Medals</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Id}</td>
                            <td>{item.Year}</td>
                            <td>{item.Medals || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
