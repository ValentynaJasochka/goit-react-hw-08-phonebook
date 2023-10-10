import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/UserMenu/AppBar';

import { Box } from '@chakra-ui/react';

export const SharedLayout = () => {
  return (
    <Box width="1240px" mx="auto" my="0px" p="20px">
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};
