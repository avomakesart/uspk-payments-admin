import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Error, Grid, Loader, SideBarLayout } from '../../components';
import { getOrderDetails } from '../../redux/actions/orderActions';
import { listProducts } from '../../redux/actions/productActions';
import { isEmptyObject } from '../../utils';

interface OrderProps {
  productId: any;
}

const Order: React.FC<OrderProps> = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state: any) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const productList = useSelector((state: any) => state.productList);
  const { products, loading: loadProducts, error: productsError } = productList;

  useEffect(() => {
    if (!router.isReady) return;

    dispatch(listProducts());
    dispatch(getOrderDetails(router.query.id));
    return () => {};
  }, [dispatch, router.isReady]);

  return (
    <SideBarLayout sectionTitle={`Pedido - #${order.id}`}>
      {error && (
        <Error
          errorType='500'
          description='Ups algo salio mal, intentalo mas tarde'
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        <Grid>
          <Card cardTitle={`Detalles del pedido #${order.id}`}>
            <span>
              Pago a través de {order.payment_method_title}. Pagado el{' '}
              {format(new Date(order.date_paid), 'PPpp')}. IP del cliente:{' '}
              {order.customer_ip_address}
            </span>
            <Grid cols='3'>
              <div className='mt-5'>
                <h3 className='font-bold'>General</h3>
              </div>
              <div className='mt-5'>
                <h3 className='font-bold'>Facturación</h3>
                <div className='flex flex-col'>
                  <p>
                    {order.billing.first_name} {order.billing.last_name}
                  </p>
                  <p>{order.billing.company}</p>
                  <p>{order.billing.address_1}</p>
                  <p>{order.billing.address_2}</p>
                  <p>
                    {order.billing.city}, {order.billing.state}
                  </p>
                  <p>{order.billing.postcode}</p>
                </div>
                <div className='flex flex-col mt-4'>
                  <h3 className='font-medium'>
                    Dirección de correo electrónico:
                  </h3>
                  <p>{order.billing.email}</p>
                </div>

                <div className='flex flex-col mt-4'>
                  <h3 className='font-medium'>Teléfono:</h3>
                  <p>{order.billing.phone}</p>
                </div>
              </div>
              <div className='mt-5'>
                <h3 className='font-bold'>Envío</h3>
                <div className='flex flex-col mt-4'>
                  <h3 className='font-bold'>Dirección</h3>
                  {isEmptyObject(order.shipping) && (
                    <p>Sin dirección de envío configurada.</p>
                  )}
                </div>
              </div>
            </Grid>
          </Card>
          <Card>
            <div className='flex justify-between'>
              <div className='flex flex-row justify-start'>
                <h3 className='font-bold'>Articulo</h3>
              </div>
              <div className='flex flex-row justify-end'>
                <h3 className='mr-10 font-bold'>Coste</h3>
                <h3 className='mr-10 font-bold'>Cantidad</h3>
                <h3 className='font-bold'>Total</h3>
              </div>
            </div>

            {order.line_items.map((item: any) => (
              <div
                className='flex justify-between items-center  mt-8'
                key={item.id}
              >
                {products
                  .filter((prodItem: any) => prodItem.id === item.product_id)
                  .map((prod: any) => (
                    <div
                      className='flex flex-row justify-start items-center'
                      key={prod.id}
                    >
                      {prod.images.map((prodImg: any) => (
                        <img
                          src={prodImg.src}
                          alt='Product'
                          className='max-w-full w-28'
                        />
                      ))}
                      <h3 className='ml-4'>{item.name}</h3>
                    </div>
                  ))}
                <div className='flex flex-row justify-end'>
                  <h3 className='mr-10'>${item.price}</h3>
                  <h3 className='mr-10'>x {item.quantity}</h3>
                  <h3>{item.total}</h3>
                </div>
              </div>
            ))}
          </Card>
        </Grid>
      )}
    </SideBarLayout>
  );
};
export default Order;
