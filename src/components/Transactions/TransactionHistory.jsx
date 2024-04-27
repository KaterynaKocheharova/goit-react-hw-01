import css from "./TransactionHistory.module.css";
import Transaction from "../Transaction/Transaction";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css["table"]}>
      <thead>
        <tr>
          <th className={css["table-cell"]}>Type</th>
          <th className={css["table-cell"]}>Amount</th>
          <th className={css["table-cell"]}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
}
