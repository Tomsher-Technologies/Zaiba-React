import dynamic from 'next/dynamic';
import { FC, Fragment } from 'react';

import withMainLayout from '@/hocs/withMainLayout';

const NewCollections = dynamic(() => import('@/components/Pages/Dasboard/NewCollections'));
const Banner = dynamic(() => import('@/components/Pages/Dasboard/Banner'));
const FeaturedProducts = dynamic(() => import('@/components/Pages/Dasboard/FeaturedProducts'));
const Shopcategory = dynamic(() => import('@/components/Pages/Dasboard/Shopcategory'));
const TrendingProducts = dynamic(() => import('@/components/Pages/Dasboard/TrendingProducts'));
const Highlights = dynamic(() => import('@/components/Pages/Dasboard/Highlights'));
const GuideSection = dynamic(() => import('@/components/Pages/Dasboard/GuideSection'));
const HomeAbout = dynamic(() => import('@/components/Pages/Dasboard/HomeAbout'));
const JoinClub = dynamic(() => import('@/components/Pages/Dasboard/JoinClub'));
const GetInspired = dynamic(() => import('@/components/Pages/Dasboard/GetInspired'));
const Option = dynamic(() => import('@/components/Pages/Dasboard/Option'));


const Home: FC = () => {
  return (
    <Fragment>

      <Banner />

      <NewCollections />

      <FeaturedProducts />

      <Shopcategory />

      <TrendingProducts />

      <Highlights />

      <GuideSection />

      <HomeAbout />

      <JoinClub />

      <GetInspired />

      <Option />

    </Fragment>
  )
}

export default withMainLayout(Home);
