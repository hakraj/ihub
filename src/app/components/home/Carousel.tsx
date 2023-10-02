/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Carousel, Typography, Button } from "../../../../utils/mt";

export default function HomeCarousel() {
  return (
    <div className="my-6 md:my-4 h-[400px] md:h-[640px]">
      <Carousel autoplay loop >
        <div className="relative h-full w-full">
          <img
            src="/hero-img/fashion.jpg"
            // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Clothing and fashion
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Style redefined, confidence rewritten
              </Typography>
              <div className="flex justify-center gap-2">
                <Link href="/shop"><Button size="lg" color="white">
                  Explore
                </Button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/hero-img/tech.jpg"
            // src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center place-items-end bg-black/50">
            <div className="w-3/4 text-right pr-14 md:w-2/4 md:pr-20 lg:pr-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Electronics and tech
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Innovate your world, the tech way
              </Typography>
              <div className="flex justify-end gap-2">
                <Link href="/shop"><Button size="lg" color="white">
                  Explore
                </Button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/hero-img/home.jpg"
            // src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
            <div className="w-3/4 pl-14 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Home and furniture
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Home sweet home, now sweeter
              </Typography>
              <div className="flex gap-2">
                <Link href="/shop"><Button size="lg" color="white">
                  Explore
                </Button></Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative h-full w-full">
          <img
            src="/hero-img/fit.avif"
            // src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 4"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center place-items-end bg-black/50">
            <div className="w-3/4 text-right pr-14 md:w-2/4 md:pr-20 lg:pr-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Sports and fitness
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Elevate your game, sculpt your strength
              </Typography>
              <div className="flex justify-end gap-2">
                <Link href="/shop"><Button size="lg" color="white">
                  Explore
                </Button></Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative h-full w-full">
          <img
            src="/hero-img/health.avif"
            // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Beauty and health
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Glow inside and out, naturally
              </Typography>
              <div className="flex justify-center gap-2">
                <Link href="/shop"><Button size="lg" color="white">
                  Explore
                </Button></Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}