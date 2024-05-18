import { useState } from "react";

const TeamMemberCard = ({ image, name, role, body }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-4  shadow-md rounded-lg">
      <div onClick={openModal} className="cursor-pointer">
        <div className="overflow-hidden rounded-lg">
          <img src={image} alt={name} className="w-full h-auto object-cover" />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-black rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto z-10 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt={name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <p className="text-sm text-gray-600 mb-4">{role}</p>
              <div className="text-base text-gray-800">{body}</div>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-[#8dce19] font-bold text-black rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
