import { useState } from "react";
import CategoryList from "./CategoryList";

const list = {
  number: "Numerical",
  alphabet: "Alphabetical",
};

const topicalIndex = {
  adoration: "Adoration",
  assurandce: "Assurence/Promise",
  atonement: "Atonement",
  baptismalHymn: "Baptismal Hymn",
  bilble: "Bible/Gospel",
  challenge: "challenge",
  childrensHymn: "Children's Hymn",
  choruses: "Choruses",
  christmas: "Christmas",
  church: "Church",
  cleansing: "Cleansing",
  comfort: "Comfort",
  consecration: "Consecration",
  cross: "Cross/Good Friday",
  decision: "Decision",
  dedicationalHymn: "Dedicational Hymn",
  devotion: "Devotion",
  easter: "Easter/Resurrection",
  evangelism: "Evangelism/Missionary",
  faith: "Faith",
  farewel: "Farewel",
  fathersday: "Father's Day",
  friendship: "Friendship",
  funeral: "Funeral",
  god: "God/Father",
  grace: "Grace",
  heaven: "Heaven/Home",
  holyCommunion: "Holy Communion/Lord's",
  holySpirit: "Holy Spirit",
  invitation: "Invitation",
  jesusChrist: "Jesus Christ/Saviour",
  joyAndPeace: "Joy and Peace",
  jubileeHymn: "Jubilee Hymn",
  love: "Love",
  loyalty: "Loyalty",
  mothersDay: "Mother's Day",
  newYear: "New Year",
  orination: "Orination",
  palmSunday: "Palm Sunday",
  passover: "Passover",
  pattiotism: "Pattiotism/Socialibity",
  prayer: "Prayer",
  processioalHymns: "Processioal Hymns",
  redemption: "Redemption",
  repentance: "Repentance",
  salvation: "Salvation",
  secondComing: "Second Coming",
  security: "Security",
  soulWinning: "Soul Winning",
  stewardship: "Stewardship/Offering",
  thanksgiving: "Thanksgiving",
  victory: "Victory",
  warfare: "Warefare",
  weddingHymns: "Wedding Hymns",
  welcome: "Welcome/Greeting",
  youth: "Youth",
};

interface CategoryProps {
  activeHandler: (params: { id: string | number }) => void;
}

const Category = ({ activeHandler }: CategoryProps) => {
  const [active, setActive] = useState("Numerical");

  const clickHandler = ({ id }: { id: string | number }) => {
    setActive(String(id));

    activeHandler({ id: id });
  };

  return (
    <ul className="p-2 flex gap-3 w-full overflow-x-auto overflow-hidden">
      {Object.entries(list).map(([key, value]) => (
        <li key={key}>
          <button onClick={() => clickHandler({ id: value })}>
            <CategoryList name={value} active={active === String(value)} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Category;
