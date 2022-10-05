import '../styles/globals.css'
import "../styles/ionicons.min.css"
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    
  <AnimatePresence>
  <motion.div key={router.route} initial ="pageInitial" animate = "pageAnimate" exit = "pageExit" variants = {{
    pageInitial: {
      height: 0,
    },
    pageAnimate : {
      height: "100%",
    },
    pageExit: {
      height: 0,
    }

  }} >
<Component {...pageProps} />
  </motion.div>
  </AnimatePresence>
  )
}

export default MyApp
