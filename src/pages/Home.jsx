import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="home bg-white rounded-xl shadow-lg grid grid-cols-3 min-w-[80vw] min-h-[80vh] overflow-hidden">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
