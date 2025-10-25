import PlayIcon from "../../assets/icons/play";

interface SongLyricsProps {
  song: {
    key: string;
    verse: string[];
  } | null;
}

const SongLyrics = ({ song }: SongLyricsProps) => {
  if (!song) {
    return <p className="text-center mt-8">Song not found.</p>;
  }

  return (
    <div className="mt-8 mx-4 flex-grow">
      <div className="flex gap-2 items-center">
        <PlayIcon fill="black" size={18} />
        <p className="font-bold">Key: {song.key}</p>
      </div>

      <ol className="mt-12">
        {song.verse.map((verse, index) => (
          <li key={index} className="mb-4 block">
            {verse.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SongLyrics;
