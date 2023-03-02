import React, { useState } from 'react'
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

const Button = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={`w-full text-white font-mulish font-[700] text-[12px] py-1 rounded ${props.data.couponStatus != 'active' ? 'bg-dimGrey' : 'bg-secondary'} lg:py-2 lg:text-[16px]`} disabled={props.data.couponStatus != 'active' ? 1 : 0} onClick={() => setShowModal(true)}>
          Tukarkan
      </button>
      {showModal ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none lg:hidden'>
            <div className='relative w-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-screen h-screen'>
                <div className='w-full'>
                  <img src={props.data.couponBrandLogo} alt={props.data.couponName} />
                </div>
                <div className="absolute bottom-0 w-full p-6 flex-auto flex flex-col rounded-t-3xl border-2 bg-white h-[60vh] justify-between">
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className={`font-inter font-[600] text-[#14142B] text-[18px]`}>{props.data.couponName}</h4>
                      <h6 className={`font-inter font-[400] text-grey4 text-[10px]`}>Promo sampai {moment(props.data.couponEndDate).format("DD MMMM YYYY")}</h6>
                    </div>
                    <div>
                      <h5 className={`font-inter font-[600] text-secondary text-[26px]`}>{props.data.couponBenefitValue}</h5>
                    </div>
                  </div>
                  <div className='my-5 flex flex-col items-center justify-center w-full gap-3'>
                    <h4 className={`font-inter font-[600] text-secondary text-[18px] w-3/4 text-center`}>Coupon Successfully Redeemed</h4>
                    <h6 className={`font-inter font-[400] text-grey4 text-[14px]`}>12:30 PM</h6>
                  </div>
                  <div className='w-full'>
                    <button className={`w-full text-white font-mulish font-[700] text-[12px] py-3 rounded-lg bg-secondary`} onClick={() => setShowModal(false)}>
                      DONE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="justify-center items-center md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none xs:hidden">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[843px] bg-white outline-none focus:outline-none rounded-l-[32px] rounded-r-[32px]">
                <div className="relative flex">
                  <img src={props.data.couponBrandLogo} alt={props.data.couponName} className={`max-w-[343px] rounded-l-[32px]`} />
                  <div className='flex flex-col py-5 px-6 w-full rounded-r-[32px] justify-between'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h4 className={`font-inter font-[600] text-[#14142B] text-[22px]`}>{props.data.couponName}</h4>
                        <h6 className={`font-inter font-[400] text-grey4 text-[14px]`}>Promo sampai {moment(props.data.couponEndDate).format("DD MMMM YYYY")}</h6>
                      </div>
                      <div>
                        <h5 className={`font-inter font-[600] text-secondary text-[32px]`}>{props.data.couponBenefitValue}</h5>
                      </div>
                    </div>
                    <div className='my-5 flex flex-col items-center justify-center w-full gap-3'>
                      <h4 className={`font-inter font-[600] text-secondary text-[22px] w-3/4 text-center`}>Coupon Successfully Redeemed</h4>
                      <h6 className={`font-inter font-[400] text-grey4 text-[16px]`}>12:30 PM</h6>
                    </div>
                    <div className='w-full'>
                      <button className={`w-full text-white font-mulish font-[700] text-[12px] py-3 rounded-lg bg-secondary`} onClick={() => setShowModal(false)}>
                        DONE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Button