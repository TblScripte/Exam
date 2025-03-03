import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom'

const GetbyId = () => {
  const {id} = useParams()
  const { t, i18n } = useTranslation();
      const [currentLang, setCurrentLang] = useState(i18n.language || "en");
    
      function TranslateClick(lang){
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
      }
  const [date,setDate] = useState({})
   const [data,setData] = useState([
        {
          id:1,
          img:"../../../../../src/assets/MYbhN8KaaEc.png",
          name:t("blog.text4"),
          desc:t("blog.desc2"),
        },
        {
          id:2,
          img:"../../../../../src/assets/MYbhN8KaaEc (1).png",
          name:t("blog.text5"),
          desc:t("blog.desc3"),
        },
        {
          id:3,
          img:"../../../../../src/assets/MYbhN8KaaEc (2).png",
          name:t("blog.text6"),
          desc:t("blog.desc4"),
        },
        {
          id:4,
          img:"../../../../../src/assets/MYbhN8KaaEc.png",
          name:t("blog.text4"),
          desc:t("blog.desc2"),
        },
        {
          id:5,
          img:"../../../../../src/assets/MYbhN8KaaEc (1).png",
          name:t("blog.text5"),
          desc:t("blog.desc3"),
        },
        {
          id:6,
          img:"../../../../../src/assets/MYbhN8KaaEc (2).png",
          name:t("blog.text6"),
          desc:t("blog.desc4"),
        },
      ])

      useEffect(()=>{
        setDate(data.find((el)=>el.id==id))
      },[])

  return (
    <div className='w-[90%] m-auto'> 
      <h1 className='text-[gray] mt-[40px]'>{t("blog.home")} / {t("blog.text1")} / <span className='text-black'>{t("getById")}</span></h1>
    <div className='text-center'>
        <h1 className='text-[3rem] mt-[2rem] font-bold text-center'>{t("blog.buy")}</h1>
        <div className='flex justify-center mt-[40px]'>
        <div className='w-[400px] mb-[50px]'>
                <img src={data.img} alt="" />
                <h1 className='font-bold text-[2rem] mb-[40px]'>{data.name}</h1>
                <h1 className='text-[1.2rem] font-normal text-gray-700 h-[100px]'>{data.desc}</h1>
              <div className='flex justify-between w-[230px] mt-[30px] items-center'>
              <img src="../../../../../src/assets/Group 97.png" alt="" />
              <div>
                <h1 className='font-bold'>AMAZMARKETS</h1>
                <p>October 2, 2019 4 claps</p>
              </div>
            </div>
              </div>
        </div>
        <div className='flex justify-center'>
        <img src={date.img}   alt="" className='w-full  h-[600px]' />
        </div>
        <h1 className='font-bold text-[1.5rem] m-auto mt-[40px] text-center w-[450px]'>{date.name}</h1>
        <h1 className=' m-auto mt-[40px] text-gray text-center w-[400px]'>{date.desc}</h1>
        <div className='w-[220px] h-[50px]  flex rounded-md items-center justify-center m-auto mt-[40px] bg-orange-600 text-white'>
        <Link to={"/blog"}>{t("blog.text7")}</Link>
        </div>

    </div>
    <div className='w-[50%] m-auto'>
      <h1>Identify the type of trade, some crypto trading advice <br />
Usually, there are three main types of trade – short, medium and long term. <br />
In the industry, there are only two main types of cryptocurrency, short-term and <br />
long-term. Medium-term traders are difficult to distinguish here. What does short  <br />
term work imply? Read here crypto trading alerts.Crypto trading tracking news <br />
This is the trade in crypto-currencies at a small time distance in order to obtain a  <br />
quick profit. Taking into account the high volatility, according to some crypto-currencies <br />
 for a month you can earn more than a number of ordinary assets for the year crypto trading <br />
  volume by country. As for investments, usually, they are made long-term. A trader can buy <br />
   this or that coin and keep it for 6 months, a year or longer. The ultimate goal of such <br />
    investments is to get profit from the difference in quotations, but only on a larger <br />
     scale. go to the content. <br />
Search for the stock exchange, registration, depositing funds to the trading account In <br />
 order to start dealing with crypto trading, you need to find a suitable site. In the industry, <br />
  at the time of writing, a large number of exchanges have been opened. Therefore, many traders, <br />
   especially beginners, are quite easily confused in this diversity. What should I look for? <br />
    First of all, how popular the playground is. The more it is promoted, the higher the chances  <br />
    that the company is really reliable and was not created to collect money from crypto trading <br />
     newsletter. However, it is important to take into account one nuance – the more popular the  <br />
     company, the less interesting conditions it will probably offer traders. This may be due to <br />
      higher commissions for the transaction and so on. Such companies no longer need special offers <br />
       for customers, as they are known and new users constantly come to them. When the exchange is found, <br />
        it is necessary to complete the registration procedure. Most often, it involves filling a simple form. <br />
         Some sites today require additional verification. This procedure provides documents identifying the <br />
          identity and place of registration. <br />
Working with the schedule crypto trading profit calculator <br />
After the user has become a client of the exchange, you can start trading. There are several options – to start <br />
 immediately, relying on intuition and advice from analysts, or to receive training in technical analysis, learn <br />
  more about the psychology of trading and then, fully prepared to take the first steps on the site. The first option <br />
   is good in its own way, as it allows you to practice trading almost immediately. However, there are risks of losing <br />
     capital. The fact is that it is difficult to predict market fluctuations. And if there is no relevant knowledge, <br />
      then you can do it at random with a minimum chance of success. You can closely follow the advice of analysts, but <br />
       they are sometimes mistaken. In addition, in order to understand such recommendations, it is necessary, after all, <br />
        to have at least a basic knowledge, so training crypto trading is necessary. <br />
Psychology
In trading in any markets, psychology is very important. In full, this applies to the crypto currency. The fact is that in <br />
 the process of work, a trader can capture a variety of emotions. The ability to control them is the key to success. Very often, <br />
  novice traders make mistakes that lead to significant losses of capital. For example, after a successful transaction, they open <br />
   one more, increase the size of the transaction, do not analyze the market before entering. As a result, a combination of factors <br />
    leads to the fact that the transaction closes at a loss. The same concerns unprofitable transactions. After them, the trader may <br />
     be afraid to enter the market and in the end will not be able to open positions, lose profit. Emotion has a big impact on any <br />
      investor. Before a trader becomes a professional, he must learn to control himself, minimize the impact on trade of such aspects <br />
       as greed and fear. <br />
A few tips for beginner cryptotrader with crypto trading market <br />
Many investors and crypto traders, who have not yet started their careers and are in the crypto-currency market, admit one serious mistake – <br />
 they buy only bitcoins and don’t use crypto trading robot. To some extent this is correct, since bitcoin is the most famous asset and its <br />
  growth has been quite significant lately. On the other hand, any professional trader and investor knows that the most important aspect <br />
   of success is diversification. Accordingly, it is desirable to buy not only bitcoin, but also other cryptocurrencies. In this case, <br />
    the fall of one of them can be compensated by the growth of the other. Another recommendation for beginner crypto traders is to find <br />
     opportunities for arbitrage. This is one of the simplest strategies, which, at least, does not require any knowledge and does not require <br />
      the study of crypto trading. The essence of this technique is that the trader is looking for a difference in prices for the same asset on <br />
       two or more exchanges. When he finds such a difference, he takes advantage of the moment and profits from it. Let us give an example. <br />
        Suppose a trader works with bitcoin, whose exchange rate on A is 10,000USD. At the exchange B for the same asset is 10 500USD. In this <br />
         case, you need to buy BTC on Exchange A, and then sell the same asset on Exchange B. Dirty profit will be 500USD. Net trader will receive <br />
          less, since the stock exchange in any case has commissions. In addition, certain amounts are lost on payments when replenishing the account <br />
           and withdrawing funds. In any case, this strategy is interesting and today it is used by many traders. For beginners and not only they can recommend <br />
            – never invest in transactions more than they can afford. First, it will significantly increase the psychological burden. Especially if money was borrowed <br />
             from relatives or acquaintances, or on credit with a bank. Secondly, debts and credit will have to be returned in case of failure. Most often, this <br />
              permanently, if not forever, discourages people from engaging in crypto trading and investing. Therefore, initially, it is better to risk insignificant <br />
               amounts that a trader can afford to lose. Finally, it is important to remember the risks. The fact is that crypto-currencies are very volatile. Daily <br />
                fluctuations can reach 20-40%. Here, as wide opportunities open up, so are huge risks. It is important first of all to understand all the dangers. In <br />
                 this case, the trader will be able to minimize risks through his actions.
Write your comment</h1>
    </div>
    </div>
  )
}

export default GetbyId