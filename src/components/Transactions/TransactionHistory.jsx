import clsx from "clsx";
import css from "./TransactionHistory.module.css";
import Transaction from "./Transaction";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={clsx(css["table"])}>
      <thead>
        <tr>
          <th className={clsx(css["table-cell"])}>Type</th>
          <th className={clsx(css["table-cell"])}>Amount</th>
          <th className={clsx(css["table-cell"])}>Currency</th>
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
