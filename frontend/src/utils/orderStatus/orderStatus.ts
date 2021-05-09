export const orderStatus = (status: string) => {
  if (status === 'completed') return 'bg-green-100 text-green-800';
  if (status === 'cancelled') return 'bg-gray-100 text-gray-800';
  if (status === 'failed') return 'bg-red-100 text-red-800';
  if (status === 'processing') return 'bg-blue-100 text-blue-800';
  if (status === 'on-hold') return 'bg-pink-100 text-pink-800';
  if (status === 'pending') return 'bg-yellow-100 text-yellow-800';
  if (status === 'processing') return 'bg-violet-100 text-violet-800';
};
