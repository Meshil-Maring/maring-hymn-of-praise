import PlayIcon from "../../assets/icons/play";

const SongLyrics = () => (
  <div className="mt-8 mx-4 h-full">
    <div className="flex gap-2 items-center">
      <PlayIcon fill="black" size={18} />
      <p className="font-bold">Key: C</p>
    </div>

    <ol className="mt-12">
      <li>
        Kai Shimpi Dunpuya mathangase, Khirouweikhi Ani kaya kalpi Aya mathangbi
        kani khurummase, Malengthutbi kalpiwurnei ngammei.
      </li>

      <li></li>
    </ol>
  </div>
);

export default SongLyrics;
