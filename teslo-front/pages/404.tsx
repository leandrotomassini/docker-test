import { Box, Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';

const Custom404 = () => {
    return (
        <ShopLayout
            title={"404 Página no encontrada"}
            pageDescription={"No hay nada que mostrar aquí."}
        >
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                height='calc(100vh - 200px)'
            >
                <Typography
                    variant='h1'
                    component='h1'
                    fontSize={40}
                    fontWeight={200}
                >
                    404 |
                </Typography>

                <Typography
                    marginLeft={2}
                >
                    No encontramos ninguna página aquí
                </Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404;