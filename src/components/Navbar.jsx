const Navbar = () => {
  return (
    <div className="navbar flex items-center bg-sky-800 p-5 text-sky-100 justify-between">
      <span className="logo text-2xl font-medium text-sky-300">Chat Drip</span>
      <div className="user flex gap-3 items-center">
        <div className="img w-10 h-10 overflow-hidden rounded-full flex items-center justify-center border-2 border-sky-300">
          <img
            src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full block"
          />
        </div>
        <span className="name">Natasha</span>
        <button className="bg-sky-300 text-sky-900 font-medium py-1 px-3 rounded hover:bg-sky-400 duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
