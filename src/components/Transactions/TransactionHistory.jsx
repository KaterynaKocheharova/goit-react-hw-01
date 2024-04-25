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
          return (
            <tr key={id}>
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

// <table>
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table>;
