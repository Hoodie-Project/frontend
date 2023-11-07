import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@/src/components/common/Layout'), { ssr: false });

const MenuPage = () => {
  const router = useRouter();
  const { menu } = router.query;

  return (
    <Layout>
      {/* TODO 나중에 메뉴 컨테이너별로 분류하여 각각 Layout 설정 */}
      <h1>{menu}</h1>
      {/* TODO 여기에 메뉴 이름에 따른 컨텐츠를 렌더링 */}
      해당 페이지는 개발 중인 페이지입니다.
    </Layout>
  );
};

export default MenuPage;
