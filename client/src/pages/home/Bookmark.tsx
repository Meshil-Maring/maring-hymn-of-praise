import Back from "../../assets/icons/back";
import BookmarkList from "../../component/nav/header/BookmarkList";

const Bookmark = ({ bookmark }: any) => {
  return (
    <div className="bg-bg-light h-full w-full absolute top-0 right-0 z-30 text-yellow">
      <nav className="bg-white flex items-center p-3">
        <button onClick={() => bookmark()}>
          <Back fill="black" />
        </button>
        <p className="text-center w-full text-active">My Bookmark</p>
        <p className="text-transparent font-black">.</p>
      </nav>

      <div className="p-3">
        <BookmarkList />
      </div>
    </div>
  );
};

export default Bookmark;
