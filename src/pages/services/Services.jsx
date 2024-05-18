import { useState } from "react";
import BottomLine from "../../components/BottomLine";

const Services = () => {
  const [hovered, setHovered] = useState(null);
  const services = [
    {
      title: "STRATEGIC GROWTH & GOVERNANCE",
      services: [
        {
          title: "Strategic Planning and Business Strategy",
          services: [
            "Business Strategy and Planning",
            "Market Expansion Strategy",
            "Investment Appraisal",
            "Cost Reduction and Efficiency Improvement",
          ],
        },
        {
          title: "Corporate Governance",
          services: [
            "Corporate Governance Advisory",
            "Regulatory Compliance and Reporting",
            "Ethics and Compliance Programs",
            "Risk Management Solutions",
            "Board and Executive Advisory",
          ],
        },
        {
          title: "Legal Entity Formation",
          services: [
            "Sole Proprietorship Firm Registration",
            "Partnership Firm Registration",
            "Limited Liability Partnership (LLP) Registration",
            "Private Limited Company Registration",
            "One Person Company (OPC) Registration",
            "NGO Registration",
            "Trust Registration",
          ],
        },
        {
          title: "Compliance and Regulatory",
          services: [
            "PF ESI Registration",
            "Startup India Registration",
            "Import Export Code (IEC) Registration",
            "Income Tax Exemption (80G, 12A) Registration",
          ],
        },
        {
          title: "Additional Services",
          services: [
            "Sustainability and ESG Advisory",
            "Internal Control Systems",
            "Arbitration",
          ],
        },
      ],
    },
  ];
  return (
    <div className="bg-black py-20 px-5 flex items-center justify-center">
      <div>
        <p className="text-3xl font-bold mt-10">Services</p>
        <BottomLine />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div key={i} className="border rounded-lg p-4 cursor-pointer">
              <p className="text-xl font-bold mb-4">{service.title}</p>
              <div className="">
                {service.services.map((subService, j) => (
                  <div
                    key={j}
                    className="relative my-2"
                    onMouseEnter={() => setHovered(subService)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <p className="font-semibold">{subService.title}</p>
                    <div
                      className={`absolute z-10 w-[200px] bg-white text-black p-2 border rounded-lg ${
                        hovered === subService ? "block" : "hidden"
                      }`}
                    >
                      {subService.services.map((serve, k) => (
                        <div key={k}>{serve}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
