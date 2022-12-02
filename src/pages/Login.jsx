const Login = () => {
  return (
    <div className="form-wrapper flex flex-col gap-5 bg-white p-16 rounded-xl shadow-lg text-center">
      <div className="header flex flex-col gap-2">
        <span className="logo text-4xl font-semibold text-sky-400">
          Chat Drip
        </span>
        <span className="title text-xl font-medium">Login</span>
      </div>
      <form className="flex flex-col gap-3">
        <input
          required
          type="email"
          placeholder="email"
          className="border-b-2 p-2 outline-none border-gray-200 focus:border-sky-400 duration-300 bg-transparent"
        />
        <input
          required
          type="password"
          placeholder="password"
          className="border-b-2 p-2 outline-none border-gray-200 focus:border-sky-400 duration-300 bg-transparent"
        />
        <button
          type="submit"
          className="bg-sky-400 p-2 rounded-md text-sky-50 hover:bg-sky-500 duration-300 text-xl mt-5"
        >
          Sign in
        </button>
      </form>
      <p>Don't have an account? Register</p>
    </div>
  );
};

export default Login;
