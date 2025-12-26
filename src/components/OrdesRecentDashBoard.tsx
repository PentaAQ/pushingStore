import { transactionsData } from "../data/Transactions";

export const OrdesRecentDashBoard = () => {
  const transactions = transactionsData;

  return (
    <section className="p-5 shadow-xl border border-slate-200 rounded-md overflow-hidden">
      <h2 className="text-2xl font-semibold">Órdenes Recientes</h2>
      <p className="text-neutral-900/60">Últimas transacciones realizadas</p>
      {transactions.map((transaction, key) => (
        <div
          key={key}
          className={`flex py-3 border-b border-slate-200 justify-between ${
            key === transactions.length - 1 ? "border-b-0" : ""
          }`}
        >
          <div>
            <h2>#{`${transaction.id.toString().padStart(3, "0")}`}</h2>
            <p>{transaction.name}</p>
          </div>
          <div className="text-right">
            <p>$ {transaction.amount.toFixed(3)}</p>
            <p
              className={`text-sm capitalize ${
                transaction.status === "completado"
                  ? "text-green-500"
                  : transaction.status === "procesando"
                  ? "text-yellow-500"
                  : "text-blue-500"
              }`}
            >
              {transaction.status}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
