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
  return (
    <div className="mt-8 mx-4 h-full">
      <div className="flex gap-2 items-center">
        <PlayIcon fill="black" size={18} />
        <p className="font-bold"></p>
      </div>

      <ol className="mt-12"></ol>
    </div>
  );
};

export default SongLyrics;
