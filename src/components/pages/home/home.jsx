import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Leave from '../Leave/leave';
import { TextField } from '@mui/material';
const Home = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  }

  const data = useMemo(() => [
    { 
      name: "Flagman_Shop",
      img: "/src/assets/united-states (1) 1.png",
      market: "US",
      type: t("typeProducts"),
      age: "2019",
      reviews: `6 ${t("th5")}`,
      ratio: `100% ${t("positive")}`,
      price: "$1 000"
    },
    { 
      name: "Health Care Direct UK",
      img: "/src/assets/united-states (1) 1.png",
      market: "US",
      type: t("typeProducts"),
      age: "2019",
      reviews: `6 ${t("th5")}`,
      ratio: `100% ${t("positive")}`,
      price: "$1 000"
    },
    { 
      name: "Flagman_Shop",
      img: "/src/assets/united-states (1) 1.png",
      market: "US",
      type: t("typeProducts"),
      age: "2019",
      reviews: `6 ${t("th5")}`,
      ratio: `100% ${t("positive")}`,
      price: "$1 000"
    },
    { 
      name: "Health Care Direct UK",
      img: "/src/assets/united-states (1) 1.png",
      market: "US",
      type: t("typeProducts"),
      age: "2019",
      reviews: `6 ${t("th5")}`,
      ratio: `100% ${t("positive")}`,
      price: "$1 000"
    },
    { 
      name: "Flagman_Shop",
      img: "/src/assets/united-kingdom 1.png",
      market: "GB",
      type: t("typeProducts"),
      age: "2019",
      reviews: `6 ${t("th5")}`,
      ratio: `100% ${t("positive")}`,
      price: "$1 000"
    },
    { 
      name: "Health Care Direct UK",
      img: "/src/assets/united-kingdom 1 (1).png",
      market: "GB",
      type: t("typeProducts"),
      age: "2019",
      reviews: `6 ${t("th5")}`,
      ratio: `90% ${t("positive")}`,
      price: "$1 000"
    },
    { 
      name: "Flagman_Shop",
      img: "/src/assets/united-kingdom 1 (1).png",
      market: "GB",
      type: t("typeProducts"),
      age: "2019",
      reviews: `6 ${t("th5")}`,
      ratio: `87% ${t("positive")}`,
      price: "$1 000"
    },
    { 
      name: "Health Care Direct UK",
      img: "/src/assets/united-kingdom 1 (1).png",
      market: "GB",
      type: t("typeProducts"),
      age: "2019",
      reviews: `6 ${t("th5")}`,
      ratio: `80% ${t("positive")}`,
      price: "$1 000"
    }
  ], [t, currentLang]);

  return (
    <div>
      <div className='w-[100%] flex-wrap bg-[#0B0D11] relative [clip-path:ellipse(170%_99%_at_50%_0%)]'>
        <div className='w-[80%] m-auto flex flex-wrap justify-between pt-[30px] pb-[50px]'>
          <div className='w-[40%] lg:text-start text-center'>
            <h1 className='text-white mb-[20px] pt-[40px] text-[2rem] font-bold'>{t("home.text1")}</h1>
            <p className='text-gray-400 text-[1.5rem] font-bold'>{t("home.text2")}</p>
            <button className='bg-orange-600 text-[white] mt-[30px] p-[10px_20px] rounded-md'>
              <ArrowCircleRightIcon sx={{ fontSize: "2rem", color: "white" }} /> {t("home.btn")}
            </button>
            <div className='flex w-[70%] mt-[2rem] justify-between mb-[40px]'>
              <div className='flex mr-[2rem] w-[50%] justify-between'>
                <img src="/src/assets/facebook-logo (1).png" alt="" />
                <img src="/src/assets/instagram-logo.png" alt="" />
                <img src="/src/assets/linkedin-logo 1.png" alt="" />
                <img src="/src/assets/instagram-logo (1).png" alt="" />
              </div>
              <div className='flex w-[50%] justify-between'>
                <img src="/src/assets/facebook-logo (2).png" alt="" />
                <img src="/src/assets/instagram-logo (2).png" alt="" />
                <img src="/src/assets/linkedin-logo (2).png" alt="" />
                <img src="/src/assets/instagram-logo (3).png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <img className='relative lg:w-[580px] md:ml-[50px]  md:w-[400px]' src="/src/assets/Mackbook Pro Mockup 1.png" alt="" />
            <div className='lg:w-[300px] md:mt-[-15rem]  mt-[-20rem] p-[15px] ml-[8rem]' style={{ backgroundImage: "url('/src/assets/Ellipse 501 (2).png')", backgroundSize: "cover", backgroundPosition: "center", height: "297px" }}>
              <div className='w-[270px]' style={{ backgroundImage: "url('/src/assets/Ellipse 501 (2).png')", backgroundSize: "cover", backgroundPosition: "center", height: "270px", paddingTop: "240px", padding: "10px" }}>
                <div className='w-[240px]' style={{ backgroundImage: "url('/src/assets/Ellipse 501 (1).png')", backgroundSize: "cover", backgroundPosition: "center", height: "240px", marginTop: "3px", marginLeft: "5px" }}>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center w-[100px] m-auto'>
          <img src="/src/assets/Screenshot 2025-03-02 111026.png" alt="" />
        </div>
      </div>

      <div className='w-[80%] m-auto mt-[100px]'>
        <h1 className='text-[2rem] font-bold text-center w-[450px] m-auto'>{t("home.text3")}</h1>
        <div className='flex flex-wrap justify-between mt-[50px]'>
          <div className='w-[400px] text-center flex-wrap'>
            <h1 className='text-[2rem] font-bold text-center mb-[40px]'>{t("home.card1.name")}</h1>
            <div className='p-[2rem] bg-[white] text-center rounded-2xl w-[350px] h-[530px] justify-center shadow'>
              <img src="/src/assets/image 29.png" alt="" />
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card1.text1")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card1.text2")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card1.text3")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card1.text4")}</p>
            </div>
          </div>
          <div className='w-[400px] text-center flex-wrap'>
            <h1 className='text-[2rem] font-bold text-center mb-[40px]'>{t("home.card2.name")}</h1>
            <div className='p-[2rem] bg-[white] text-center rounded-2xl w-[350px] h-[530px] justify-center shadow'>
              <img src="/src/assets/image 30.png" alt="" />
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card2.text1")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card2.text2")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card2.text3")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card2.text4")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card2.text5")}</p>
            </div>
          </div>
          <div className='w-[400px] text-center flex-wrap'>
            <h1 className='text-[2rem] font-bold text-center mb-[40px]'>{t("home.card3.name")}</h1>
            <div className='p-[2rem] bg-[white] text-center rounded-2xl w-[350px] h-[530px] justify-center shadow'>
              <img src="/src/assets/image 31.png" alt="" />
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card3.text1")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card3.text2")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card3.text3")}</p>
              <p className='text-[20px] mb-[10px] text-[gray]'>{t("home.card3.text4")}</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between text-start mt-[60px] flex-wrap'>
          <div className='w-[200px]'>
            <h1 className='text-[4.5rem] font-normal'>13</h1>
            <p className='text-[1.2rem] text-start font-bold'>{t("home.count.text1")}</p>
          </div>
          <div className='w-[200px]'>
            <h1 className='text-[4.5rem] font-normal'>175+</h1>
            <p className='text-[1.2rem] text-start w-[150px] font-bold'>{t("home.count.text2")}</p>
          </div>
          <div className='w-[200px]'>
            <h1 className='text-[4.5rem] font-normal'>180+</h1>
            <p className='text-[1.2rem] text-start font-bold'>{t("home.count.text3")}</p>
          </div>
          <div className='w-[200px]'>
            <h1 className='text-[4.5rem] font-normal'>30+</h1>
            <p className='text-[1.2rem] text-start w-[150px] font-bold'>{t("home.count.text4")}</p>
          </div>
        </div>
      </div>
      <div className='w-[80%] ml-[19rem] z-0 ' style={{ backgroundImage: "url('src/assets/Polygon 15.png')", backgroundSize: "cover", backgroundPosition: "center", height: "2163.1743039213275px" }}>
        <h1 className='text-center pt-[15rem] text-[3rem] font-medium'>{t("home.text4")}</h1>
        <div className="w-full p-6 mb-[10rem]">
          <h2 className="text-xl font-semibold mb-4">{t("home.text5")}</h2>
          <div className="bg-white mr-[50px] shadow-md rounded-lg overflow-hidden">
            <table className="w-[100%] pr-[100px]">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                <tr>
                  <th className="p-[20px_15px] text-start font-normal text-[18px] text-gray-400">{t("home.table.th1")}</th>
                  <th className="p-[20px_15px] text-start font-normal text-[18px] text-gray-400">{t("home.table.th2")}</th>
                  <th className="p-[20px_15px] text-start font-normal text-[18px] text-gray-400">{t("home.table.th3")}</th>
                  <th className="p-[20px_15px] text-start font-normal text-[18px] text-gray-400">{t("home.table.th4")}</th>
                  <th className="p-[20px_15px] text-start font-normal text-[18px] text-gray-400">{t("home.table.th5")}</th>
                  <th className="p-[20px_15px] text-start font-normal text-[18px] text-gray-400">{t("home.table.th6")}</th>
                  <th className="p-[20px_15px] text-start font-normal text-[18px] text-gray-400">{t("home.table.th7")}</th>
                  <th className="p-[20px_15px] text-start font-normal text-[18px] text-gray-400">{t("home.table.th8")}</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index} className="border-gray-200 border-b hover:bg-gray-50">
                    <td className="p-6">{item.name}</td>
                    <td className="p-6 flex items-center">
                      <img className='w-[20px] mr-[10px]' src={item.img} alt="" /> {item.market}
                    </td>
                    <td className="p-6">{item.type}</td>
                    <td className="p-6">{item.age}</td>
                    <td className="p-6">{item.reviews}</td>
                    <td className="p-6">{item.ratio}</td>
                    <td className="p-6 font-bold">{item.price}</td>
                    <td className="p-6 text-blue-500 cursor-pointer">
                      More Info <KeyboardArrowDownIcon />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
              To learn more about the process click here
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
              Interested in Selling Account Visit page
            </button>
          </div>
        </div>
      <div className='w-[50%] z-10 lg:flex  justify-between'  style={{ backgroundImage: "url('/src/assets/Ellipse 312.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", height: "600px" }}>
        <div className='w-[100%] pt-[100px] pl-[100px]'  style={{ backgroundImage: "url('/src/assets/айфон1 1.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", height: "600px" }}>
        <div className='w-[230px] flex justify-around items-center ml-[100px] pb-[3px] h-[68px] pl-[5px] border p-1 bg-[white] rounded-full'>
          <img src="/src/assets/Ellipse 313.png" alt="" />
          <div>
            <h1 className='font-bold'>{t("home.text6")}</h1>
            <h1 className='font-bold text-[gray]'>22/10/19 - 3:15 PM</h1>
          </div>
        </div>
        <div className='w-[230px] mt-[80px] flex justify-around items-center ml-[-100px] pb-[3px] h-[68px] pl-[5px] border p-1 bg-[white] rounded-full'>
          <img src="/src/assets/Ellipse 313 (1).png" alt="" />
          <div>
            <h1 className='font-bold'>{t("home.text7")}</h1>
            <h1 className='font-bold text-[gray]'>25/11/20 - 8:15 PM</h1>
          </div>
        </div>
        <div className='w-[230px] flex justify-around items-center ml-[200px] mt-[100px] pb-[3px] h-[68px] pl-[5px] border p-1 bg-[white] rounded-full'>
          <img src="/src/assets/Ellipse 313 (2).png" alt="" />
          <div>
            <h1 className='font-bold'>{t("home.text8")}</h1>
            <h1 className='font-bold text-[gray]'>1/01/20 - 6:20 PM</h1>
          </div>
        </div>
        </div>
        <div>
          <h1 className='text-[2rem] mb-[40px] font-bold'>{t("home.text9")}</h1>
          <div className='w-[500px] ml-[50px] mb-[40px] p-4 flex items-start rounded-md shadow-md'>
            <img className='mr-[30px]' src="/src/assets/verified-account 1.png" alt=""  />
            <div className='w-[300px]'>
              <h1 className='text-[1.2rem] mt-[10px] mb-[10px] font-bold'>{t("home.card.card1.name")}</h1>
              <p>{t("home.card.card1.desc")}</p>
            </div>
          </div>
          <div className='w-[500px] ml-[50px] mb-[40px] p-4 flex items-start rounded-md shadow-md'>
            <img className='mr-[30px]' src="/src/assets/verified-account 2.png" alt="" />
            <div>
              <h1 className='text-[1.2rem] mt-[10px] mb-[10px] font-bold'>{t("home.card.card2.name")}</h1>
              <p>{t("home.card.card2.desc")}</p>
            </div>
          </div>
          <div className='w-[500px] ml-[50px] mb-[40px] p-4 flex items-start rounded-md shadow-md'>
            <img className='mr-[30px]' src="/src/assets/verified-account 3.png" alt="" />
            <div>
              <h1 className='text-[1.2rem] mt-[10px] mb-[10px] font-bold'>{t("home.card.card3.name")}</h1>
              <p>{t("home.card.card3.desc")}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='w-[80%] m-auto mt-[100px]'>
      <section className="w-full px-6 py-10 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        
        <div className="md:w-1/2 space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {t("home.text10")}
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              {t("home.desc")}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <img 
                src="/src/assets/wifi 1.png" 
                alt="Work around the world" 
                className="w-10 h-10 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                {t("home.wcard1.name")}
                </h3>
                <p className="text-gray-500">
                {t("home.wcard1.desc")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              
              <img 
                src="/src/assets/deal 1.svg" 
                alt="All types of selling" 
                className="w-10 h-10 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                {t("home.wife.card2.name")}
                </h3>
                <p className="text-gray-500">
                {t("home.wife.card2.desc")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img 
                src="/src/assets/money-bag 1.png" 
                alt="Money flow" 
                className="w-10 h-10 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                {t("home.wife.card3.name")}
                </h3>
                <p className="text-gray-500">
                {t("home.wife.card3.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='w-[70%] pl-[100px]'  style={{ backgroundImage: "url('/src/assets/image 2.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", height: "600px" }}>
        <div className='pt-[100px] ml-[10rem] w-[40%]'  style={{ backgroundImage: "url('/src/assets/image 3.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", width:"446px", height: "446.283538818359px" }}>
          <div className='pt-[100px] ml-[100px] w-[40%] '  style={{ backgroundImage: "url('/src/assets/image 4.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", width:"260px", height: "260.283538818359px" }}>
          <div className='pt-[100px] w-[40%] ml-[-200px] z-10 mt-[-50px]'  style={{ backgroundImage: "url('/src/assets/image 1.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", width:"402px", height: "405.283538818359px" }}>
          </div>
        </div>
          <div className=' z-20'>
          <div className="left-8  ml-[15rem] mt-[-24rem]  p-2 w-36">
            <p className="text-gray-800 w-[30px] text-center flex justify-center font-semibold p-[14px_25px] rounded-full border border-green-500">$350</p>
            <p className="text-sm text-gray-500 font-bold">To David Bills</p>
            <p className="text-xs text-gray-400 font-bold">12/08/2019 - 1:43 PM</p>
          </div>
          <div className="right-4 mt-[-40px] ml-[20px] p-2 w-36">
            <p className="text-gray-800 w-[30px] text-center flex justify-center font-semibold p-[14px_25px] rounded-full border border-green-500">$453</p>
            <p className="text-sm text-gray-500 font-bold">To Daniel R.</p>
            <p className="text-xs text-gray-400 font-bold">12/09/2020 - 6:43 AM</p>
          </div>

          <div className=" right-14 rounded-md ml-[25rem] p-2 w-36">
            <p className="text-gray-800 w-[30px] text-center flex justify-center font-semibold p-[14px_25px] rounded-full border border-green-500">$356</p>
            <p className="text-sm text-gray-500 font-bold">To Mike M.</p>
            <p className="text-xs text-gray-400 font-bold">12/09/2019 - 2:56 PM</p>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
      </div>
      <div className='w-[80%] m-auto mt-[100px] flex justify-between'style={{ backgroundImage: "url('/src/assets/Polygon 162.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", height: "600px" }} >
      <img src="/src/assets/Group 775.png" alt="" />
      <div className='w-[500px]'>
        <h1 className='text-[1.5rem] font-bold'>{t("home.text11")}</h1>
        <div className='mt-[60px]'>
          <div>
            <h1 className='text-[1.5rem] font-bold mb-[20px] mt-[20px]'>{t("home.new.card1.name")}</h1>
            <p>{t("home.new.card1.desc")}</p>
          </div>
          <div>
            <h1 className='text-[1.5rem] font-bold mb-[20px] mt-[20px]'>{t("home.new.card2.name")}</h1>
            <p>{t("home.new.card2.desc")}</p>
          </div>
        </div>
      </div>
      </div>
      <div className='w-[400px] m-auto'>
        <div className='w-[83px] m-auto mt-[100px] ml-[-30px] flex justify-between'style={{ backgroundImage: "url('/src/assets/Polygon 19.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", height: "83px" }}>
        </div>
        <div className='p-[20px] mb-[20px] mt-[-40px] bg-[white] w-[40rem] rounded-md shadow flex justify-between'>
          <h1>{t("home.newAmazon")}</h1>
          <KeyboardArrowDownIcon/>
        </div>
        <div className='p-[20px] mb-[20px]  bg-[white] w-[40rem] rounded-md shadow flex justify-between'>
          <h1>{t("home.newAmazon1")}</h1>
          <KeyboardArrowDownIcon/>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-8">Process</h2>
      <div className="flex flex-col w-[100%] flex-wrap m-auto md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold">1</div>
          <h3 className="text-lg font-medium mt-4">Check your account</h3>
          <p className="text-gray-600 mt-2 w-[200px] text-sm">Check the account of your choice via TeamViewer or Any Desk. You inspect the account from your end to confirm your selection.</p>
        </div>
        <img className='w-[120px] hidden md:block' src="/src/assets/down.png" alt="Step arrow" />
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold">2</div>
          <h3 className="text-lg font-medium mt-4">Payment</h3>
          <p className="text-gray-600 mt-2 w-[200px]  text-sm">We take a payment using your preferred method. We accept Payoneer, bank transfer and bitcoin.</p>
        </div>
        <img className='w-[120px] hidden md:block' src="/src/assets/up.png" alt="Step arrow" />
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold">3</div>
          <h3 className="text-lg font-medium mt-4">Account ownership</h3>
          <p className="text-gray-600 mt-2 w-[200px]  text-sm">We give you all the log in details to your new account. After that, you set up your own password and Two-Step authentication methods for your Amazon account and Virtual Proxy Server where your account is located.</p>
        </div>
        <img className='w-[120px] hidden md:block' src="/src/assets/down.png" alt="Step arrow" />
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold">4</div>
          <h3 className="text-lg font-medium mt-4">Account set up</h3>
          <p className="text-gray-600 mt-2 text-sm w-[200px] ">We help you set up the details like your deposit/change method, business address and legal entity on your Amazon account.</p>
        </div>
      </div>
    </div>
    <div>
          <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <img className="w-48 h-48 rounded-full object-cover" src="/src/assets/request.png" />
            <div className="md:ml-8 text-left">
              <div className="mt-4 flex items-center">
              <img src="/src/assets/1231242112 1.png" className='mr-[60px]' alt="" />
              <div>
              <h2 className="text-xl font-semibold">{t("home.leave")}</h2>
              <p className="text-gray-600 w-[300px] mt-2">{t("home.desc1")}</p>
              <TextField id="standard-basic" label={t("home.phoneNumber")} variant="standard" />
              <TextField id="standard-basic" label={t("home.email")} variant="standard" sx={{display:"block",marginTop:"20px",marginBottom:"20px"}}/>
              <TextField id="standard-basic" label={t("home.message")} variant="standard" sx={{marginBottom:"20px"}} />
                <textarea className="w-full p-2 border border-gray-300 rounded mt-2" placeholder={t("home.message")}></textarea>
                <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded">{t("home.send")}</button>
              </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold">{t("home.say")}</h2>
            <div className="mt-6 flex flex-col md:flex-row justify-center gap-8">
              <div className="max-w-sm p-4 border rounded-lg shadow-md">
                <img src="/src/assets/Ellipse 311 (1).png" alt="" />
                <div>
                <img className='ml-[5rem] mt-[-30px] pb-[1rem]' src="/src/assets/“ (1).png" alt="" />
                <p className="text-gray-600 italic">{t("home.lecture")}</p>
                <p className="mt-2 font-semibold">Steven Cody</p>
                </div>
              </div>
              <div className="max-w-sm p-4 border rounded-lg shadow-md">
              <img src="/src/assets/Ellipse 311.png" alt="" />
              <div>
              <img src="/src/assets/“ (1).png" alt="" className='ml-[5rem] mt-[-30px] pb-[1.2rem]' />
                  <p className="text-gray-600 italic">{t("home.Excellent")}</p>
                <p className="mt-2 font-semibold">Jason Luis</p>
                </div>
              </div>
            </div>
            <div className='w-[100px] m-auto mt-[30px]'>
            <img className='flex justify-center' src="/src/assets/Group 380.png" alt="" />
            </div>
          </div>
        </div>
        <div className='w-[80%] m-auto'>
          <div className='w-[120px] ml-[300px] pl-[100px] mt-[5rem]'  style={{ backgroundImage: "url('/src/assets/Polygon 20.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", height: "120px" }}> 
          <div className='w-[97px] pl-[87px] ml-[370px] mt-[20px]'  style={{ backgroundImage: "url('/src/assets/Polygon 20.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", height: "97px" }}> 
          </div>
          <div>
            <div className='w-[400px] rounded-md mb-[20px] p-[10px] shadow bg-[white] flex items-center justify-between rounded-m'>
              <img src="/src/assets/img 1.png" alt="" className='mr-[30px]' />
              <div>
                <h1 className='font-bold'>{t("home.bgImg.card1.name")}</h1>
                <p>{t("home.bgImg.card1.desc")}</p>
              </div>
              <KeyboardArrowDownIcon/>
            </div>
            <div className='w-[400px] rounded-md mb-[20px] p-[10px] shadow bg-[white] flex items-center justify-between'>
              <img src="/src/assets/img 2.png" alt="" className='mr-[30px]' />
              <div>
                <h1 className='font-bold'>{t("home.bgImg.card2.name")}</h1>
                <p>{t("home.bgImg.card2.desc")}</p>
              </div>
              <KeyboardArrowDownIcon/>
            </div>
            <div className='w-[400px] rounded-md mb-[20px] p-[10px] shadow bg-[white] flex items-center justify-between '>
              <img src="/src/assets/img3.png" alt="" className='mr-[30px]' />
              <div>
                <h1 className='font-bold'>{t("home.bgImg.card3.name")}</h1>
                <p>{t("home.bgImg.card3.desc")}</p>
              </div>
              <KeyboardArrowDownIcon/>
            </div>
            <div className='w-[400px] rounded-md mb-[20px] p-[10px] shadow bg-[white] flex items-center justify-between '>
              <img src="/src/assets/img4.png" alt="" className='mr-[30px]' />
              <div>
                <h1 className='font-bold'>{t("home.bgImg.card4.name")}</h1>
                <p>{t("home.bgImg.card4.desc")}</p>
              </div>
              <KeyboardArrowDownIcon/>
            </div>
            <div className='w-[400px]  mb-[20px] p-[10px] shadow bg-[white] flex items-center justify-between '>
              <img src="/src/assets/img5.png" alt="" className='mr-[30px]' />
              <div>
                <h1 className='font-bold'>{t("home.bgImg.card5.name")}</h1>
                <p>{t("home.bgImg.card5.desc")}</p>
              </div>
              <KeyboardArrowDownIcon/>
            </div>
          </div>
          <div className='w-[120px] pl-[80px] ml-[-28px] mt-[-20px]'  style={{ backgroundImage: "url('/src/assets/Polygon 20.png')",zIndex:"10", backgroundSize: "cover", backgroundPosition: "center", height: "87px" }}> 
          </div>
          </div>
        </div>
        <div className='mt-[39rem]'>

        </div>
    </div>
  );
};

export default Home;
