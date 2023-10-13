import { Stripe, loadStripe, RedirectToCheckoutOptions } from "@stripe/stripe-js";

export const checkout = async ({ line_items }: { line_items: { price: string; quantity: number; }[]; }) => {
  let stripePromise: Promise<Stripe | null>;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
    }

    return stripePromise;
  }

  const stripe = await getStripe()

  await stripe?.redirectToCheckout({
    mode: "payment",
    line_items,
    success_url: `${window.location.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${window.location.origin}`,
  })
}