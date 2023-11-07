import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@/src/components/common/Layout'), { ssr: false });
const HomeLayout = dynamic(() => import('@/src/components/home/HomeLayout'), { ssr: false });

function HomeContainer() {
  return (
    <Layout>
      <HomeLayout />
    </Layout>
  );
}

export default HomeContainer;
