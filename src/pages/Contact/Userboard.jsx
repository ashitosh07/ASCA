import "./Contact.css";
import "../../components/PrimaryBtn.css";
import "../shared/Shared.css";
import map from "../../assets/map.png";

import Contact from "./Contact";
import {
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from "../../components/core/icons";
const Userboard = () => {
  const data = [
    {
      icon: <WhatsAppIcon />,
      data: "067890876578",
    },
    {
      icon: <FacebookIcon />,
      data: "JohnDoea",
    },
    {
      icon: <LinkedInIcon />,
      data: "john Doea",
    },
    {
      icon: <YoutubeIcon />,
      data: "john doea",
    },
  ];

  return (
    <>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto lg:px-4 pt-20">
          <div className="flex items-center justify-center px-5 py-20">
            <img src={map} alt="" className="rounded-md" />
          </div>
          {/* <Contact /> */}
          <p className="text-3xl font-bold uppercase text-center px-5">You Can Also find us</p>
          <div className="py-10 px-10  flex flex-col lg:flex-row items-center gap-20 justify-center">
            {data.map((cont, i) => {
              return (
                <div key={i} className="flex flex-col gap-5 items-center">
                  {cont.icon}
                  <div>{cont.data}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Userboard;
