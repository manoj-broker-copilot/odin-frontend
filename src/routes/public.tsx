import { lazyImport } from "@/utils/lazyImport";

const { AuthRoutes } = lazyImport(() => import('@/pages/auth'), 'AuthRoutes');

export const publicRoutes = [
    {
      path: '/auth/*',
      element: <AuthRoutes />,
    },
  ];