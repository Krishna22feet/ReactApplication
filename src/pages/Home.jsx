import { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import TrustedBy from '../components/home/TrustedBy'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import FinalCTA from '../components/home/FinalCTA'

const Home = () => {
  const [hero, setHero] = useState(null)
  const [trustedBy, setTrustedBy] = useState(null)
  const [features, setFeatures] = useState(null)
  const [howItWorks, setHowItWorks] = useState(null)
  const [finalCta, setFinalCta] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          'https://grateful-vitality-e1cd126cc2.strapiapp.com/api/home-page' +
            '?populate[hero][populate]=image' +
            '&populate[trustedBy][populate][logos][populate]=image' +
            '&populate[trustedBy][populate]=metrics' +
            '&populate[features][populate]=items' +
            '&populate[howitworks][populate]=steps' +
            '&populate[finalcta][populate]=metaItems'
        )

        const json = await res.json()

        setHero(json.data.hero)
        setTrustedBy(json.data.trustedBy?.[0] ?? null)
        setFeatures(json.data.features)
        setHowItWorks(json.data.howitworks ?? null)
        setFinalCta(json.data.finalcta ?? null)
      } catch (err) {
        console.error('Failed to load home page:', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) return <div>Loading…</div>

  return (
    <>
      <Hero hero={hero} />
      <TrustedBy trustedBy={trustedBy} />
      <Features features={features} />
      <HowItWorks howItWorks={howItWorks} />
      <Testimonials />
      <FinalCTA finalCta={finalCta} />
    </>
  )
}

export default Home