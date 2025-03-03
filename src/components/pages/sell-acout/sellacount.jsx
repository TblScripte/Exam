import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { TextField } from "@mui/material";
const Sellacount = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  }

  return (
    <div>
      <div className="w-[100%] flex-wrap bg-[#0B0D11] relative [clip-path:ellipse(170%_99%_at_50%_0%)]">
        <div className="w-[80%] m-auto flex flex-wrap justify-between pt-[30px] pb-[50px]">
          <div className="w-[40%]">
            <h1 className="text-white mb-[20px] pt-[40px] text-[2rem] font-bold">
              {t("home.text1")}
            </h1>
            <p className="text-gray-400 text-[1.5rem] font-bold">
              {t("home.text2")}
            </p>
            <button className="bg-orange-600 text-[white] mt-[30px] p-[10px_20px] rounded-md">
              <ArrowCircleRightIcon sx={{ fontSize: "2rem", color: "white" }} />{" "}
              {t("home.btn")}
            </button>
            <div className="flex w-[70%] mt-[2rem] justify-between mb-[40px]">
              <div className="flex mr-[2rem] w-[50%] justify-between">
                <img src="/src/assets/facebook-logo (1).png" alt="" />
                <img src="/src/assets/instagram-logo.png" alt="" />
                <img src="/src/assets/linkedin-logo 1.png" alt="" />
                <img src="/src/assets/instagram-logo (1).png" alt="" />
              </div>
              <div className="flex w-[50%] justify-between">
                <img src="/src/assets/facebook-logo (2).png" alt="" />
                <img src="/src/assets/instagram-logo (2).png" alt="" />
                <img src="/src/assets/linkedin-logo (2).png" alt="" />
                <img src="/src/assets/instagram-logo (3).png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <img
              className="relative w-[580px]"
              src="/src/assets/Mackbook Pro Mockup 1.png"
              alt=""
            />
            <div
              className="w-[300px] mt-[-20rem] p-[15px] ml-[8rem]"
              style={{
                backgroundImage: "url('/src/assets/Ellipse 501 (2).png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "297px",
              }}
            >
              <div
                className="w-[270px]"
                style={{
                  backgroundImage: "url('/src/assets/Ellipse 501 (2).png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "270px",
                  paddingTop: "240px",
                  padding: "10px",
                }}
              >
                <div
                  className="w-[240px]"
                  style={{
                    backgroundImage: "url('/src/assets/Ellipse 501 (1).png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "240px",
                    marginTop: "3px",
                    marginLeft: "5px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-[100px] m-auto">
          <img src="/src/assets/Screenshot 2025-03-02 111026.png" alt="" />
        </div>
      </div>
      <div
        className="w-[90%] m-auto  ml-[9rem] z-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "300px",
        }}
      >
        <h1 className="text-center pt-[15rem] text-[3rem] font-medium">
          {t("home.text4")}
        </h1>
        <div className="w-full p-6 mb-[10rem]">
          <div className="flex justify-center gap-4 mt-6">
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
              To learn more about the process click here
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
              Interested in Selling Account Visit page
            </button>
          </div>
        </div>
        <div
          className="w-[50%] z-10 flex justify-between"
          style={{
            backgroundImage: "url('/src/assets/Ellipse 312.png')",
            zIndex: "10",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
        >
          <div
            className="w-[100%] pt-[100px] pl-[100px]"
            style={{
              backgroundImage: "url('/src/assets/325262 1.png ')",
              zIndex: "10",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "700px",
            }}
          >
            <div className="w-[330px] flex justify-around items-center ml-[100px] pb-[3px] h-[68px] pl-[5px]  p-1  rounded-full"></div>
          </div>
          <div>
            <h1 className="text-[2rem] mb-[40px] font-bold">
              {t("home.text9")}
            </h1>
            <div className="w-[500px] ml-[50px] mb-[40px] p-4 flex items-start rounded-md shadow-md">
              <img
                className="mr-[30px]"
                src="/src/assets/message 1.png"
                alt=""
              />
              <div className="w-[300px]">
                <h1 className="text-[1.2rem] mt-[10px] mb-[10px] font-bold">
                  {t("home.card.card1.name")}
                </h1>
                <p>{t("home.card.card1.desc")}</p>
              </div>
            </div>
            <div className="w-[500px] ml-[50px] mb-[40px] p-4 flex items-start rounded-md shadow-md">
              <img
                className="mr-[30px]"
                src="/src/assets/phone-call (1) 1.png"
                alt=""
              />
              <div>
                <h1 className="text-[1.2rem] mt-[10px] mb-[10px] font-bold">
                  {t("home.card.card2.name")}
                </h1>
                <p>{t("home.card.card2.desc")}</p>
              </div>
            </div>
            <div className="w-[500px] ml-[50px] mb-[40px] p-4 flex items-start rounded-md shadow-md">
              <img
                className="mr-[30px]"
                src="/src/assets/budget (1) 1.png"
                alt=""
              />
              <div>
                <h1 className="text-[1.2rem] mt-[10px] mb-[10px] font-bold">
                  {t("home.card.card3.name")}
                </h1>
                <p>{t("home.card.card3.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[100px] w-[90%] m-auto flex justify-between">
        <div>
          <h1 className="text-[2rem] w-[600px] font-bold">
            {t("sellacount.text1")}
          </h1>
          <h1 className="text-[gray] text-[1.2rem] mt-[40px] mb-[50px] w-[550px] font-normal ">
            {t("sellacount.desc")}
          </h1>
          <div className="w-[500px]">
            <div className="flex items-center">
              <img src="/src/assets/number 1.png" alt="" />
              <h1 className="ml-[10px] font-bold">
                {t("sellacount.card1.name1")}
              </h1>
            </div>
            <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
            <div className="flex items-center">
              <img src="/src/assets/number 2.png" alt="" />
              <h1 className="ml-[10px] font-bold">
                {t("sellacount.card1.name2")}
              </h1>
            </div>
            <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
            <div className="flex items-center">
              <img src="/src/assets/number 3.png" alt="" />
              <h1 className="ml-[10px] font-bold">
                {t("sellacount.card1.name3")}
              </h1>
            </div>
            <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
            <div className="flex items-center">
              <img src="/src/assets/number 4.png" alt="" />
              <h1 className="ml-[10px] font-bold">
                {t("sellacount.card1.name4")}
              </h1>
            </div>
          </div>
        </div>
        <div
          className="w-[80%] pl-[160px] pt-[130px]"
          style={{
            backgroundImage: "url('/src/assets/точки 4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "1000px",
          }}
        >
          <div
            className="w-[318px] ml-[20rem] font-bold"
            style={{
              backgroundImage: "url('/src/assets/Polygon 19 (1).png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "318px",
            }}
          ></div>
          <div className="w-[500px] shadow rounded-2xl p-10 mt-[-15rem] bg-[white] h-[860px]">
            <h1 className="mb-[30px] font-bold text-[2rem]">
              {t("sellacount.text2")}
            </h1>
            <div>
              <h1 className="mb-[20px] font-normal">{t("sellacount.text4")}</h1>
              <div className="w-[420px] font-bold  rounded-md flex items-center border border-[3px] gap-[25px] ">
                <h1 className="ml-[10px]">2019</h1>
                <h1 className="p-[20px]  bg-[black] text-white">2018</h1>
                <h1>2017</h1>
                <h1>2016</h1>
                <h1>2015</h1>
                <h1>{t("sellacount.text3")}</h1>
              </div>
            </div>
            <div>
              <h1 className="mb-[20px] mt-[40px] font-normal">
                {t("sellacount.text4")}
              </h1>
              <div className="w-[420px] font-bold  rounded-md flex justify-around items-center border border-[3px] gap-[25px] ">
                <h1 className="ml-[10px]">
                  {" "}
                  <ArrowBackIosIcon sx={{ fontSize: "20px" }} /> 50
                </h1>
                <h1 className="p-[20px]  bg-[black] text-white">50+</h1>
                <h1>100+</h1>
                <h1>500+</h1>
                <h1>1000+</h1>
              </div>
            </div>
            <div>
              <h1 className="mb-[20px] mt-[40px] font-normal">
                {t("sellacount.text5")}
              </h1>
              <div className="w-[420px] font-bold  rounded-md flex justify-around items-center border border-[3px] gap-[25px] ">
                <h1 className="w-[50%]  bg-[black] text-white text-center">
                  {" "}
                  <ArrowBackIosIcon sx={{ fontSize: "20px" }} /> USA
                </h1>
                <h1 className="w-[50%] text-black text-center">Eroupe</h1>
              </div>
            </div>
            <div>
              <h1 className="mb-[20px] mt-[40px] font-normal">
                {t("sellacount.text6")}
              </h1>
              <div className="w-[420px] font-bold  rounded-md flex justify-around items-center border border-[3px] gap-[25px] ">
                <h1 className="w-[50%]  bg-[black] text-white text-center">
                  {t("sellacount.yes")}
                </h1>
                <h1 className="w-[50%] text-black text-center">
                  {t("sellacount.no")}
                </h1>
              </div>
            </div>
            <div>
              <h1 className="mb-[20px] mt-[40px] font-normal">
                {t("sellacount.email")}
              </h1>
              <TextField variant="filled" label={t("sellacount.email")} />
              <button className="p-[30px_150px] mt-[15px] rounded-md bg-orange-600 text-white">
                {t("sellacount.btn")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto flex justify-around mt-[50px] items-center">
        <img src="/src/assets/Group ImgPhone.png" alt="" />
        <div className="w-[500px]">
          <div className="flex items-center">
            <img src="/src/assets/number 1.png" alt="" />
            <div className="text-start ml-[40px]">
              <h1 className="mb-[10px] font-bold">
                {t("sellacount.card1.name1")}
              </h1>
              <p className="text-gray-600">{t("sellacount.card2.text1")}</p>
            </div>
          </div>
          <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
          <div className="flex items-center">
            <img src="/src/assets/number 2.png" alt="" />
            <div className="text-start ml-[40px]">
              <h1 className="mb-[10px] font-bold">
                {t("sellacount.card1.name2")}
              </h1>
              <p className="text-gray-600">{t("sellacount.card2.text2")}</p>
            </div>
          </div>
          <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
          <div className="flex items-center">
            <img src="/src/assets/number 3.png" alt="" />
            <div className="text-start ml-[40px]">
              <h1 className="mb-[10px] font-bold">
                {t("sellacount.card1.name3")}
              </h1>
              <p className="text-gray-600">{t("sellacount.card2.text3")}</p>
            </div>
          </div>
          <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
          <div className="flex items-center">
            <img src="/src/assets/number 4.png" alt="" />
            <div className="text-start ml-[40px]">
              <h1 className="mb-[10px] font-bold">
                {t("sellacount.card1.name4")}
              </h1>
              <p className="text-gray-600">{t("sellacount.card2.text4")}</p>
            </div>
          </div>
          <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
          <div className="flex items-center">
            <img src="/src/assets/number5.png" alt="" />
            <div className="text-start ml-[40px]">
              <h1 className="mb-[10px] font-bold">
                {t("sellacount.card1.name4")}
              </h1>
              <p className="text-gray-600">{t("sellacount.card2.text5")}</p>
            </div>
            <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
          </div>
          <img src="/src/assets/Group 428.png" className="ml-[38px]" alt="" />
          <div className="flex items-center">
            <img src="/src/assets/number  6.png" alt="" />
            <div className="text-start ml-[40px]">
              <h1 className="mb-[10px] font-bold">
                {t("sellacount.card1.name4")}
              </h1>
              <p className="text-gray-600">{t("sellacount.card2.text6")}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-[2rem] w-[450px] m-auto font-bold">
          {t("sellacount.text")}
        </h1>
        <p className=" mt-[20px] text-center text-[1.5rem] m-auto text-gray-500">
          {t("sellacount.text7")}
        </p>
      </div>
      <div>
        <div>
          <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src="/src/assets/request.png"
            />
            <div className="md:ml-8 text-left">
              <div className="mt-4 flex items-center">
                <img
                  src="/src/assets/1231242112 1.png"
                  className="mr-[60px]"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold">{t("home.leave")}</h2>
                  <p className="text-gray-600 w-[300px] mt-2">
                    {t("home.desc1")}
                  </p>
                  <TextField
                    id="standard-basic"
                    label={t("home.phoneNumber")}
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label={t("home.email")}
                    variant="standard"
                    sx={{
                      display: "block",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label={t("home.message")}
                    variant="standard"
                    sx={{ marginBottom: "20px" }}
                  />
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    placeholder={t("home.message")}
                  ></textarea>
                  <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded">
                    {t("home.send")}
                  </button>
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
                  <img
                    className="ml-[5rem] mt-[-30px] pb-[1rem]"
                    src="/src/assets/“ (1).png"
                    alt=""
                  />
                  <p className="text-gray-600 italic">{t("home.lecture")}</p>
                  <p className="mt-2 font-semibold">Steven Cody</p>
                </div>
              </div>
              <div className="max-w-sm p-4 border rounded-lg shadow-md">
                <img src="/src/assets/Ellipse 311.png" alt="" />
                <div>
                  <img
                    src="/src/assets/“ (1).png"
                    alt=""
                    className="ml-[5rem] mt-[-30px] pb-[1.2rem]"
                  />
                  <p className="text-gray-600 italic">{t("home.Excellent")}</p>
                  <p className="mt-2 font-semibold">Jason Luis</p>
                </div>
              </div>
            </div>
            <div className="w-[100px] m-auto mt-[30px]">
              <img
                className="flex justify-center"
                src="/src/assets/Group 380.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellacount;
