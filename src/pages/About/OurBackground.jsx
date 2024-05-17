import ourBackground from "../../assets/blogcard1.png";
const OurBackground = () => {
  return (
    <div className="flex  justify-center gap-20 px-20">
      <div className="w-[50%]">
        <p className="text-xl font-bold text-[#8dce19] mb-5">Our Background</p>
        <p>
          Established in 2018, we are a Chartered Accountancy firm that began
          with the vision of an organisation that is ethically grounded and
          precision-driven. Along with the fact that we’re client-centric, our
          firm prides itself on the financial acumen and technological
          advancements that we bring to the table. Founded on the principles of
          transparency and integrity, we have consistently evolved alongside the
          rapid technological advancements within the financial sector. We are
          committed to staying at the forefront of innovation, ensuring that our
          services maintain their foundational values while leveraging
          cutting-edge technologies to meet and exceed our clients &apos;
          expectations. We go above and beyond to ensure that our clients
          receive the most accurate and valuable financial insights. With a keen
          eye for detail and a commitment to excellence, we strive to provide
          our clients with the clarity and tools they need to make well-informed
          decisions that will positively impact their financial future.
        </p>
      </div>
      <div className="w-[50%]">
        <div className="flex gap-2 items-center">
          <img
            src={ourBackground}
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <p>ASCA was introduced in 2018I</p>
        </div>
      </div>
    </div>
  );
};

export default OurBackground;
