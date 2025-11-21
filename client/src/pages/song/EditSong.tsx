import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useNetworkStatus from "../../hooks/useBookmarks";
import Back from "../../assets/icons/back";

const EditSong = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  type Section = {
    type: string;
    lines: string[];
  };

  type SongParams = {
    id: number;
    title: string;
    key: string;
    sections: Section[];
  };

  let verseIndex = 1;

  const network = useNetworkStatus();
  const [song, setSong] = useState<SongParams>();

  useEffect(() => {
    if (!id) return;

    fetch(`https://maring-hymn-of-praise-server.onrender.com/song/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSong(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="h-screen flex flex-col">
      {!network && <p>Please try again! No Internet</p>}

      <nav className="text-xl  justify-between flex text-center font-bold p-4">
        <button onClick={() => navigate("/song/4")} className="text-sm">
          <Back fill="black" />
        </button>
        <p className="text-sm">
          {song?.id}. {song?.title}
        </p>
        <button></button>
      </nav>

      <form className="flex-1">
        <ul className="flex flex-1 flex-col overflow-y-auto h-10/12">
          {song?.sections.map((section, sIndex) => {
            let currentVerseIndex = verseIndex;

            if (section.type !== "chorus") {
              verseIndex++;
            }

            return (
              <li key={sIndex} className="mb-4 mt-8 ml-4">
                <p className="font-semibold mb-2 uppercase">
                  {section.type === "chorus"
                    ? "Chorus"
                    : `verse ${currentVerseIndex}`}
                </p>

                {section.lines.map((line, lIndex) => (
                  <input
                    key={lIndex}
                    type="text"
                    onChange={(e) => {
                      if (!song) return;

                      const newSong = structuredClone(song);
                      newSong.sections[sIndex].lines[lIndex] = e.target.value;

                      setSong(newSong);
                    }}
                    value={line}
                    className="border p-1 m-1 w-full"
                  />
                ))}
              </li>
            );
          })}
        </ul>
      </form>

      <button className="bg-blue-700  px-8 py-3 text-white w-fit mt-2 ml-2 cursor-pointer">
        Contribute
      </button>
    </div>
  );
};

export default EditSong;
