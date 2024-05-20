const WeAre = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center gap-10 px-20">
      <div className="border-b-2 lg:border-r-2 lg:border-b-0  lg:w-[40%]  pr-10 ">
        <p className="uppercase text-xl font-bold mb-12 text-center lg:text-right">we are</p>
        <div className="flex flex-row lg:flex-col  items-end gap-5">
          <p className="text-2xl text-[#8dce19] mb-5 font-bold">Honest</p>
          <p className="text-2xl text-[#8dce19] mb-5 font-bold">Proactive</p>
          <p className="text-2xl text-[#8dce19] mb-5 font-bold">Analytical</p>
        </div>
      </div>
      <div className="lg:w-[60%]">
        <p className="mb-5">
          Through unwavering <span className="text-[#8dce19]">honesty</span> in
          our practices, we build a solid foundation of trust with our clients,
          ensuring they can depend on us for impartial advice and expect us to
          manage their financial affairs with the utmost integrity and
          transparency.
        </p>
        <p className="mb-5">
          By adopting a <span className="text-[#8dce19]">proactive</span>{" "}
          approach, ASCA stays abreast of legislative, regulatory, and financial
          updates allowing us to anticipate changes that could impact our
          clients. We keep clients informed with regular updates, reports, and
          check-ins ensuring that they are always aware of their financial
          status and any impending issues.{" "}
        </p>
        <p className="mb-5">
          Leveraging our exceptional{" "}
          <span className="text-[#8dce19]">analytical</span> capabilities, we
          excel in decoding financial data, pinpointing trends, and revealing
          critical insights for our clients. Using the latest tools and
          techniques, we carry out detailed financial studies, giving our
          clients the clear, practical advice they need to make smarter
          decisions.{" "}
        </p>
      </div>
    </div>
  );
};

export default WeAre;
