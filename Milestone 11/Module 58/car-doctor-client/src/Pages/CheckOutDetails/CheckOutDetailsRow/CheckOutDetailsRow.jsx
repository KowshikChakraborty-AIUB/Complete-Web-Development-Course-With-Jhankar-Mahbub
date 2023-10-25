const CheckOutDetailsRow = ({ details }) => {

    const { customerName, email, date, title, dueAmount, img } = details;

    return (
        < tr >
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{customerName}</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{title}</td>
            <td>{dueAmount}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr >
    );
};

export default CheckOutDetailsRow;