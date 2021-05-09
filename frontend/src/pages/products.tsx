import { format } from 'date-fns';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, SideBarLayout, Table, Error, Badge } from '../components';
import { listProducts } from '../redux/actions/productActions';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = ({}) => {
  const dispatch = useDispatch();

  const productList = useSelector((state: any) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, [dispatch]);

  console.log(products);

  const productData = loading
    ? 'Loading...'
    : products.map((product: any) => {
        const { id, name, sku, stock_status, price, date_created } = product;

        const productImage = product.images.map((image: any) => (
          <img src={image.src} alt={name} className='max-w-full w-20' />
        ));
        const productCategories = product.categories.map(
          (cat: any) => cat.name
        );
        const productTags = product.tags.map((tag: any) => tag);
        const productPrice = `$${price}`;
        const date = format(new Date(date_created), 'dd MMM, yyyy');
        const productStock = (() => {
          if (stock_status === 'outofstock') return 'Sin existencia';
          if (stock_status === 'onbackorder') return 'Realizando pedido';

          return 'En existencia';
        })();
        const stockStatus = (
          <Badge stockType={stock_status} text={productStock} />
        );

        console.log();

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

  return (
    <>
    <Head>
      <title>Productos - USPK</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <SideBarLayout sectionTitle='Productos'>
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
          ]}
          tableData={productData}
        />
      )}
    </SideBarLayout>
    </>
  );
};
export default Products;
