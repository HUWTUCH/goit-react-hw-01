import transactionHistoryStyle from "./TransactionHistory.module.css"
const TransactionHistory = ({items}) => {
    return (
        <table className={transactionHistoryStyle.table}>
            <thead>
            <tr>
                <th className={transactionHistoryStyle.head}>Type</th>
                <th className={transactionHistoryStyle.head}>Amount</th>
                <th className={transactionHistoryStyle.head}>Currency</th>
            </tr>
            </thead>

            <tbody>
            {items.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
export default TransactionHistory;