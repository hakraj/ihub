

const Pitch = () => {
  return (
    <div className="px-[10%] md:px-[20%] lg:px-[10%] py-4 my-16">
      <div className="lg:grid grid-cols-3 gap-[5%]">
        <div className="text-center p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
          </svg>
          <h3 className="font-medium text-lg md:text-xl lg:text-2xl my-4">Quality Products</h3>
          <p className="font-light">We offer carefully selected range of top-quality products, ensuring you get the best value for your money .</p>
        </div>
        <div className="text-center p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
          <h3 className="font-medium text-lg md:text-xl lg:text-2xl my-4">Exceptional Service</h3>
          <p className="font-light">Our dedicated customer support team is here to assist you at every step to make your shopping experience seamless and enjoyable.</p>
        </div>
        <div className="text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h3 className="font-medium text-lg md:text-xl lg:text-2xl my-4">Wide Selection</h3>
          <p className="font-light">With a vast and diverse product catalog, you will find everything you need, from the latest trend to everyday essentials.</p>
        </div>
      </div>
    </div>
  )
};

export default Pitch