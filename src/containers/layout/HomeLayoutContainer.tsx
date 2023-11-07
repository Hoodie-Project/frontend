import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@/src/components/common/Layout'), { ssr: false });
const HomeLayout = dynamic(() => import('@/src/components/layout/HomeLayout'), { ssr: false });

function HomeLayoutContainer() {
  return (
    <Layout>
      <HomeLayout />
    </Layout>
  );
}

export default HomeLayoutContainer;
