import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex w-11/12 mx-auto  p-3 rounded-lg">
        <img
          src="https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg?w=1380&t=st=1664389928~exp=1664390528~hmac=0939dc856a49310e93848f0d61494bd824caa9b1a2450ed12213ea8fbfa87dc3"
          alt=""
          className="w-20 h-20 object-cover rounded-full "
        />
        <div className="nameAddress ml-3">
          <h1 className="text-xl font-bold">Saad Ibne Omar</h1>
          <div className="flex mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 inline text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            Chittagong, BD
          </div>
        </div>
      </div>
      <div className="weight grid grid-cols-3 justify-items-center bg-gray-100 p-4 text-center rounded-xl mt-3">
        <div className="bg-gray-100">
          <h1 className="text-3xl font-bold">
            75<span className="text-base"> kg</span>
          </h1>
          <h2 className="text-lg font-semibold text-gray-600">Weight</h2>
        </div>
        <div className="bg-gray-100">
          <h1 className="text-3xl font-bold">
            5.11<span className="text-base"> ft</span>
          </h1>
          <h2 className="text-lg font-semibold text-gray-600">Height</h2>
        </div>
        <div className="bg-gray-100">
          <h1 className="text-3xl font-bold">
            25<span className="text-base"> yr</span>
          </h1>
          <h2 className="text-lg font-semibold text-gray-600">Age</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
