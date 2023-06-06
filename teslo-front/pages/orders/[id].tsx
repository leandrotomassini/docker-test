import NextLink from 'next/link';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { CartList, OrderSummary } from '../../components/cart';

const OrderPage = () => {
    return (
        <ShopLayout
            title={'Resumen de la orden'}
            pageDescription={'Resumen de la orden'}
        >
            <Typography variant='h1' component='h1'>
                Orden: ABC123
            </Typography>

            {/* <Chip
                sx={{ my: 2 }}
                label="Pendiente de pago"
                variant='outlined'
                color='error'
                icon={<CreditCardOffOutlined />}
            /> */}

            <Chip
                sx={{ my: 2 }}
                label="La orden ya fue pagada"
                variant='outlined'
                color='success'
                icon={<CreditScoreOutlined />}
            />

            <Grid container spacing={2}>

                <Grid item xs={12} sm={7} sx={{ my: 2 }}>
                    <CartList />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>

                            <Typography variant='h2'>Resumen: (3 productos)</Typography>

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
                                Homero Simpson
                            </Typography>

                            <Typography>
                                3325 Av. Siempre Viva
                            </Typography>

                            <Typography>
                                Styisl. HY2112
                            </Typography>

                            <Typography>
                                Canadá
                            </Typography>

                            <Typography>
                                +1 558 8558
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
                                {/* TODO */}
                                <h1>Pagar</h1>
                            </Box>

                            <Chip
                                sx={{ my: 2 }}
                                label="La orden ya fue pagada"
                                variant='outlined'
                                color='success'
                                icon={<CreditScoreOutlined />}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default OrderPage