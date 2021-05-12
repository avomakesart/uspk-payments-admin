import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SideBarLayout, Error, Loader, Table } from '../components';
import { listCustomers } from '../redux/actions/customerActions';

interface CustomersProps {}

const Customers: React.FC<CustomersProps> = ({}) => {
  const dispatch = useDispatch();

  const customerList = useSelector((state: any) => state.customerList);
  const { loading, error, customers } = customerList;

  useEffect(() => {
    dispatch(listCustomers());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Clientes - USPK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideBarLayout sectionTitle='Clientes'>
        {error && (
          <Error
            errorType='500'
            description='Ups algo salio mal, intentalo mas tarde'
          />
        )}
        {loading ? (
          <Loader />
        ) : (
          // <Table
          //   colHeaders={['id', 'Nombre', 'Fecha', 'Estado', 'Total']}
          //   tableData={orderData}
          // />
          customers.length === 0 && (
            <h1 className='text-4xl font-bold mx-auto'>No hay clientes aun</h1>
          )
        )}
      </SideBarLayout>
    </>
  );
};
export default Customers;
