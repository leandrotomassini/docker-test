import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';

import { CartContext } from '../../context';
import { ItemCounter } from '../../components/ui';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ShopLayout } from '../../components/layouts';
import { ICartProduct, IProduct, ISize } from '../../interfaces';
import { dbProducts } from '../../database';

interface Props {
    product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {

    const router = useRouter();
    const { addProductToCart} = useContext(CartContext);

    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
        _id: product._id,
        image: product.images[0],
        price: product.price,
        size: undefined,
        slug: product.slug,
        title: product.title,
        gender: product.gender,
        quantity: 1
    });

    const onAddProduct = () => {
        if (!tempCartProduct.size) return;
        addProductToCart(tempCartProduct);
        // router.push('/cart');
    }

    const selectedSize = (size: ISize) => {
        setTempCartProduct(currentProduct => ({
            ...currentProduct,
            size
        }));
    }

    const onUpdateQuantity = (quantity: number) => {
        setTempCartProduct(currentProduct => ({
            ...currentProduct,
            quantity
        }));
    }

    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={7}>
                    <ProductSlideshow
                        images={product.images}
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>

                        <Typography variant='h1' component='h1'>
                            {product.title}
                        </Typography>

                        <Typography variant='subtitle1' component='h2'>
                            {`$${product.price}`}
                        </Typography>

                        {/* Cantidad */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            <ItemCounter
                                currentValue={tempCartProduct.quantity}
                                updatedQuantity={onUpdateQuantity}
                                maxValue={product.inStock > 10 ? 10 : product.inStock}
                            />
                            <SizeSelector
                                // selectedSize={product.sizes[3]}
                                sizes={product.sizes}
                                selectedSize={tempCartProduct.size}
                                onSelectedSize={selectedSize}
                            />
                        </Box>


                        {/* Agregar al carrito */}
                        {
                            (product.inStock > 0)
                                ? (
                                    <Button
                                        color='secondary'
                                        className='circular-btn'
                                        onClick={onAddProduct}
                                    >
                                        {
                                            tempCartProduct.size
                                                ? 'Agregar al carrito'
                                                : 'Seleccione una talla'
                                        }
                                    </Button>
                                )
                                : (
                                    <Chip
                                        color='error'
                                        label='No hay disponibles'
                                        variant='outlined'
                                    />
                                )
                        }


                        {/* <Chip
                            label='No hay disponibles'
                            color='error'
                            variant='outlined'
                        /> */}

                        {/* Description */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle2'>Descripción</Typography>
                            <Typography variant='body2'>
                                {product.description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const productSlugs = await dbProducts.getAllProductSlugs();

    return {
        paths: productSlugs.map(({ slug }) => ({
            params: {
                slug
            }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug = '' } = params as { slug: string };
    const product = await dbProducts.getProductBySlug(slug);

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            product
        },
        revalidate: 86400
    }
}



export default ProductPage