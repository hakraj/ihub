'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import useCartStore from '../../../../store/cart';
import products from "@lib/products";
import { usePaystackPayment } from "react-paystack";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Detail = ({ id, quantity }: { id: number, quantity: number }) => {

  const prod = products.filter((product) => product.id === id)
  const { title, price } = prod[0];

  const priceNumber = parseInt(price.replace(/,/g, ''), 10);
  const cost = (priceNumber * quantity).toLocaleString()

  return (
    <div className=" flex items-center justify-between my-2">
      <div>
        <p>{title && title.length > 24 ? title.substring(0, 20) + " ..." : title}{"  x"}{quantity}</p>
      </div>
      <div>
        <p>₦{cost}</p>
      </div>
    </div>
  );
}


const Checkout = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [loading, setLoading] = useState(false);

  const { data: session, status } = useSession();

  const checkedProducts = (cart).filter(product => product.checked)

  const subTotal = checkedProducts.reduce((acc, item) => {
    const prod = products.filter((product) => product.id === item.id)
    const cost = (parseInt(prod[0].price.replace(/,/g, ''), 10) * item.quantity)

    return acc + cost
  }, 0)

  const config = {
    // reference: (new Date()).getTime().toString(),
    email: session?.user?.email as string,
    amount: (subTotal + 1000) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_b4a3cf9ae25d0a3905b382d07afb28b029bbbfb8',
    metadata: {
      custom_fields: [
        {
          display_name: 'name',
          variable_name: 'name',
          value: session?.user?.name
        },
        {
          display_name: 'order',
          variable_name: 'order',
          value: checkedProducts
        }
        // To pass extra metadata, add an object with the same fields as above
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: { reference: any; }) => {
    setLoading(true)
    // Implementation for whatever you want to do with reference and after success call.
    fetch(`/api/users/checkout/${reference.reference}`)
      .then(response => response.json())
      .then(data => {
        if (data.data.data.amount === config.amount) {
          setLoading(false)
          setPaymentSuccess(true)
          const checkedProductsIds = checkedProducts.map(product => product.id)
          clearCart(checkedProductsIds);
        }

      })
      .catch(error => {
        setLoading(false)
        setPaymentSuccess(false)
        console.log('Error:', error);

      })
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }


  return (
    <div>
      <div className="lg:relative lg:px-[10%] lg:pt-16">
        <div className="pt-4 w-full ">
          <div className="px-6 md:px-8 flex items-center justify-between">
            <div onClick={() => router.back()} className="w-8 h-8 rounded-[100%] flex items-center justify-center bg-black/75 active:bg-black/50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold">Order Summary</p>
            </div>
            <div className="w-8 h-8">
            </div>
          </div>
          <hr className="text-[#D7BFDC] h-[2px] w-full my-2" />
        </div>
        {checkedProducts.length === 0 ?
          <div className="m-auto my-16">
            <Image className="mx-auto" src={"/auth/empty-cart.jpg"} alt={"empty-cart-vector-image"} width={192} height={192} priority />
            <h1 className=" text-center">{paymentSuccess ? "Your test payment has been confirmed" : "No items have been added to cart."}</h1>
            <button onClick={() => router.push("/shop")} className="block w-1/2 mx-auto my-4 py-3 text-center text-xl font-medium text-white bg-[#8F00FF] active:bg-[#AF69EE] rounded-lg">Explore Products</button>
          </div>
          :
          <>
            <div className="px-6 md:px-8 w-full pb-24 pt-8 lg:pb-32 text-center">
              <div className=" flex items-center justify-between my-4">
                <div>
                  <p className="text-xl">Products</p>
                </div>
                <div>
                  <p className="font-medium text-xl">price</p>
                </div>
              </div>

              {checkedProducts.map(({ id, quantity, }) => <Detail id={id} key={id} quantity={quantity} />)}
              <div className="mt-8">
                <p className=" text-xl">Total</p>
                <div>
                  <div className=" flex items-center justify-between my-2">
                    <div>
                      <p>Sub total</p>
                    </div>
                    <div>
                      <p className="font-medium">₦{subTotal.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className=" flex items-center justify-between my-2">
                    <div>
                      <p>Delivery</p>
                    </div>
                    <div>
                      <p className="font-medium">₦1000.00</p>
                    </div>
                  </div>
                  <div className=" flex items-center justify-between my-2">
                    <div>
                      <p>Total</p>
                    </div>
                    <div>
                      <p className="font-bold">₦{(subTotal + 1000).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="pb-4 w-full bg-white fixed lg:absolute bottom-0 left-0">
              <hr className="text-[#D7BFDC] h-[2px] w-full mb-4" />
              <div className="px-6 md:px-8 lg:px-[10%]">
                <button onClick={() => {
                  console.log(config);
                  initializePayment({ onSuccess, onClose })
                }} className="block w-full py-3 text-center text-xl font-medium text-white bg-[#8F00FF] active:bg-[#AF69EE] rounded-lg">
                  {
                    loading ?
                      <div className="w-5 h-5 rounded-full animate-spin border-2 border-solid border-white border-t-[#8F00FF] shadow-md mx-auto my-1"></div>
                      :
                      "Proceed to Payment"
                  }
                </button>
              </div>
            </div>
          </>
        }

      </div>
    </div>
  );
};

export default Checkout;