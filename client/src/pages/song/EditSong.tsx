import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNetworkStatus from "../../hooks/useBookmarks";

const EditSong = () => {
  const { id } = useParams();

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
    <div>
      {!network && <p>Please try again! No Internet</p>}

      <h1 className="text-xl text-center font-bold mt-8">
        {song?.id}. {song?.title}
      </h1>

      <ul className="h-screen overflow-x-auto">
        {song?.sections.map((section, sIndex) => {
          let currentVerseIndex = verseIndex;

          if (section.type !== "chorus") {
            verseIndex++;
          }

          return (
            <li key={sIndex} className="mb-4 w-11/12 mt-8 ml-4">
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
    </div>
  );
};

export default EditSong;
