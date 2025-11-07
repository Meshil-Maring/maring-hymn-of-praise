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
  fontSize?: number;
}

const displayLine = (sections: Section[], size?: number) => {
  let verseCount = 0;

  return sections.map((section, index) => {
    if (section.type === "verse") {
      verseCount++;
      return (
        <div key={index} className="flex gap-2 mb-4">
          <span className="font-bold">{verseCount}.</span>
          <div>
            {section.lines.map((line, i) => (
              <p key={i} style={{ fontSize: `${size}px` }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      );
    }

    // Chorus section
    return (
      <div key={index} className="mb-4 ml-8">
        {section.lines.map((line, i) => (
          <p key={i} className="font-bold" style={{ fontSize: `${size}px` }}>
            {line}
          </p>
        ))}
      </div>
    );
  });
};

const SongLyrics: React.FC<SongLyricsProps> = ({ fontSize, song }) => {
  if (!song) {
    return <p className="text-center mt-5">Song not found.</p>;
  }

  return (
    <div className="mt-2 mx-6 mr-10 flex flex-col min-h-0 transition-all duration-300">
      <div className="flex gap-2 items-center">
        <PlayIcon fill="black" size={18} />
        <p className="font-bold">Key: {song.key}</p>
      </div>

      <ol
        style={{ fontSize: `${fontSize}px` }}
        className="mt-6 flex-1 overflow-y-auto flex flex-col mb-4 scrollbar-hidden leading-relaxed"
      >
        {displayLine(song.sections, fontSize)}
      </ol>
    </div>
  );
};

export default SongLyrics;
