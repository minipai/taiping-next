import '../styles/globals.css'
import '../styles/layout.css'

if (typeof window !== 'undefined' && 'serviceWorker' in window.navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
