import Head from 'next/head';
import HomeContainer from '../containers/home/HomeContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hoodie Plan</title>
        <meta name='description' content='Copyright © 2023 Team Hoodie All rights reserved' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <HomeContainer />
    </>
  );
}
