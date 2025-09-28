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
  bilble: "Bible/Gospel",
  baptismalHymn: "Baptismal Hymn",
  challenge: "challenge",
  childrensHymn: "Children's Hymn",
  christmas: "Christmas",
  church: "Church",
  cleansing: "Cleansing",
  comfort: "Comfort",
  holyCommunion: "Holy Communion/Lord's",
  choruses: "Choruses",
  consecration: "Consecration",
  cross: "Cross/Good Friday",
  decision: "Decision",
  dedicationalHymn: "Dedicational Hymn",
  devotion: "Devotion",
  easter: "Easter/Resurrection",
  evangelism: "Evangelism/Missionary",
  holySpirit: "Holy Spirit",
  invitation: "Invitation",
  joyAndPeace: "Joy and Peace",
  jubileeHymn: "Jubilee Hymn",
  faith: "Faith",
  farewel: "Farewel",
  fathersday: "Father's Day",
  friendship: "Friendship",
  funeral: "Funeral",
  grace: "Grace",
  god: "God/Father",
  heaven: "Heaven/Home",
  jesusChrist: "Jesus Christ/Saviour",
  love: "Love",
  loyalty: "Loyalty",
  mothersDay: "Mother's Day",
  newYear: "New Year",
  orination: "Orination",
  palmSunday: "Palm Sunday",
  pattiotism: "Pattiotism/Socialibity",
  prayer: "Prayer",
  processioalHymns: "Processioal Hymns",
  redemption: "Redemption",
  repentance: "Repentance",
  salvation: "Salvation",
  secondComing: "Second Coming",
  security: "Security",
  soulWinning: "Soul Winning",
  passover: "Passover",
  stewardship: "Stewardship/Offering",
  thanksgiving: "Thanksgiving",
  weddingHymns: "Wedding Hymns",
  welcome: "Welcome/Greeting",
  victory: "Victory",
  warfare: "Warefare",
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
