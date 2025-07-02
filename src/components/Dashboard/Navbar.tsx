import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/slices/authSlice';
import { useAppDispatch,useAppSelector } from '../../store/hooks';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userInfo } = useAppSelector(state=> state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">
        Welcome, {userInfo?.name || 'User'}
      </h1>
      <button
        onClick={handleLogout}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
