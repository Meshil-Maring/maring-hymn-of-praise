import { useParams } from "react-router-dom";
import PlayIcon from "../../assets/icons/play";

interface Song {
  id: number;
  title: string;
  key: string;
  verse: string[];
  image?: string;
  chorus?: boolean;
}

interface SongLyricsProps {
  song: Song[];
}

const SongLyrics = ({ song }: SongLyricsProps) => {
  const { id } = useParams<{ id: string }>();
  const songId = Number(id);

  if (!song || !songId || songId > song.length) {
    return <p className="text-center mt-8">Song not found.</p>;
  }

  const currentSong = song[songId - 1];

  return (
    <div className="mt-8 mx-4 flex-grow">
      <div className="flex gap-2 items-center">
        <PlayIcon fill="black" size={18} />
        <p className="font-bold">{currentSong.key}</p>
      </div>

      <ol className="mt-12">
        {currentSong.verse.map((line, index) => (
          <li key={index} className="mb-4">
            {line}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SongLyrics;
