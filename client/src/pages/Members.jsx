import React, { useState } from "react";
import { FaPlus, FaEye, FaTrash, FaEdit, FaSearch } from "react-icons/fa";
import AddMemberModal from "../components/Modal/AddMemberModal";
import MembershipInformationModal from "../components/Modal/MemberProfileModal";

const Members = () => {
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const [members, setMembers] = useState([
    {
      memberId: "210831",
      fullName: "John Doe",
      age: 30,
      gender: "Male",
      contact: "123-456-7890",
      address: "Tabangao",
      sharedCapital: 1000,
      email: "johnDoe@gmail.com",
      password: "hehehe"
    },
    {
      memberId: "210832",
      fullName: "Jane Smith",
      age: 28,
      gender: "Female",
      contact: "098-765-4321",
      address: "Batangas",
      sharedCapital: 1500,
      email: "johnDoe@gmail.com",
      password: "hehehe"
    },
    {
      memberId: "03218",
      fullName: "Yquan Smith",
      age: 21,
      gender: "Male",
      contact: "098-765-4321",
      address: "Lipa",
      sharedCapital: 15000,
      email: "johnDoe@gmail.com",
      password: "hehehe"
    },
    {
      memberId: "03219",
      fullName: "Ian Mendoza",
      age: 21,
      gender: "Male",
      contact: "098-765-4321",
      address: "Lipa",
      sharedCapital: 15000,
      email: "IanMendoza@gmail.com",
      password: "hehehe"
    },
  ]);

  const openAddEditModal = (member) => {
    setSelectedMember(member);
    setIsAddEditModalOpen(true);
  };

  const openViewModal = (member) => {
    setSelectedMember(member);
    setIsViewModalOpen(true);
  };

  const closeModals = () => {
    setIsAddEditModalOpen(false);
    setIsViewModalOpen(false);
    setSelectedMember(null);
  };

  const handleSave = (updatedMember) => {
    setMembers((prevMembers) => {
      const index = prevMembers.findIndex((m) => m.memberId === updatedMember.memberId);
      if (index !== -1) {
        // Update existing member
        const newMembers = [...prevMembers];
        newMembers[index] = updatedMember;
        return newMembers;
      } else {
        // Add new member
        return [...prevMembers, updatedMember];
      }
    });
    closeModals();
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this member?");
    if (confirmDelete) {
      setMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
      console.log("Member deleted at index:", index);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Member List</h2>

      <div className="mb-4 flex justify-end">
        <div className="relative w-80 mr-4">
          <input
            type="text"
            placeholder="Search member..."
            className="px-10 py-2 border border-gray-300 rounded-md w-full"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 flex items-center space-x-2"
          onClick={() => openAddEditModal(null)}
        >
          <FaPlus />
          <span>Add Member</span>
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-green-200">
            <th className="py-2 px-4 border-b border-gray-300">Member Id</th>
            <th className="py-2 px-4 border-b border-gray-300">Full Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Age</th>
            <th className="py-2 px-4 border-b border-gray-300">Gender</th>
            <th className="py-2 px-4 border-b border-gray-300">Contact Number</th>
            <th className="py-2 px-4 border-b border-gray-300">Address</th>
            <th className="py-2 px-4 border-b border-gray-300">Shared Capital</th>
            <th className="py-2 px-4 border-b border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b border-gray-300">{member.memberId}</td>
              <td className="py-2 px-4 border-b border-gray-300">{member.fullName}</td>
              <td className="py-2 px-4 border-b border-gray-300">{member.age}</td>
              <td className="py-2 px-4 border-b border-gray-300">{member.gender}</td>
              <td className="py-2 px-4 border-b border-gray-300">{member.contact}</td>
              <td className="py-2 px-4 border-b border-gray-300">{member.address}</td>
              <td className="py-2 px-4 border-b border-gray-300">{member.sharedCapital}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                <div className="flex justify-center">
                  <button
                    onClick={() => openAddEditModal(member)}
                    className="hover:underline bg-orange-500 text-white pl-4 pr-4 py-2 rounded-md flex items-center space-x-2"
                  >
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="hover:underline bg-red-500 text-white pl-4 pr-4 py-2 rounded-md flex items-center space-x-2 ml-2"
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                  <button
                    className="hover:underline bg-blue-500 text-white pl-4 pr-4 py-2 rounded-md flex items-center space-x-2 ml-2"
                    onClick={() => openViewModal(member)}
                  >
                    <FaEye />
                    <span>View</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddEditModalOpen && (
        <AddMemberModal
          member={selectedMember}
          onClose={closeModals}
          onSave={handleSave}
        />
      )}

      {isViewModalOpen && (
        <MembershipInformationModal
          member={selectedMember}
          onClose={closeModals}
        />
      )}
    </div>
  );
};

export default Members;
