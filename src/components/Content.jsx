import React from 'react'
import styles from '../style';

import CardCoupon from './CardCoupon';

const Content = () => {
  return (
    <div className=''>
        <h6 className={`font-raleway font-[700] text-[26px] text-white pt-4 lg:pt-0 ${styles.paddingX} lg:px-56`}>Benefit Kupon Untuk Kamu</h6>

        <CardCoupon />
    </div>
  )
}

export default Content