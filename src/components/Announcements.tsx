const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-(--lama-sky-light) rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              01-01-2026
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            necessitatibus at officiis dicta illum totam quisquam voluptates?
          </p>
        </div>

        <div className="bg-(--lama-purple-light) rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              01-01-2026
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            necessitatibus at officiis dicta illum totam quisquam voluptates?
          </p>
        </div>

        <div className="bg-(--lama-yellow-light) rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              01-01-2026
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            necessitatibus at officiis dicta illum totam quisquam voluptates?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
