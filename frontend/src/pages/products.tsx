import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusIcon } from '../assets/icons/PlusIcon';
import {
  Loader,
  SideBarLayout,
  Table,
  Error,
  Badge,
  ModalConfirmButtons,
  Modal,
} from '../components';
import { listProducts } from '../redux/actions/productActions';
import { useModal } from '../hooks';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = ({}) => {
  const { isShown, toggle } = useModal();
  const dispatch = useDispatch();
  const router = useRouter();

  const productList = useSelector((state: any) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, [dispatch]);

  console.log(products);

  const handleOpen = () => toggle();
  const onCancel = () => toggle();

  const productData = products.map((product: any) => {
    const { id, name, sku, stock_status, price, date_created } = product;

    const productImage = product.images.map((image: any) => (
      <img src={image.src} alt={name} className='max-w-full w-20' />
    ));
    const productCategories = product.categories.map((cat: any) => cat.name);
    const productTags = product.tags.map((tag: any) => tag);
    const productPrice = `$${price}`;
    const date = format(new Date(date_created), 'dd MMM, yyyy');
    const productStock = (() => {
      if (stock_status === 'outofstock') return 'Sin existencia';
      if (stock_status === 'onbackorder') return 'Realizando pedido';

      return 'En existencia';
    })();
    const stockStatus = <Badge stockType={stock_status} text={productStock} />;

    return {
      id,
      productImage,
      name,
      sku,
      stockStatus,
      productPrice,
      productCategories,
      productTags,
      date,
    };
  });

  const handleDelete = (id: number) => console.log(id);

  // Utils
  const newData = productData.map((item: any) => {
    let data = Object.assign({}, item);
    data.actions = (
      <>
        <button onClick={() => console.log(item.id)}>x</button>
        {isShown && (
          <Modal
            title='Delete eGFR'
            content='Are you sure you want to delete this info?'
            actions={
              <ModalConfirmButtons
                isDelete
                onConfirm={() => console.log(item)}
                onCancel={onCancel}
              />
            }
          />
        )}
      </>
    );
    return data;
  });

  const sortedData = newData.sort((a: any, b: any) => (a.id > b.id ? 1 : -1));

  return (
    <>
      <Head>
        <title>Productos - USPK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideBarLayout sectionTitle='Productos'>
        <div className='flex flex-row items-center justify-end mb-8'>
          <span
            onClick={() => router.push('products/create-product')}
            className='flex flex-row items-center cursor-pointer font-medium text-lg text-gray-800'
          >
            <PlusIcon /> Agregar
          </span>
        </div>
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
            colHeaders={[
              'id',
              'Foto',
              'Nombre',
              'SKU',
              'Inventario',
              'Precio',
              'Categorías',
              'Etiquetas',
              'Fecha',
              'Acciones',
            ]}
            tableData={sortedData}
          />
        )}
      </SideBarLayout>
    </>
  );
};
export default Products;
