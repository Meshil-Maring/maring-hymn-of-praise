import PlayIcon from "../../assets/icons/play";

interface Section {
  type: "verse" | "chorus";
  lines: string[];
}

interface Song {
  key: string;
  sections: Section[];
}

interface SongLyricsProps {
  song: Song | null;
}

//  Display sections with proper types
const displayLine = (sections: Section[]) => {
  let verseCount = 0;

  return sections.map((section, index) => {
    if (section.type === "verse") {
      verseCount += 1;

      return (
        <div key={index} className="flex gap-2 mb-4">
          <span className="font-bold">{verseCount}.</span>
          <div>
            {section.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      );
    }

    // Chorus section
    return (
      <div key={index} className="mb-4 ml-8">
        {section.lines.map((line, i) => (
          <p key={i} className="font-bold">
            {line}
          </p>
        ))}
      </div>
    );
  });
};

const SongLyrics: React.FC<SongLyricsProps> = ({ song }) => {
  if (!song) {
    return <p className="text-center mt-5">Song not found.</p>;
  }

  return (
    <div className="mt-2 mx-6 flex flex-col min-h-0">
      <div className="flex gap-2 items-center">
        <PlayIcon fill="black" size={18} />
        <p className="font-bold">Key: {song.key}</p>
      </div>

      <ol className="mt-6 flex-1 overflow-y-auto flex flex-col mb-4 scrollbar-hidden">
        {displayLine(song.sections)}
      </ol>
    </div>
  );
};

export default SongLyrics;
