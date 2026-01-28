import { memo } from 'react';

import { MainMenuScreen } from '@/components/ui/MainMenuScreen';

const HomeMemo = () => {
  return <MainMenuScreen />;
};

const Home = memo(HomeMemo);
Home.displayName = 'Home';

export default Home;
