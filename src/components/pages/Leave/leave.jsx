import { TextField } from '@mui/material'
import React, { useTransition } from 'react'

const Leave = () => {
    const {t,i18n} = useTransition()
    function TranslateClick(lang){
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
    }
  return (
    <div>
        <div className="container mx-auto px-4 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-8">Process</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold">1</div>
          <h3 className="text-lg font-medium mt-4">Check your account</h3>
          <p className="text-gray-600 mt-2 text-sm">Check the account of your choice via TeamViewer or Any Desk. You inspect the account from your end to confirm your selection.</p>
        </div>
        <img className='w-12 hidden md:block' src="../../../../src/assets/down.png" alt="Step arrow" />
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold">2</div>
          <h3 className="text-lg font-medium mt-4">Payment</h3>
          <p className="text-gray-600 mt-2 text-sm">We take a payment using your preferred method. We accept Payoneer, bank transfer and bitcoin.</p>
        </div>
        <img className='w-12 hidden md:block' src="../../../../src/assets/up.png" alt="Step arrow" />
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold">3</div>
          <h3 className="text-lg font-medium mt-4">Account ownership</h3>
          <p className="text-gray-600 mt-2 text-sm">We give you all the log in details to your new account. After that, you set up your own password and Two-Step authentication methods for your Amazon account and Virtual Proxy Server where your account is located.</p>
        </div>
        <img className='w-12 hidden md:block' src="../../../../src/assets/down.png" alt="Step arrow" />
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold">4</div>
          <h3 className="text-lg font-medium mt-4">Account set up</h3>
          <p className="text-gray-600 mt-2 text-sm">We help you set up the details like your deposit/change method, business address and legal entity on your Amazon account.</p>
        </div>
      </div>

      <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
        <img className="w-48 h-48 rounded-full object-cover" src="../../../../src/assets/request.png" alt="Request" />
        <div className="md:ml-8 text-left">
          <h2 className="text-xl font-semibold">Leave a Request</h2>
          <p className="text-gray-600 mt-2">It will take you less than sixty seconds. A member of our team will contact you shortly after.</p>
          <form className="mt-4">
          <TextField id="standard-basic" label={t("phoneNumber")} variant="standard" />
          <TextField id="standard-basic" label={t("Email")}nt="standard" />
          <TextField id="standard-basic" label={t("messange")} variant="standard" />
            <textarea className="w-full p-2 border border-gray-300 rounded mt-2" placeholder="Your message"></textarea>
            <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded">Send</button>
          </form>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">What our clients say</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-8">
          <div className="max-w-sm p-4 border rounded-lg shadow-md">
            <p className="text-gray-600 italic">“I have to say, amazmarkets gets over an A+ rating from me. I will be recommending this company and team to everyone. Thanks again!”</p>
            <p className="mt-2 font-semibold">Steven Cody</p>
          </div>
          <div className="max-w-sm p-4 border rounded-lg shadow-md">
            <p className="text-gray-600 italic">“Excellent and professional service. Very friendly and helpful. Would definitely use again. Highly recommend!”</p>
            <p className="mt-2 font-semibold">Jason Luis</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Leave