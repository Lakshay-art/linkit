import Head from 'next/head'

const Meta = ({ title, keywords, description,ogimage }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <meta property="og:image" content={ogimage} />
      {/* <link rel='icon' href='/favicon.ico' /> */}
      <link rel="icon" href={ogimage}></link>
      <link rel="apple-touch-icon" href={ogimage}></link>
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Linkerr',
  keywords: 'websites, share ,links',
  description: 'Share your public links to the world',
  ogimage:"/icon2.png"
}

export default Meta
