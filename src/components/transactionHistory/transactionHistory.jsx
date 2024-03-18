import transactionHistory from "../../data/transactionHistory.json";
import transactionHistoryStyle from "./transactionHistory.module.css"
const TransactionHistory = () => {
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
            {transactionHistory.map(transaction => {
                return (
                    <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
export default TransactionHistory;