import clsx from "clsx";
import css from "./TransactionHistory.module.css";

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
        {transactions.map(({ id, type, amount, currency }) => {
          let rowClass;
          switch (type) {
            case "payment":
              rowClass = css["payment-row"];
              break;
            case "withdrawal":
              rowClass = css["withdrawal-row"];
              break;
            default:
              rowClass = css["invoice-row"];
          }

          return (
            <tr className={clsx(rowClass)} key={id}>
              <td className={clsx(css["table-cell"])}>{type}</td>
              <td className={clsx(css["table-cell"])}>{amount}</td>
              <td className={clsx(css["table-cell"])}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
