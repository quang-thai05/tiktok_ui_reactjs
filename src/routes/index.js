import { HeaderOnly } from '~/components/Layout';
import routeConfig from '~/config/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Routes don't need to login
const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.following, component: Following },
  { path: routeConfig.profile, component: Profile },
  { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routeConfig.search, component: Search, layout: null },
];

// Private Routes need to login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
