import { DashboardLayout } from "../../ui/Layout/Dashboard";
import Menu from "./Menu";
import CardDetails from "./CardDetails";
import BillingTable from "./BillingTable";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 overflow-hidden py-6">
        <div>
          <h2 className="mb-1 text-3xl text-gray-700 ">Settings</h2>
          <p className="text-gray-500 font-light">
            Manage your team and preferences here.
          </p>
        </div>
        <Menu />
        <CardDetails />
        <BillingTable />
      </div>
    </DashboardLayout>
  );
};
export default Index;
