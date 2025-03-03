import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  
    function TranslateClick(lang){
      i18n.changeLanguage(lang);
      setCurrentLang(lang);
    }
    const [data,setData] = useState([
      {
        id:1,
        img:"/src/assets/MYbhN8KaaEc.png",
        name:t("blog.text4"),
        desc:t("blog.desc2"),
      },
      {
        id:2,
        img:"/src/assets/MYbhN8KaaEc (1).png",
        name:t("blog.text5"),
        desc:t("blog.desc3"),
      },
      {
        id:3,
        img:"/src/assets/MYbhN8KaaEc (2).png",
        name:t("blog.text6"),
        desc:t("blog.desc4"),
      },
      {
        id:4,
        img:"/src/assets/MYbhN8KaaEc.png",
        name:t("blog.text4"),
        desc:t("blog.desc2"),
      },
      {
        id:5,
        img:"/src/assets/MYbhN8KaaEc (1).png",
        name:t("blog.text5"),
        desc:t("blog.desc3"),
      },
      {
        id:6,
        img:"/src/assets/MYbhN8KaaEc (2).png",
        name:t("blog.text6"),
        desc:t("blog.desc4"),
      },
    ])
  return (
    <div>
      <div className='w-[90%] m-auto'>
        <h1 className='text-[gray] mt-[40px]'>{t("blog.home")} / <span className='text-black'>{t("blog.text1")}</span></h1>
        <div>
          <h1 className='text-[3rem] mt-[30px] font-bold text-center'>{t("blog.text1")}</h1>
          <div>
            <button className='p-[25px_50px] mt-[40px] rounded-md bg-[#ED7212] text-[white] mr-[30px]'>{t("blog.btn.text1")}</button>
            <button className='p-[25px_50px] mt-[40px] rounded-md bg-[#ED7212] text-[white] mr-[30px]'>{t("blog.btn.text1")}</button>
            <button className='p-[25px_50px] mt-[40px] rounded-md bg-[#ED7212] text-[white] mr-[30px]'>{t("blog.btn.text1")}</button>
            <button className='p-[25px_50px] mt-[40px] rounded-md bg-[#ED7212] text-[white] mr-[30px]'>{t("blog.btn.text1")}</button>
            <button className='p-[25px_50px] mt-[40px] rounded-md bg-[#ED7212] text-[white] mr-[30px]'>{t("blog.btn.text1")}</button>
            <button className='p-[25px_50px] mt-[40px] rounded-md bg-[#ED7212] text-[white] mr-[30px]'>{t("blog.btn.text1")}</button>
          </div>
        </div>
        <div className='mt-[40px]'>
          <h1>{t("blog.text2")}</h1>
          <p>____________________________________________________________________________________________________________________________________________________________________________________________________________</p>
        </div>
        <div className='flex justify-between mt-[3rem]'>
          <img src="/src/assets/WorldImg.png" alt="" />
          <div className='w-[40%]'>
            <h1 className='text-[1.5rem] font-bold mb-[40px]'>{t("blog.text3")}</h1>
            <p className='text-[1.2rem] text-gray-600'>{t("blog.desc1")}</p>

            <div className='flex justify-between w-[43%] mt-[30px] items-center'>
              <img src="/src/assets/Group 97.png" alt="" />
              <div>
                <h1 className='font-bold'>AMAZMARKETS</h1>
                <p>October 2, 2019 4 claps</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[40px]'>
          <h1>{t("blog.text4")}</h1>
          <p>____________________________________________________________________________________________________________________________________________________________________________________________________________</p>
        </div>
        <div className='flex justify-between mt-[50px] flex-wrap'>
          {
            data?.map((el)=>{
              return <Link to={"/blog/"+el.id} className='w-[400px] mb-[50px]'>
                <img src={el.img} alt="" />
                <h1 className='font-bold text-[2rem] mb-[40px]'>{el.name}</h1>
                <h1 className='text-[1.2rem] font-normal text-gray-700 h-[100px]'>{el.desc}</h1>
              <div className='flex justify-between w-[230px] mt-[30px] items-center'>
              <img src="/src/assets/Group 97.png" alt="" />
              <div>
                <h1 className='font-bold'>AMAZMARKETS</h1>
                <p>October 2, 2019 4 claps</p>
              </div>
            </div>
              </Link>
            })
          }
          <div className='flex w-[400px] m-auto mt-[40px] justify-center'>
            <img src="/src/assets/Screenshot 2025-03-03 092527.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog