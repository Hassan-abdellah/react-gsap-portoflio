const BrowserToolbar = () => {
  return (
    <div className="bg-[#F3F2F2] rounded-t-2xl h-4 pl-3 flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-red-500" />
      <span className="w-2 h-2 rounded-full bg-green-500" />
      <span className="w-2 h-2 rounded-full bg-white" />
    </div>
  );
};

export default BrowserToolbar;
