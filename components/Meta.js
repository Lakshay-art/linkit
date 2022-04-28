import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      {/* <link rel='icon' href='/favicon.ico' /> */}
      <link rel="icon" href="/icon2.png"></link>
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Linkerr',
  keywords: 'websites, share ,links',
  description: 'Share your public links ,actually to the world',
}

export default Meta
