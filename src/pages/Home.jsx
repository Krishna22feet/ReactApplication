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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  const loadData = async () => {
    try {
      const res = await fetch(
        'https://grateful-vitality-e1cd126cc2.strapiapp.com/api/home-page' +
        '?populate[hero][populate]=image' +
        '&populate[trustedBy][populate][logos][populate]=image' +
        '&populate[trustedBy][populate]=metrics'
      )

      const json = await res.json()

      setHero(json.data.hero)
      setTrustedBy(json.data.trustedBy?.[0] ?? null)
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
      <Features />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  )
}

export default Home