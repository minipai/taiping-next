import Layout from '../components/Layout'
import { queryHomepage } from 'api/graphql'

export default function Home(props) {
  const { data } = props
  const Hero = (
    <section className="site-hero">
      <img src={data.hero_image.url} alt="" />
    </section>
  )
  return <Layout data={data} topComponent={Hero} />
}

export async function getStaticProps() {
  const homepage = await queryHomepage()

  return {
    props: {
      data: homepage,
    },
  }
}
