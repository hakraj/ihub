import Link from "next/link";
import styles from "../../styles.module.css";
import SearchBar from "./SearchBar";
import GotoCart from "./GotoCart";

const DesktopBar = ({ page }: { page?: string }) => {
  return (
    <div>
      <div className="pt-4 px-6 md:px-8 w-full flex items-center justify-between">
        <svg className="cursor-pointer" width="60" height="48" viewBox="0 0 114 91" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.512 67V27.592H33.104V67H18.512ZM26 19.48C23.696 19.48 21.744 18.68 20.144 17.08C18.544 15.448 17.744 13.512 17.744 11.272C17.744 9.032 18.544 7.096 20.144 5.464C21.776 3.8 23.728 2.96799 26 2.96799C27.504 2.96799 28.88 3.352 30.128 4.12C31.376 4.856 32.384 5.848 33.152 7.096C33.92 8.344 34.304 9.736 34.304 11.272C34.304 13.512 33.488 15.448 31.856 17.08C30.224 18.68 28.272 19.48 26 19.48Z" fill="#FF0800" />
          <path d="M34.992 49.96C36.8267 49.96 38.6187 50.3333 40.368 51.08C42.1173 51.8267 43.5573 53.0107 44.688 54.632C45.8187 56.232 46.384 58.344 46.384 60.968V77H36.656V62.568C36.656 60.6907 36.2293 59.2827 35.376 58.344C34.544 57.384 33.4027 56.904 31.952 56.904C30.992 56.904 30.0747 57.16 29.2 57.672C28.3253 58.1627 27.6107 58.8667 27.056 59.784C26.5227 60.68 26.256 61.7147 26.256 62.888V77H16.496V32.968H26.256V54.6C26.4907 53.896 27.0133 53.192 27.824 52.488C28.656 51.7627 29.6907 51.1653 30.928 50.696C32.1867 50.2053 33.5413 49.96 34.992 49.96ZM58.1415 62.888C58.1415 64.9787 58.5362 66.6533 59.3255 67.912C60.1148 69.1493 61.4375 69.768 63.2935 69.768C65.1922 69.768 66.5255 69.1493 67.2935 67.912C68.0828 66.6533 68.4775 64.9787 68.4775 62.888V50.728H78.0775V63.912C78.0775 66.728 77.4908 69.1813 76.3175 71.272C75.1655 73.3413 73.4908 74.9413 71.2935 76.072C69.0962 77.2027 66.4295 77.768 63.2935 77.768C60.1788 77.768 57.5228 77.2027 55.3255 76.072C53.1282 74.9413 51.4535 73.3413 50.3015 71.272C49.1495 69.1813 48.5735 66.728 48.5735 63.912V50.728H58.1415V62.888ZM80.628 77V32.968H90.356V54.568C90.548 53.9707 91.0387 53.32 91.828 52.616C92.6387 51.8907 93.6947 51.272 94.996 50.76C96.3187 50.2267 97.812 49.96 99.476 49.96C102.036 49.96 104.255 50.5893 106.132 51.848C108.009 53.1067 109.46 54.792 110.484 56.904C111.508 58.9947 112.02 61.32 112.02 63.88C112.02 66.44 111.508 68.776 110.484 70.888C109.46 72.9787 108.009 74.6533 106.132 75.912C104.255 77.1493 102.036 77.768 99.476 77.768C98.068 77.768 96.7347 77.512 95.476 77C94.2387 76.5093 93.1613 75.88 92.244 75.112C91.348 74.3227 90.6867 73.5333 90.26 72.744V77H80.628ZM102.484 63.88C102.484 62.6853 102.217 61.6187 101.684 60.68C101.172 59.72 100.457 58.9733 99.54 58.44C98.644 57.8853 97.6307 57.608 96.5 57.608C95.3267 57.608 94.2707 57.8853 93.332 58.44C92.4147 58.9733 91.6893 59.72 91.156 60.68C90.6227 61.6187 90.356 62.6853 90.356 63.88C90.356 65.0747 90.6227 66.152 91.156 67.112C91.6893 68.0507 92.4147 68.7867 93.332 69.32C94.2707 69.8533 95.3267 70.12 96.5 70.12C97.6307 70.12 98.644 69.8533 99.54 69.32C100.457 68.7867 101.172 68.0507 101.684 67.112C102.217 66.152 102.484 65.0747 102.484 63.88Z" fill="#8F00FF" />
          <path d="M4.512 77V37.592H19.104V77H4.512ZM12 29.48C9.696 29.48 7.744 28.68 6.144 27.08C4.544 25.448 3.744 23.512 3.744 21.272C3.744 19.032 4.544 17.096 6.144 15.464C7.776 13.8 9.728 12.968 12 12.968C13.504 12.968 14.88 13.352 16.128 14.12C17.376 14.856 18.384 15.848 19.152 17.096C19.92 18.344 20.304 19.736 20.304 21.272C20.304 23.512 19.488 25.448 17.856 27.08C16.224 28.68 14.272 29.48 12 29.48Z" fill="#0080FE" />
        </svg>
        <div className="flex gap-4 items-center justify-between">
          <div>
            <Link href={"/"}>
              {page === "home" ?
                <>
                  <span className="cursor-pointer">home</span>
                  <div className={`w-full h-[2px] ${styles.animateGradient}`} ></div>
                </>
                :
                <>
                  <span className={`${styles.link} cursor-pointer text-gray-600 active:text-black`}>home</span>
                  <div className={`w-1/2 active:w-full mx-auto h-[2px] ${styles.animateGradient}`} ></div>
                </>
              }
            </Link>
          </div>
          <div>
            <Link href={"/shop"}>
              {page === "shop" ?
                <>
                  <span className="cursor-pointer">shop</span>
                  <div className={`w-full h-[2px] ${styles.animateGradient}`} ></div>
                </>
                :
                <>
                  <span className={`${styles.link} cursor-pointer text-gray-600 active:text-black`}>shop</span>
                  <div className={`w-1/2 active:w-full mx-auto h-[2px] ${styles.animateGradient}`} ></div>
                </>
              }
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <span className={`${styles.link} cursor-pointer text-gray-600 `}>my store</span>
              <div className={`w-1/2 active:w-full mx-auto h-[2px] ${styles.animateGradient}`} ></div>
            </Link>
          </div>
          <div>
            <Link href={"/about"}>
              {page === "about" ?
                <>
                  <span className="cursor-pointer">about</span>
                  <div className={`w-full h-[2px] ${styles.animateGradient}`} ></div>
                </>
                :
                <>
                  <span className={`${styles.link} cursor-pointer text-gray-600 active:text-black`}>about</span>
                  <div className={`w-1/2 active:w-full mx-auto h-[2px] ${styles.animateGradient}`} ></div>
                </>
              }
            </Link>
          </div>
          <div>
            <Link href={"/contact"}>
              {page === "contact" ?
                <>
                  <span className="cursor-pointer">contact</span>
                  <div className={`w-full h-[2px] ${styles.animateGradient}`} ></div>
                </>
                :
                <>
                  <span className={`${styles.link} cursor-pointer text-gray-600 active:text-black`}>contact</span>
                  <div className={`w-1/2 active:w-full mx-auto h-[2px] ${styles.animateGradient}`} ></div>
                </>
              }
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <SearchBar />
          <GotoCart />
          <svg className="cursor-pointer w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
      </div>
    </div>
  )
};

export default DesktopBar;