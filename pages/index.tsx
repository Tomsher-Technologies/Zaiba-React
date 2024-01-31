import { FC, Fragment, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { NextPageContext } from 'next';

const MainLayout = dynamic(() => import('@/components/Layouts/MainLayout'));
const NewCollections = dynamic(() => import('@/components/Pages/Dasboard/NewCollections'));
const Banner = dynamic(() => import('@/components/Pages/Dasboard/Banner'));
const FeaturedProducts = dynamic(() => import('@/components/Pages/Dasboard/FeaturedProducts'));
const ShopCategory = dynamic(() => import('@/components/Pages/Dasboard/ShopCategory'));
const TrendingProducts = dynamic(() => import('@/components/Pages/Dasboard/TrendingProducts'));
const Highlights = dynamic(() => import('@/components/Pages/Dasboard/Highlights'));
const GuideSection = dynamic(() => import('@/components/Pages/Dasboard/GuideSection'));
const HomeAbout = dynamic(() => import('@/components/Pages/Dasboard/HomeAbout'));
const JoinClub = dynamic(() => import('@/components/Pages/Dasboard/JoinClub'));
const GetInspired = dynamic(() => import('@/components/Pages/Dasboard/GetInspired'));
const Option = dynamic(() => import('@/components/Pages/Dasboard/Option'));

import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { apiEndpoints, appURL } from '@/server_api/config/api.endpoints';

const Home: FC<{ requestedData: any, host: string }> = ({ requestedData, host }) => {

  const dashboardData = useMemo(() => {
    if ((requestedData as any)?.data) {
      return {
        slider: (requestedData as any).data?.slider || [],
        newCollection: (requestedData as any).data?.new_collection || [],
        collectionBanners: (requestedData as any).data?.collection_banners || [],
        trendingCategories: (requestedData as any).data?.trending_categories || [],
        trendingProducts: (requestedData as any).data?.trending_products || [],
        highlights: (requestedData as any).data?.highlights || [],
        midBanners: (requestedData as any).data?.mid_banners || [],
        aboutUs: (requestedData as any).data?.about_us || [],
        newsLetter: (requestedData as any).data?.newsletter || [],
        getInspired: (requestedData as any).data?.get_inspired || [],
        footerPoints: (requestedData as any).data?.footer_points || [],
        meta: (requestedData as any).data?.meta_data || [],
      }
    } else {
      return {
        slider: [],
        newCollection: [],
        collectionBanners: [],
        topCategories: [],
        trendingProducts: [],
        highlights: [],
        midBanners: [],
        aboutUs: [],
        newsLetter: [],
        getInspired: [],
        footerPoints: [],
        meta: {}
      }
    }
  }, [requestedData]);

  return (
    <Fragment>
      <Head>
        <title>{dashboardData?.meta.meta_title}</title>
        <meta name='description' content={dashboardData?.meta.meta_description} />
        <meta property="og:type" content="website" />
        <meta name="og_site_name" property="og:site_name" content={appURL} />
        <meta name="og_title" property="og:title" content={dashboardData?.meta?.og_title} />
        <meta property="og:url" content={`${host}/faq`} />
        <meta property="og:description" content={`${dashboardData?.meta.og_description} on Zaiba`} />
        <meta name="og_image" property="og:image" itemProp="image" content={dashboardData?.meta?.meta_image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        <meta name="twitter:site" content={`${host}/faq`} />
        <meta name="twitter:title" content={dashboardData?.meta.twitter_title} />
        <meta name="twitter:description" content={`${dashboardData?.meta.twitter_description} on Zaiba`} />
        <meta name="twitter:image" content={dashboardData?.meta.thumbnail_image} />
        <meta name="twitter:domain" content={`${appURL}`} />
      </Head>
      <MainLayout>
        <Banner sliders={dashboardData.slider} />

        <NewCollections newCollection={dashboardData.newCollection} />

        <FeaturedProducts collectionBanners={dashboardData.collectionBanners} />

        <ShopCategory trendingCategories={dashboardData.trendingCategories} />

        <TrendingProducts trendingProducts={dashboardData.trendingProducts} />

        <Highlights highlights={dashboardData.highlights} />

        <GuideSection midBanners={dashboardData.midBanners} />

        <HomeAbout aboutUs={dashboardData.aboutUs} />

        <JoinClub newsLetter={dashboardData.newsLetter} />

        <GetInspired getInspired={dashboardData.getInspired} />

        <Option footerPoints={dashboardData.footerPoints} />
      </MainLayout>
    </Fragment>
  )
}

export default Home;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const retVal = await FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.homePageData });
    if (retVal && (retVal as any).status === false) {
      return {
        redirect: {
          destination: '/no-data-found',
          permanent: false,
        }
      };
    } else if (retVal) {
      return {
        props: {
          requestedData: retVal,
          host: (context as any).req.headers.host
        }
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      redirect: {
        destination: '/error-page',
        permanent: false,
      }
    };
  }
  return {
    redirect: {
      destination: '/error-page',
      permanent: false,
    }
  };
}
