import { useAppSelector } from "../../store/hooks";

const DashboardContent = () => {
  const { userInfo, loading } = useAppSelector(state => state.user);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">User Info</h2>
        {loading ? (
          <p>Loading...</p>
        ) : userInfo ? (
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Name:</strong> {userInfo.name}</li>
            <li><strong>Email:</strong> {userInfo.email}</li>
            <li><strong>Status:</strong> {userInfo.status}</li>
            <li><strong>Role:</strong> {userInfo.roles.join(', ')}</li>
            <li><strong>Referral:</strong> {userInfo.referral}</li>
          </ul>
        ) : (
          <p>No user data found.</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">Widget 2</div>
      <div className="bg-white p-6 rounded-lg shadow">Widget 3</div>
      <div className="bg-white p-6 rounded-lg shadow">Widget 4</div>
    </div>
  );
};

export default DashboardContent;
