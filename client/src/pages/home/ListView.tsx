import ListItem from "./ListItem";

const ListView = () => {
  type BookmarkList = string[];

  const bookmarkList: BookmarkList = [];

  type AddBookmarkListHandlerProps = (id: string) => void;

  // handling bookmarkList add and remove
  const addBookmarkListHandler: AddBookmarkListHandlerProps = (id) => {
    const idFound = bookmarkList.includes(id);

    if (!idFound) {
      bookmarkList.push(id);
    } else {
      const index = bookmarkList.indexOf(id);
      if (index > -1) {
        bookmarkList.splice(index, 1);
      }
    }
  };

  // check bookmark
  const checkBookmark = (id: string) => {
    return bookmarkList.includes(id);
  };

  return (
    <div className="bg-white w-full py-4 mt-2 rounded-t-2xl h-full overflow-y-auto">
      <ListItem
        id={"001"}
        title={"Meshil"}
        even={true}
        cb={addBookmarkListHandler}
        bookmark={checkBookmark("001")}
      />
    </div>
  );
};

export default ListView;
