import styles from './style';

import { Navbar, Content, Category, Footer } from './components';

const App = () => (
  <div className='bg-blackBackground w-full'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingY} ${styles.flexStart} pb-0`}>
      <div className={`${styles.boxWidth}`}>
        <Content />
      </div>
    </div>

    <div className={`bg-blackBackground ${styles.paddingX} ${styles.paddingY} ${styles.flexStart} lg:pt-10 lg:pb-8`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
)

export default App