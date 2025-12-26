
import { CardsDashBoard } from "../components/CardsDashBoard";
import { OrdesRecentDashBoard } from "../components/OrdesRecentDashBoard";

export const DashBoardPage = () => {
  return (
    <main className="w-full max-h-screen space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-neutral-900/60">Resumen general de tu tienda</p>
      </header>
      <CardsDashBoard />
      <OrdesRecentDashBoard />
      
    </main>
  );
};
