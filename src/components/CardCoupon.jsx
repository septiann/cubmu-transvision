import React, { useEffect, useState } from 'react';
import Button from './Button';

import { useDispatch, useSelector } from 'react-redux';
import { fetchDataCoupon } from '../actions/actions';
import moment from 'moment';
import 'moment/locale/id';
import Loader from './Loader';
import styles from '../style';
import Category from './Category';
import { AnimatePresence, motion } from 'framer-motion';
import CategoryDesktop from './CategoryDesktop';
moment.locale('id');

const CardCoupon = () => {
  const dispatch = useDispatch();
  const coupon = useSelector((state) => state.data.data);
  const isLoading = useSelector((state) => state.data.isLoading);
  const error = useSelector((state) => state.data.error);
  const [active, setActive] = useState(null);

  const handleClickCategory = (id) => {
    setActive(id);

    dispatch(fetchDataCoupon(id));
  };
  
  useEffect(() => {
    dispatch(fetchDataCoupon(active));
  }, [dispatch]);

  return (
    <>
      <CategoryDesktop active={active} handleClick={handleClickCategory} />
      <div className={`${styles.paddingX} w-full flex flex-col justify-between items-center pt-8 lg:pt-5 pb-24 gap-5 relative lg:grid lg:grid-cols-3 lg:px-56`}>
        <Category active={active} handleClick={handleClickCategory} />
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {coupon.result?.length == 0 ? (<h4 className='text-white'>Data is empty</h4>) : null}
        <AnimatePresence>
          {coupon.result?.map((item, index) => (
            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)" }}
              className='flex lg:flex-col lg:w-full'
              key={item.couponId}
            >
              <img src={item.couponBrandLogo} alt={item.couponName} className='w-[40%] rounded-l md:rounded-bl-none md:rounded-t md:w-full' />
              <div className='w-full flex flex-col justify-between pt-3 pb-4 px-4 bg-white rounded-r md:rounded-tr-none md:rounded-b lg:gap-2'>
                <h4 className={`font-mulish font-[700] text-primary text-[16px] lg:text-[20px]`}>{item.couponName}</h4>
                <div className='flex items-center gap-2 leading-none'>
                  <h5 className={`font-inter font-[600] text-secondary text-[25px]`}>{item.couponBenefitValue}</h5>
                  {item.couponBenefitType === 'Buy 1 Get 1' ? null : (
                    <h4 className={`font-inter font-[500] text-grey2 text-[16px]`}>{item.couponBenefitType}</h4>
                  )}
                </div>
                <h6 className={`font-mulish font-[400] text-grey3 text-[10px] lg:text-[12px]`}>Promo sampai {moment(item.couponEndDate).format("DD MMMM YYYY")}</h6>
                <Button data={item} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default CardCoupon