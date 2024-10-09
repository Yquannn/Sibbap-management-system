import { Outlet } from "react-router-dom";
import ContentLayout from "./ContentLayout";
import SideBar from "../shared/components/partials/Sidebar";
const RootLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1">
        <ContentLayout>
          <Outlet /> {/* Routed content will be rendered here */}
        </ContentLayout>
      </div>
    </div>
  );
}

export default RootLayout;
