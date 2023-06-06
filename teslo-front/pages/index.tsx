import { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';
import { FullScreenLoading } from '../components/ui';
import { ProductList } from '../components/products';
import { useProducts } from '../hooks';



const HomePage: NextPage = () => {



  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout
      title={'Teslo-Shop - Home'}
      pageDescription={'Encuentra los mejores productos de Teso aquí.'}
    >
      <Typography variant='h1' component='h1'>
        Tienda
      </Typography>

      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }


    </ShopLayout>
  )
}

export default HomePage