import { Icon } from "@iconify/react";
import { cardStatisticsData } from "../data/CardStatistics";

export const CardsDashBoard = () => {
  const cards = cardStatisticsData;

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, key) => (
        <div
          key={key}
          className="flex flex-col justify-between h-40 shadow-xl border border-slate-200 rounded-md p-4"
        >
          <div className="flex items-center justify-between text-neutral-500">
            <h2>{card.name}</h2>
            <Icon icon={card.icon} width="24" height="24" />
          </div>
          <div>
            <p className="text-2xl font-semibold">{card.amount}</p>
            <p className="text-sm text-neutral-900/60">{card.description}</p>

            <p
              className={`${
                card.status ? "text-green-500" : "text-red-500"
              } flex items-center`}
            >
              {card.status ? (
                <span className="flex">
                  <Icon icon="solar:arrow-up-linear" width="20" height="20" />+
                </span>
              ) : (
                <span className="flex">
                  <Icon icon="solar:arrow-down-linear" width="20" height="20" />
                  -
                </span>
              )}
              {card.value}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
