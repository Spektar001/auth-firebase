'use client';

import { deleteAcc } from "@/app/actions/deleteAccount";
import { logoutUser } from "@/app/actions/logoutUser";

const userPage = ({ params }: { params: { id: string } }) => {
  const handleLogout = async () => {
    await logoutUser();
  };
  const handleDeleteAcc = async () => {
    await deleteAcc(params.id);
  };

  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-3">
      <div>User ID: {params.id}</div>
      <button
        onClick={handleDeleteAcc}
        className="bg-blue-400 py-2 px-4 rounded-lg hover:bg-blue-500"
      >
        Delete account
      </button>
      <button
        onClick={handleLogout}
        className="bg-blue-400 py-2 px-4 rounded-lg hover:bg-blue-500"
      >
        Logout
      </button>
    </div>
  );
};

export default userPage;
