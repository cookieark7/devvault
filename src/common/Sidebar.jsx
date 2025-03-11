import {
  Code,
  Terminal,
  MessageSquare,
  Bookmark,
  ChevronRight,
  AlignJustify,
  Settings,
  CircleHelp
} from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 top-0 left-0  bg-violet-200 h-screen ">
        <div className="flex justify-center px-1 py-1">
          <span className="flex flex-col ">
            <p className="px-2">Devvault</p>
            <span className="flex ">
              <p className="px-2">Smart Content Manager</p>
              <AlignJustify />
            </span>
          </span>
        </div>
        <ul className="space-y-2 mt-16">
          <li className="flex gap-4 px-2 py-1.5 hover:bg-blue-400 hover:border-white cursor-pointer hover:rounded-l-lg ">
            <MessageSquare />
            <h3>Dashboard</h3>
          </li>
          <li className="flex gap-4 px-2 py-1.5 hover:bg-blue-400 hover:border-white cursor-pointer hover:rounded-l-lg ">
            <Code />
            <h3>Snippets</h3>
          </li>
          <li className="flex gap-4 px-2 py-1.5 hover:bg-blue-400 hover:border-white cursor-pointer hover:rounded-l-lg ">
            <Terminal />
            <h3>Commands</h3>
          </li>
          <li className="flex gap-4 px-2 py-1.5 hover:bg-blue-400 hover:border-white cursor-pointer hover:rounded-l-lg ">
            <MessageSquare />
            <h3>Prompts</h3>
          </li>
          <li className="flex gap-4 px-2 py-1.5 hover:bg-blue-400 hover:border-white cursor-pointer hover:rounded-l-lg ">
            <Bookmark />
            <h3>Bookmarks</h3>
          </li>
        </ul>
        <ul className="space-y-2 mt-16">
        <li className="flex gap-4 px-2 py-1.5 hover:bg-blue-400 hover:border-white cursor-pointer hover:rounded-l-lg ">
            <Settings />
            <h3>Prompts</h3>
          </li>
          <li className="flex gap-4 px-2 py-1.5 hover:bg-blue-400 hover:border-white cursor-pointer hover:rounded-l-lg ">
            <CircleHelp />
            <h3>Bookmarks</h3>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
