'use client';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';
import deleteRoom from '@/app/actions/deleteRoom';

const DeleteRoomButton = ({ roomId }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this room?'
    );

    if (confirmed) {
      try {
        const response = await deleteRoom(roomId);
        toast.success('Room deleted successfully!');
      } catch (error) {
        console.log('Failed to delete room', error);
        toast.error('Failed to delete room');
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className='bg-red-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-red-700'
    >
      <FaTrash className='inline mr-1' /> Delete
    </button>
  );
};

export default DeleteRoomButton;
