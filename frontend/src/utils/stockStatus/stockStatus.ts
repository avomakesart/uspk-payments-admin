export const stockStatus = (status: string) => {
  if (status === 'instock') return 'bg-green-100 text-green-800';
  if (status === 'outofstock') return 'bg-gray-100 text-gray-800';
  if (status === 'processing') return 'bg-blue-100 text-blue-800';
};
