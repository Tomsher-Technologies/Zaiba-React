import dynamic from 'next/dynamic';
import { FC, Fragment } from 'react';

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

import withMainLayout from '@/hocs/withMainLayout';

import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { apiEndpoints } from '@/server_api/config/api.endpoints';

const Home: FC<{ requestedData: any }> = ({ requestedData }) => {

  console.log('requestedData', requestedData);

  return (
    <Fragment>

      <Banner sliders={(requestedData as any)?.data.sliders} />

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

export default withMainLayout(Home as any);

export async function getServerSideProps(context: any) {
  const retVal = await FetchAPIData.fetchAPIData({
    apiEndpoint: apiEndpoints.homePageData,
  });
  if (retVal) {
    return {
      props: {
        requestedData: retVal
      },
    };
  } else {
    return {
      props: {
        requestedData: {}
      }
    }
  }
}
