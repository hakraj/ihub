import { year } from "../layout";
import styles from "../styles.module.css"

const Footer = () => {
  return (
    <div className={`${styles.onboardingBg}`}>
      <div className={`${styles.onboarding} px-8 md:px-16 py-16 md:flex flex-wrap justify-between min-h-[15vh] mt-[20vh] bg-black/75 text-white`}>
        <div className="md:w-4/5 xl:w-1/5">
          <svg className="cursor-pointer" width="60" height="48" viewBox="0 0 114 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.512 67V27.592H33.104V67H18.512ZM26 19.48C23.696 19.48 21.744 18.68 20.144 17.08C18.544 15.448 17.744 13.512 17.744 11.272C17.744 9.032 18.544 7.096 20.144 5.464C21.776 3.8 23.728 2.96799 26 2.96799C27.504 2.96799 28.88 3.352 30.128 4.12C31.376 4.856 32.384 5.848 33.152 7.096C33.92 8.344 34.304 9.736 34.304 11.272C34.304 13.512 33.488 15.448 31.856 17.08C30.224 18.68 28.272 19.48 26 19.48Z" fill="#FF0800" />
            <path d="M34.992 49.96C36.8267 49.96 38.6187 50.3333 40.368 51.08C42.1173 51.8267 43.5573 53.0107 44.688 54.632C45.8187 56.232 46.384 58.344 46.384 60.968V77H36.656V62.568C36.656 60.6907 36.2293 59.2827 35.376 58.344C34.544 57.384 33.4027 56.904 31.952 56.904C30.992 56.904 30.0747 57.16 29.2 57.672C28.3253 58.1627 27.6107 58.8667 27.056 59.784C26.5227 60.68 26.256 61.7147 26.256 62.888V77H16.496V32.968H26.256V54.6C26.4907 53.896 27.0133 53.192 27.824 52.488C28.656 51.7627 29.6907 51.1653 30.928 50.696C32.1867 50.2053 33.5413 49.96 34.992 49.96ZM58.1415 62.888C58.1415 64.9787 58.5362 66.6533 59.3255 67.912C60.1148 69.1493 61.4375 69.768 63.2935 69.768C65.1922 69.768 66.5255 69.1493 67.2935 67.912C68.0828 66.6533 68.4775 64.9787 68.4775 62.888V50.728H78.0775V63.912C78.0775 66.728 77.4908 69.1813 76.3175 71.272C75.1655 73.3413 73.4908 74.9413 71.2935 76.072C69.0962 77.2027 66.4295 77.768 63.2935 77.768C60.1788 77.768 57.5228 77.2027 55.3255 76.072C53.1282 74.9413 51.4535 73.3413 50.3015 71.272C49.1495 69.1813 48.5735 66.728 48.5735 63.912V50.728H58.1415V62.888ZM80.628 77V32.968H90.356V54.568C90.548 53.9707 91.0387 53.32 91.828 52.616C92.6387 51.8907 93.6947 51.272 94.996 50.76C96.3187 50.2267 97.812 49.96 99.476 49.96C102.036 49.96 104.255 50.5893 106.132 51.848C108.009 53.1067 109.46 54.792 110.484 56.904C111.508 58.9947 112.02 61.32 112.02 63.88C112.02 66.44 111.508 68.776 110.484 70.888C109.46 72.9787 108.009 74.6533 106.132 75.912C104.255 77.1493 102.036 77.768 99.476 77.768C98.068 77.768 96.7347 77.512 95.476 77C94.2387 76.5093 93.1613 75.88 92.244 75.112C91.348 74.3227 90.6867 73.5333 90.26 72.744V77H80.628ZM102.484 63.88C102.484 62.6853 102.217 61.6187 101.684 60.68C101.172 59.72 100.457 58.9733 99.54 58.44C98.644 57.8853 97.6307 57.608 96.5 57.608C95.3267 57.608 94.2707 57.8853 93.332 58.44C92.4147 58.9733 91.6893 59.72 91.156 60.68C90.6227 61.6187 90.356 62.6853 90.356 63.88C90.356 65.0747 90.6227 66.152 91.156 67.112C91.6893 68.0507 92.4147 68.7867 93.332 69.32C94.2707 69.8533 95.3267 70.12 96.5 70.12C97.6307 70.12 98.644 69.8533 99.54 69.32C100.457 68.7867 101.172 68.0507 101.684 67.112C102.217 66.152 102.484 65.0747 102.484 63.88Z" fill="#8F00FF" />
            <path d="M4.512 77V37.592H19.104V77H4.512ZM12 29.48C9.696 29.48 7.744 28.68 6.144 27.08C4.544 25.448 3.744 23.512 3.744 21.272C3.744 19.032 4.544 17.096 6.144 15.464C7.776 13.8 9.728 12.968 12 12.968C13.504 12.968 14.88 13.352 16.128 14.12C17.376 14.856 18.384 15.848 19.152 17.096C19.92 18.344 20.304 19.736 20.304 21.272C20.304 23.512 19.488 25.448 17.856 27.08C16.224 28.68 14.272 29.48 12 29.48Z" fill="#0080FE" />
          </svg>
          <p className='my-4 text-sm font-light text-violet-300'>
            Your one stop for all needs<br />
            Your ultimate shopping destination. Discover, shop, and experience a world of quality products and unbeatable deals, all in one place.
          </p>
        </div>
        <div className="md:flex flex-wrap justify-between">
          <div className="md:w-1/2 pt-4">
            <p className="text-2xl font-bold">Newsletter sign up</p>
            <p className="my-2 text-sm font-light text-violet-300">Sign up for our promotional email and be the first to know of our special offers</p>
            <div className="w-full flex flex-wrap items-center gap-2 md:gap-4 ">
              <input className="py-1 px-4 rounded-2xl font-light text-black text-sm border-2 border-[#D7BFDC] focus:outline-[#E4A0F7] focus:border-[#E4A0F7]" type="text" name="search" id="search" placeholder="type your search" />
              <button className="py-1 px-4 text-center text-base text-white bg-[#8F00FF] hover:bg-[#AF69EE] rounded-2xl">subscribe</button>
            </div>
          </div>
          <div className="pt-8 md:pt-4">
            <div className="flex md:justify-end justify-start gap-6">
              <div>
                <div className="text-xl font-bold">shop</div>
                <p className="my-2 text-sm font-light text-violet-300">fashion</p>
                <p className="my-2 text-sm font-light text-violet-300">tech</p>
                <p className="my-2 text-sm font-light text-violet-300">home</p>
                <p className="my-2 text-sm font-light text-violet-300">beauty</p>
                <p className="my-2 text-sm font-light text-violet-300">others</p>
              </div>
              <div>
                <div className="text-xl font-bold">my store</div>
                <p className="my-2 text-sm font-light text-violet-300">login</p>
                <p className="my-2 text-sm font-light text-violet-300">create store</p>
                <p className="my-2 text-sm font-light text-violet-300">upgrade store</p>
              </div>
              <div>
                <div className="text-xl font-bold">contact</div>
                <p className="my-2 text-sm font-light text-violet-300">info@ihub.org</p>
                <p className="my-2 text-sm font-light text-violet-300">96 pluto lane,<br />asteriod 007,<br />Universe</p>
                <p className="my-2 text-sm font-light text-violet-300">+134 567 890</p>
              </div>
            </div>
            <div>
              <div className='flex space-x-3 justify-end mt-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 hover:text-[#AF69EE] cursor-pointer' viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 hover:text-[#AF69EE] cursor-pointer' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 hover:text-[#AF69EE] cursor-pointer' viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
              </div>
              <p className='text-xs text-end text-black font-mono mt-1'>&copy; hak_raj {year}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default Footer;