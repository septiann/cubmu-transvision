import React, { useState, useEffect } from 'react'
import styles from '../style'
import axios from 'axios';
import icon_spoon_fork from '../assets/icon-spoon-fork.svg'

const CategoryDesktop = ({ active, handleClick }) => {
  const [dataCategory, setDataCategory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://requestly.dev/api/mockv2/getAllCategory?username=user1673281842743')
      .then((response) => {
        setDataCategory(response.data);
      })
      .catch((error) => {
        setError(error);
      })
  }, []);

  if (error) {
    return <div>Error: ${error}</div>;
  }

  return (
    <div className={`${styles.paddingX} w-full mt-8 text-white md:flex xs:hidden lg:px-56`}>
      <div
        className={`bg-[#1E1F26] flex items-center justify-center py-5 ${active === null ? "text-white" : "text-[#B1B2B3]"} font-mulish font-[600] w-[160px] hvr-overline-from-left`}
        style={{ boxShadow: active === null ? "inset 0px -3px 0px #DF4949" : "inset 0px -3px 0px #68696A" }}>
        <button className='flex items-center gap-2' onClick={() => handleClick(null)}>
          <img src={icon_spoon_fork} alt='icon_spoon_fork' />
          All
        </button>
      </div>
      {dataCategory.result?.map((item, index) => (
        <div
          key={item.categoryId}
          className={`bg-[#1E1F26] flex items-center justify-center py-5 ${active === item.categoryId ? "text-white" : "text-[#B1B2B3]"} font-mulish font-[600] w-[160px] hvr-overline-from-left`}
          style={{ boxShadow: active === item.categoryId ? "inset 0px -3px 0px #DF4949" : "inset 0px -3px 0px #68696A" }}>
          <button className='flex items-center gap-2' onClick={() => handleClick(item.categoryId)}>
            <img src={icon_spoon_fork} alt='icon_spoon_fork' />
            {item.categoryName}
          </button>
        </div>
      ))}
    </div>
  )
}

export default CategoryDesktop