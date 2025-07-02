const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-4">
        <a href="#" className="block text-gray-700 hover:text-purple-600">Home</a>
        <a href="#" className="block text-gray-700 hover:text-purple-600">Profile</a>
        <a href="#" className="block text-gray-700 hover:text-purple-600">Settings</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
