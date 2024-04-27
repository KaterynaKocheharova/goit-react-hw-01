import css from "./Transaction.module.css";

export default function Transaction({
  transaction: { type, amount, currency },
}) {
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
    <tr className={rowClass}>
      <td className={css["table-cell"]}>{type}</td>
      <td className={css["table-cell"]}>{amount}</td>
      <td className={css["table-cell"]}>{currency}</td>
    </tr>
  );
}
