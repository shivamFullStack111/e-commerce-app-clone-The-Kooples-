import Cookies from 'js-cookie'

const SettingsPage = () => {
  const handleLogout = () => {
    Cookies.remove('LOGIN_TOKEN')
    window.location.reload()
  };

  

  return (
    <div className="container mx-auto mt-8 max-w-2xl p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleLogout}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
