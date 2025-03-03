import React, { useState } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, TextField } from '@mui/material';

const Search = () => {
  const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  
    function TranslateClick(lang) {
      i18n.changeLanguage(lang);
      setCurrentLang(lang);
    }

    const [services,setServices] = useState([
      {
        title: 'Analytics',
        img:"/src/assets/img 101.png",
        items: t("search.Analytics")
      },
      {
        title: 'Suppliers',
        img:"/src/assets/img 102.png",
        items:t("search.Suppliers")
      },
      {
        title: 'Listing',
        img:"/src/assets/img 103.png",
        items:t("search.Listing")
      },
      {
        title: 'Branding',
        img:"/src/assets/img 104.png",
        items: t("search.Branding")
      },
      {
        title: 'Marketing',
        img:"/src/assets/img 105.png",
        items: t("search.Marketing")
      },
      {
        title: 'Data scraping',
        img:"/src/assets/img 106.png",
        items: t("search.Data scraping")
      }
    ])

return (
    <div>
      <div className='w-[100%] flex-wrap bg-[#0B0D11] relative [clip-path:ellipse(170%_99%_at_50%_0%)]'>
        <div className='w-[80%] m-auto flex flex-wrap justify-between pt-[30px] pb-[50px]'>
          <div className='w-[40%]'>
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
            <img src="/src/assets/plain.png" alt="" />
          </div>
        </div>
        <div className='flex justify-center w-[100px] m-auto'>
          <img src="/src/assets/Screenshot 2025-03-02 111026.png" alt="" />
        </div>
      </div>
      <div className='w-[80%] m-auto'>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="p-4 shadow-md hover:shadow-lg transition-shadow rounded-2xl">
          <CardContent>
              <div className='flex justify-center mb-[20px]'>
              <img src={service.img} alt="" />
              </div>
            <h2 className="text-xl text-center font-semibold mb-4">{service.title}</h2>
              <li className='w-[300px] mt-[20px]'>{service.items}</li>
          </CardContent>
        </Card>
      ))}
    </div>
      </div>
      <div className='w-[90%] m-auto flex justify-around items-center'>
          <img width={"35%"} src="/src/assets/Screenshot 205.png" alt="" />
        <div>
          <h1 className='text-[2rem] font-bold '>{t("search.meet")}</h1>
          <div className='flex mt-[30px]'>
            <div className='mr-[50px]'>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 1.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name1")}</h1>
              </div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 2.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name2")}</h1>
              </div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 3.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name3")}</h1>
              </div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 4.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name4")}</h1>
              </div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 5.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name5")}</h1>
              </div>
            </div>
            <div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 6.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name6")}</h1>
              </div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 7.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name7")}</h1>
              </div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 8.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name8")}</h1>
              </div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 9.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name9")}</h1>
              </div>
              <div className='flex items-center mb-[30px]'>
                <img src="/src/assets/img number 10.png" alt="" />
                <h1 className='ml-[20px]'>{t("search.card1.name10")}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[90%] m-auto flex flex-wrap justify-between mt-[100px]'>
        <Card className='p-4 w-[20%]  shadow-md hover:shadow-lg transition-shadow rounded-2xl'>
          <div className='flex justify-center'>
          <img src="/src/assets/order 1.png" alt="" />
          </div>
          <h1 className='text-[1rem] font-bold text-center'>{t("search.card2.name1")}</h1>
          <p className='w-[200px] text-center'>{t("search.card2.desc")}</p>
        </Card>
        <Card className='p-4 w-[20%]  shadow-md hover:shadow-lg transition-shadow rounded-2xl'>
          <div className='flex justify-center'>
          <img src="/src/assets/order 3.png" alt="" />
          </div>
          <h1 className='text-[1rem] font-bold text-center'>{t("search.card2.name2")}</h1>
          <p className='w-[200px] text-center'>{t("search.card2.desc1")}</p>
        </Card>
        <Card className='p-4 w-[20%]  shadow-md hover:shadow-lg transition-shadow rounded-2xl'>
          <div className='flex justify-center'>
          <img src="/src/assets/message 1 (1).png" alt="" />
          </div>
          <h1 className='text-[1rem] font-bold text-center'>{t("search.card2.name3")}</h1>
          <p className='w-[200px] text-center'>{t("search.card2.desc2")}</p>
        </Card>
        <Card className='p-4 w-[20%]  shadow-md hover:shadow-lg transition-shadow rounded-2xl'>
          <div className='flex justify-center'>
          <img src="/src/assets/order 4.png" alt="" />
          </div>
          <h1 className='text-[1rem] font-bold text-center'>{t("search.card2.name4")}</h1>
          <p className='w-[200px] text-center'>{t("search.card2.desc3")}</p>
        </Card>
      </div>
      <div>
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
      </div>
    </div>
  )
}

export default Search