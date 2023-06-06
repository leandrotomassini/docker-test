import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import Cookies from 'js-cookie';

import { CartContext } from '../../context';
import { ShopLayout } from '../../components/layouts';
import { CartList, OrderSummary } from '../../components/cart';
import { countries } from '../../utils';

const SummaryPage = () => {

    const router = useRouter();
    const { shippingAddress, numberOfItems } = useContext(CartContext);

    useEffect(() => {

        if (!Cookies.get('firstName')) {
            router.push('/checkout/address');
        }

    }, [router])


    if (!shippingAddress)
        return <></>;

    const {
        firstName,
        lastName,
        address,
        address2 = '',
        city,
        country,
        phone,
        zip
    } = shippingAddress;

    return (
        <ShopLayout
            title={'Resumen de orden'}
            pageDescription={'Resumen de la orden'}
        >
            <Typography variant='h1' component='h1'>
                Resumen de la orden
            </Typography>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={7} sx={{ my: 2 }}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>

                            <Typography variant='h2'>
                                Resumen: ({
                                    numberOfItems === 1
                                        ? 'producto'
                                        : 'productos'
                                })
                            </Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/checkout/address' passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar datos
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography variant='subtitle1'>
                                Dirección de entrega
                            </Typography>

                            <Typography>
                                {lastName},  {firstName}
                            </Typography>

                            <Typography>
                                {address}
                                {address2 ? `, ${address2}` : ''}
                            </Typography>

                            <Typography>
                                {city}, {zip}
                            </Typography>

                            <Typography>
                                {country}
                            </Typography>

                            <Typography>
                                {phone}
                            </Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar productos
                                    </Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Confirmar orden
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default SummaryPage