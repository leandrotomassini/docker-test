import NextLink from 'next/link';
import { RemoveShoppingCart } from '@mui/icons-material';
import { Box, Typography, Link } from '@mui/material';

import { ShopLayout } from '../../components/layouts';


const EmptyPage = () => {
    return (
        <ShopLayout
            title={"Carrito vacío"}
            pageDescription={"No hay productos en el carrito"}
        >
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                height='calc(100vh - 200px)'
            >
                <RemoveShoppingCart sx={{ fontSize: 100 }} />
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                >
                    <Typography
                        marginLeft={2}
                    >
                        Su carrito esta vacío
                    </Typography>
                    <NextLink href='/' passHref legacyBehavior>
                        <Link typography="h4" color='secondary'>
                            Regresar
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage