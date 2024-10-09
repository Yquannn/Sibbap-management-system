import React, { useState } from "react";

const Membership = ({ onClose, member, onSave }) => {
  const [formData, setFormData] = useState(member || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 relative z-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Membership</h1>
        <p className="text-xl font-bold text-gray-800 mb-6">Personal Information</p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <label className="block text-gray-700">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ''}
              onChange={handleChange}
              placeholder="Enter full name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age || ''}
              onChange={handleChange}
              placeholder="Enter age"
              className="mt-1 p-2 border border-gray-300 rounded-md max-w-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact Number:</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact || ''}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700">Gender:</label>
            <select
              name="gender"
              value={formData.gender || ''}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md max-w-sm"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address || ''}
              onChange={handleChange}
              placeholder="Enter address"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700">Shared Capital:</label>
            <input
              type="number"
              name="sharedCapital"
              value={formData.sharedCapital || ''}
              onChange={handleChange}
              placeholder="Enter Shared capital"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Required Documents</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="block text-gray-700">Application Form:</label>
              <input type="file" id="applicationForm" name="applicationForm" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700">ID Picture (1x1 and 2x2):</label>
              <input type="file" id="idPicture" name="idPicture" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700">Barangay Clearance:</label>
              <input type="file" id="barangayClearance" name="barangayClearance" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700">TIN:</label>
              <input type="file" id="tin" name="tin" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700">PMES:</label>
              <input type="file" id="pmes" name="pmes" className="w-full" />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 w-1/2 mr-4"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-1/2 ml-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
