import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Kendal's Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Kendal Enz. I'm a fullstack software engineer with a background in communications, journalism and creative writing. I enjoy building websites and writing about harnessing the power of AI to assist with coding and writing tasks. I hold an MA in Writing with a Concentration in Fiction from Johns Hopkins University, a BA in Communications with a Concentration in Journalism from Hood College and a Certificate of Software Engineering from Fullstack Academy. I'm based in Brooklyn, NY, and when I'm not working, I enjoy going on long runs through the city.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}