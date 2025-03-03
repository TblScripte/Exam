import { Image } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[5rem] bg-[white]'>
        <div className="text-center mt-4">
          <a href="#" className="block py-2 text-sm text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800">
            Back to top
          </a>
        </div>
         <footer className="bg-white w-[90%] m-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              <span className="text-orange-500">amaz</span>markets
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Buy Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Sell Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email:</h3>
            <p className="text-gray-600 dark:text-gray-400">support@amazmarkets</p>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Follow Us:</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                <img src="../../../src/assets/facebook-logo (1) (1).png" alt="" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                <img src="../../../src/assets/instagram-logo (6).png" alt="" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                <img src="../../../src/assets/linkedin-logo 1 (1).png" alt="" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                <img src="../../../src/assets/instagram-logo (5).png" alt="" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                <img src="../../../src/assets/youtube 1.png" alt="" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                <img src="../../../src/assets/instagram-logo (5).png" alt="" />
              </a>
            </div>
          </div>
          <div>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Contact Us:</h3>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email to stay updated"
                className="px-4 py-2 w-64 border rounded-l-md"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600">
                Submit
              </button>
            </div>
            <div className="mt-6 flex space-x-4">
                <img src="../../../src/assets/Group 115.png" alt="" />
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-600 dark:text-gray-400 text-sm">
          AmazMarket © 2020 - All Rights Reserved
        </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer