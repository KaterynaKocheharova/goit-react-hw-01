import clsx from "clsx";
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
    <tr className={clsx(rowClass)}>
      <td className={clsx(css["table-cell"])}>{type}</td>
      <td className={clsx(css["table-cell"])}>{amount}</td>
      <td className={clsx(css["table-cell"])}>{currency}</td>
    </tr>
  );
}
