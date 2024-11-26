import siteData from "../constants/site_data";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoMdBookmarks } from "react-icons/io";
import { useContext } from "react";
import { GlobalContext } from "../services/context";
const Header = () => {
  const { navigation } = siteData;
  const {
    state: { bookmarkList },
  } = useContext(GlobalContext);

  return (
    <header className=" flex flex-col">
      <div className="bg-black text-white flex items-center justify-between min-h-20 px-10 w-full">
        <div>LET&rsquo;SREAD</div>
        <nav>
          <ul type="none" className="flex gap-4">
            {navigation.map((item, index) => (
              <li key={index + 1}>{item.label}</li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <div className="bookmarks">
            {bookmarkList.length > 0 ? (
              <span>{bookmarkList.length}</span>
            ) : null}
            <IoMdBookmarks color="white" size={40} />
          </div>
          <button className="bg-orange-600 text-white p-4 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
      <div className="items-center px-10 min-h-20 border-b-2 flex justify-between">
        <div className="w-max h-max p-1 rounded bg-black">
          <HiOutlineMenu color="white" />
        </div>
        <p>Sign Up for Our Paris Olympics Newsletter</p>
        <div className="w-max h-max border-2 border-black/75 p-1 rounded">
          <FiSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
