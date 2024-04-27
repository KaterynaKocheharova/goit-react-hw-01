import clsx from "clsx";
import css from "./Transaction.module.css";

export default function Transaction({
  transaction: { type, amount, currency },
}) {
  return (
    <tr
      className={clsx({
        [css["payment-row"]]: type === "payment",
        [css["withdrawal-row"]]: type === "withdrawal",
        [css["invoice-row"]]: type === "invoice",
      })}
    >
      <td className={css["table-cell"]}>{type}</td>
      <td className={css["table-cell"]}>{amount}</td>
      <td className={css["table-cell"]}>{currency}</td>
    </tr>
  );
}
