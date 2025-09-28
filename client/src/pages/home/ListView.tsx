import ListItem from "./ListItem";

const ListView = () => {
  type Bookmark = string[];

  const bookmark: Bookmark = [];

  type AddBookmarkHandlerProps = (id: string) => void;

  const addBookmarkHandler: AddBookmarkHandlerProps = (id) => {
    const idFound = bookmark.includes(id);

    if (!idFound) {
      bookmark.push(id);
    } else {
      const index = bookmark.indexOf(id);
      if (index > -1) {
        bookmark.splice(index, 1);
      }
    }

    console.log(bookmark);
  };

  return (
    <div className="bg-white w-full py-4 mt-2 rounded-t-2xl h-full overflow-y-auto">
      <ListItem
        id={"001"}
        title={"Meshil"}
        even={true}
        cb={addBookmarkHandler}
      />

      <ListItem
        id={"002"}
        title={"Meshil"}
        even={false}
        cb={addBookmarkHandler}
      />

      <ListItem
        id={"003"}
        title={"Meshil"}
        even={true}
        cb={addBookmarkHandler}
      />
    </div>
  );
};

export default ListView;
