import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardForm,
  Grid,
  Input,
  SideBarLayout,
} from '../../components';
import { CheckBox } from '../../components/CheckBox/CheckBox';
import { FileInput } from '../../components/Input/FileInput';
import { Select } from '../../components/Select/Select';
import { TextArea } from '../../components/TextArea/TextArea';
import { listCategories } from '../../redux/actions/categoryActions';
import { listTaxClasses } from '../../redux/actions/taxClassesActions';

interface CreateProductProps {}

const CreateProduct: React.FC<CreateProductProps> = ({}) => {
  const [image, setImage] = useState('');
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch();

  const categoryList = useSelector((state: any) => state.categoryList);
  const { loading, error, categories } = categoryList;

  const taxClassesList = useSelector((state: any) => state.taxClassesList);
  const {
    loading: taxClassLoading,
    error: taxError,
    taxClasses,
  } = taxClassesList;

  useEffect(() => {
    dispatch(listCategories());
    dispatch(listTaxClasses());
    return () => {};
  }, [dispatch]);


  const taxes = [
    { id: 'taxable', name: 'Imponible' },
    { id: 'shipping', name: 'Envio solamente' },
    { id: 'none', name: 'Ninguno' },
  ];

  const taxClassData = taxClasses?.map((tax: any) => {
    const { slug, name } = tax;

    const id = slug;

    return { id, name };
  });

  const handleChangeImage = (e: any) => setImage(e.target.value);
  const handleCheck = (e: any) => setIsChecked(e.target.checked)

  return (
    <SideBarLayout sectionTitle='Crear Producto'>
      <div className='mx-auto w-full'>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <Formik
            initialValues={{
              name: '',
              description: '',
              regular_price: '',
              sale_price: '',
              tax_state: 'taxable',
              tax_class: '',
              sku: '',
              stock_status: '',
              weight: '',
              categories: { id: '' },
              dimensions: {
                length: '',
                width: '',
                height: '',
              },
              images: {
                src: image,
              },
            }}
            onSubmit={async (values) => {
              console.log(values);

              //   const { errors } = await createBloodPressure({
              //     variables: { input: values },
              //     update: (cache) => {
              //       cache.evict({ fieldName: 'bloodPressure:{}' });
              //     },
              //   });
              //   if (!errors) history.push('/blood-pressure');
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <Grid cols='2'>
                  <div className='flex flex-col'>
                    <CardForm title='Datos Generales'>
                      <Input
                        label='Nombre del Producto'
                        htmlFor='nombre'
                        type='text'
                        id='nombre'
                        value={values.name}
                        onChange={handleChange}
                        placeHolder='Escribe un nombre de producto'
                        name='name'
                      />

                      <TextArea
                        label='Descripción del Producto'
                        htmlFor='descripcion'
                        value={values.description}
                        onChange={handleChange}
                        placeHolder='Escribe una descripción para el producto'
                        name='description'
                        spellCheck={false}
                        helperText='Máximo 1000 caracteres'
                      />
                    </CardForm>
                    <CardForm title='General' marginTop='9'>
                      <Input
                        label='Precio Normal ($)'
                        htmlFor='precio'
                        type='text'
                        id='precio'
                        value={values.regular_price}
                        onChange={handleChange}
                        placeHolder='$0.00'
                        name='regular_price'
                      />
                      <Input
                        label='Precio Rebajado ($)'
                        htmlFor='precio'
                        type='text'
                        id='precio'
                        value={values.sale_price}
                        onChange={handleChange}
                        placeHolder='$0.00'
                        name='sale_price'
                      />

                      {/* Add taxes */}
                    </CardForm>

                    <CardForm title='Impuesto' marginTop='9'>
                      <Select label='Estado del impuesto' items={taxes} />
                      <Select label='Clase de impuesto' items={taxClassData} />
                    </CardForm>

                    <CardForm title='Inventario' marginTop='9'>
                      <Input
                        label='SKU'
                        htmlFor='sku'
                        type='text'
                        id='sku'
                        value={values.sku}
                        onChange={handleChange}
                        placeHolder='####-###-###'
                        name='sku'
                      />

                      <Select
                        label='Estado del inventario'
                        items={taxClassData}
                      />
                    </CardForm>

                    <CardForm title='Envío' marginTop='9'>
                      <Input
                        label='Peso (kg)'
                        htmlFor='peso'
                        type='text'
                        id='peso'
                        value={values.weight}
                        onChange={handleChange}
                        placeHolder='0'
                        name='weight'
                      />

                      <div className='flex flex-col justify-between'>
                        <span className='block text-sm font-medium text-gray-700 mb-2'>
                          Dimensiones (cm):
                        </span>

                        <div className='mt-3'>
                          <Input
                            label='Longitud'
                            htmlFor='long'
                            type='text'
                            id='long'
                            value={values.dimensions.length}
                            onChange={handleChange}
                            placeHolder='0'
                            name='length'
                          />
                        </div>
                        <div className='mt-3'>
                          <Input
                            label='Anchura'
                            htmlFor='anchura'
                            type='text'
                            id='anch'
                            value={values.dimensions.width}
                            onChange={handleChange}
                            placeHolder='0'
                            name='width'
                          />
                        </div>
                        <div className='mt-3'>
                          <Input
                            label='Altura'
                            htmlFor='altura'
                            type='text'
                            id='alt'
                            value={values.dimensions.height}
                            onChange={handleChange}
                            placeHolder='0'
                            name='height'
                          />
                        </div>
                      </div>
                    </CardForm>
                  </div>

                  <div className='flex flex-col'>
                    <CardForm title='Categorias del producto'>

<Select
                        label="Categorias disponible"
                        items={categories}
                      />
                    </CardForm>

                    <CardForm title='Imagen del producto' marginTop='9'>
                      <div>
                        <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                          <div className='space-y-1 text-center'>
                            <svg
                              className='mx-auto h-12 w-12 text-gray-400'
                              stroke='currentColor'
                              fill='none'
                              viewBox='0 0 48 48'
                              aria-hidden='true'
                            >
                              <path
                                d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                            <div className='flex text-sm text-gray-600'>
                              <label
                                htmlFor='file-upload'
                                className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                              >
                                <span>Upload a file</span>
                                <input
                                  id='file-upload'
                                  name='image'
                                  type='file'
                                  onChange={handleChangeImage}
                                  className='sr-only'
                                  value={image}
                                />
                              </label>
                              <p className='pl-1'>or drag and drop</p>
                            </div>
                            <p className='text-xs text-gray-500'>
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                      <Input
                        label='Image'
                        htmlFor='altura'
                        type='text'
                        id='alt'
                        value={(values.images.src = image)}
                        onChange={handleChange}
                        placeHolder={values.images.src}
                        name='height'
                      />
                    </CardForm>

                    <CardForm title='¿Listo para publicar?' marginTop='9'>
                      <Button
                        type='submit'
                        text='Publicar'
                        backgroundColor='black'
                        textColor='white'
                        hasBorder
                        borderColor='black'
                      />
                    </CardForm>
                  </div>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </SideBarLayout>
  );
};
export default CreateProduct;
