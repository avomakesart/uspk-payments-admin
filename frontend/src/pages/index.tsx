import Head from 'next/head';
import { SideBarLayout, Grid, Card } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard - USPK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideBarLayout sectionTitle='Dashboard'>
        <Grid mobileCols='2' cols='3'>
          <Card cardTitle='Pedidos'>hello</Card>
          <Card>hello</Card>
          <Card>hello</Card>
        </Grid>
      </SideBarLayout>
    </>
  );
}
