import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../redux/actions/orderActions';
import { Badge, SideBarLayout, Table, Error, Loader } from '../components';
import { format } from 'date-fns';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const orderList = useSelector((state: any) => state.orderList);
  const { loading, error, orders } = orderList;

  useEffect(() => {
    dispatch(listOrders());
    return () => {};
  }, [dispatch]);

  const orderData = orders?.map((order: any) => {
    const { id, date_created, status, total } = order;
    const { first_name, last_name } = order.billing;

    const orderId = (
      <button
        className='cursor-pointer focus:outline-none'
        onClick={() => router.push(`/orders/${id}`)}
      >
        {id}
      </button>
    );
    const fullName = (
      <button
        className='cursor-pointer focus:outline-none'
        onClick={() => router.push(`/orders/${id}`)}
      >
        {first_name} {last_name}
      </button>
    );

    const date = format(new Date(date_created), 'dd MMM, yyyy');
    const orderStatus = <Badge orderType={status} text={status} />;
    const orderTotal = `$${total}`;

    return { orderId, fullName, date, orderStatus, orderTotal };
  });

  return (
    <>
      <Head>
        <title>Pedidos - USPK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideBarLayout sectionTitle='Pedidos'>
        {error && (
          <Error
            errorType='500'
            description='Ups algo salio mal, intentalo mas tarde'
          />
        )}
        {loading ? (
          <Loader />
        ) : (
          <Table
            colHeaders={['id', 'Nombre', 'Fecha', 'Estado', 'Total']}
            tableData={orderData}
          />
        )}
      </SideBarLayout>
    </>
  );
};
export default Orders;
