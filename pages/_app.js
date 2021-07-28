import '../styles/globals.css'
import '../styles/layout.css'

if (typeof window !== 'undefined' && 'serviceWorker' in window.navigator) {
  caches.keys().then(function (cacheNames) {
    cacheNames.forEach(function (cacheName) {
      caches.delete(cacheName)
    })
  })
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
