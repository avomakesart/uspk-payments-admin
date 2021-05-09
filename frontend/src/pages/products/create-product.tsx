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
import { Select } from '../../components/Select/Select';
import { TextArea } from '../../components/TextArea/TextArea';
import { listCategories } from '../../redux/actions/categoryActions';

interface CreateProductProps {}

const CreateProduct: React.FC<CreateProductProps> = ({}) => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  const categoryList = useSelector((state: any) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
    return () => {};
  }, [dispatch]);

  console.log(categories);

  return (
    <SideBarLayout sectionTitle='Crear Producto'>
      <div className='mx-auto w-full'>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <Formik
            initialValues={{
              value: value,
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
                    <CardForm title=' Datos Generales'>
                      <Input
                        label='Nombre del Producto'
                        htmlFor='nombre'
                        type='text'
                        id='nombre'
                        value={values.value}
                        onChange={handleChange}
                        placeHolder='Escribe un nombre de producto'
                        name='value'
                      />

                      <TextArea
                        label='Descripción del Producto'
                        htmlFor='descripcion'
                        value={values.value}
                        onChange={handleChange}
                        placeHolder='Escribe una descripción para el producto'
                        name='value'
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
                        value={values.value}
                        onChange={handleChange}
                        placeHolder='0.00$'
                        name='value'
                      />
                      <Input
                        label='Precio Rebajado ($)'
                        htmlFor='precio'
                        type='text'
                        id='precio'
                        value={values.value}
                        onChange={handleChange}
                        placeHolder='0.00$'
                        name='value'
                      />

                      {/* Add taxes */}
                    </CardForm>
                  </div>
                  <div className='flex flex-col'>
                    <CardForm title='¿Listo para publicar?'>
                      <Button
                        type='submit'
                        text='Publicar'
                        backgroundColor='black'
                        textColor='white'
                        hasBorder
                        borderColor='black'
                      />
                    </CardForm>

                    <CardForm title='Categorias del producto' marginTop='9'>
                      {loading
                        ? 'Loading...'
                        : categories?.map((category: any) => (
                            <CheckBox
                              label={category.name}
                              key={category.id}
                              id={category.slug}
                            />
                          ))}
                               <Select />
                    </CardForm>
                   
                    <CardForm title='Categorias del producto' marginTop='9'>
                    <Select />
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
