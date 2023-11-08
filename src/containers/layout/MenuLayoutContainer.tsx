import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@/src/components/common/Layout'), { ssr: false });
const CalendarsLayout = dynamic(() => import('@/src/components/layout/CalendarsLayout'), { ssr: false });
const DiaryLayout = dynamic(() => import('@/src/components/layout/DiaryLayout'), { ssr: false });
const GoalsLayout = dynamic(() => import('@/src/components/layout/GoalsLayout'), { ssr: false });
const SelfAffirmLayout = dynamic(() => import('@/src/components/layout/SelfAffirmLayout'), { ssr: false });

function MenuLayoutContainer() {
  const router = useRouter();
  const { menu } = router.query;

  const switchLayout = (menu: string | string[] | undefined) => {
    switch (menu) {
      case 'calendars':
        return <CalendarsLayout />;
      case 'goals':
        return <GoalsLayout />;
      case 'diary':
        return <DiaryLayout />;
      case 'self-affirmations':
        return <SelfAffirmLayout />;
    }
  };

  return <Layout>{switchLayout(menu)}</Layout>;
}

export default MenuLayoutContainer;
