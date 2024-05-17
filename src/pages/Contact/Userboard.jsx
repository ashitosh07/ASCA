import "./Contact.css";
import "../../components/PrimaryBtn.css";
import "../shared/Shared.css";

import Contact from "./Contact";
import {
  FacebookIcon,
  InstagramIcon,
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
        <div className="max-w-7xl mx-auto lg:px-4">
          {/* <Contact /> */}
          <div className="py-10 px-10 flex items-center gap-20 justify-center">
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
