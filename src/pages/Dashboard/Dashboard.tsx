import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import DashboardContent from "../../components/Dashboard/DashboardContent";
import { fetchUserInfo } from "../../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector(state => state.auth);
  useEffect(() => {
  if (token) {
    dispatch(fetchUserInfo());
  }
}, [token, dispatch]);


  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
