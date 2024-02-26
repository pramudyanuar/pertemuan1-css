const Header = ({ text, count, deleteStatus }) => {

  return (
    <div className="bg-slate-500 flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white">
      {text}{" "}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {" "}
        {count}{" "}
      </div>
      <button className="ml-auto mr-4" onClick={() => deleteStatus(text)}>🗑️</button>
    </div>
  );
};

export default Header;