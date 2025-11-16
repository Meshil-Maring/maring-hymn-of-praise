import Back from "../../assets/icons/back";
import BookmarkList from "../../component/nav/header/BookmarkList";

import { useBookmarks } from "../../context/BookmarkContext";

type BookmarkItems = {
  id: number;
  title: string;
};

const Bookmark = ({ bookmark }: any) => {
  const { removeBookmark, bookmarks } = useBookmarks();

  // Render bookmark
  const renderBookmark = () => {
    return bookmarks.map((items: BookmarkItems, key) => (
      <BookmarkList
        key={key}
        id={Number(items.id)}
        title={items.title}
        removeBookmark={removeBookmark}
      />
    ));
  };

  return (
    <div className="bg-white flex justify-start h-screen w-full absolute top-0 right-0 z-30 text-yellow flex-col">
      <nav className="bg-bg-light flex p-3 w-full">
        <button onClick={() => bookmark()}>
          <Back fill="black" />
        </button>
        <p className="text-center w-full text-active">My Bookmark</p>
        <p className="text-transparent font-black">.</p>
      </nav>

      <div className="p-3 h-full flex justify-center overflow-auto">
        {bookmarks.length !== 0 ? (
          <ul className="flex w-full self-start flex-col gap-2">
            {renderBookmark()}
          </ul>
        ) : (
          <p className="text-active text-xl text-center">No bookmark</p>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
