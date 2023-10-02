
const products = [
  {
    id: 1,
    title: "Beyou - Skincare set ",
    price: "10,000",
    description: "Discover your best skin with Beyou's Skincare Set. Tailored to perfection, this set offers gentle cleansing and deep hydration. Embrace your natural beauty effortlessly.",
    category: "beauty",
    image: "/tinified/1.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: "Curology - Cleanser Moisturizer set ",
    price: "6,000",
    description: "Cleanse and hydrate with Curology's set. Refreshing cleanser paired with a moisturizer for balanced, radiant skin. Your daily skincare essentials simplified.",
    category: "beauty",
    image: "/tinified/2.jpg",
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: "Glossier - Skincare set ",
    price: "15,000",
    description: "Glow naturally with Glossier's essentials. Hydrate and radiate with these simple, effective skincare products. Your path to glowing, healthy skin starts here.",
    category: "beauty",
    image: "/tinified/3.jpg",
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: "Miss Swiss 2-In-1 Makeup-Brush Holder and Drying Rack ",
    price: "4,000",
    description: "Stay organized and stylish with Miss Swiss. Your makeup brushes, perfectly stored and ready to use. A chic addition to your beauty routine.",
    category: "beauty",
    image: "/tinified/4.jpg",
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "The Ordinary - Skincare set ",
    price: "10,000",
    description: "Simplify your routine with The Ordinary. Essential serums and moisturizers for your unique skin. Effortless skincare, remarkable results.",
    category: "beauty",
    image: "/tinified/5.jpg",
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 6,
    title: "Yves Saint Laurent -Foundation ",
    price: "18,000",
    description: "Achieve flawless skin with Yves Saint Laurent's Foundation. Lightweight, yet full coverage for a radiant complexion. Your beauty, perfected.",
    category: "beauty",
    image: "/tinified/6.jpg",
    rating: {
      rate: 3.9,
      count: 70
    }
  },
  {
    id: 7,
    title: "VinBee Black Flat Straight Corner Brace Plates Metal Joining Plate Connector Repair Bracket with Fixing Screws",
    price: "30,000",
    description: "Strengthen with style using VinBee's metal plates. Perfect for repairs and enhancements. Easy to install, durable support for your projects.",
    category: "home",
    image: "/tinified/7.jpg",
    rating: {
      rate: 3,
      count: 400
    }
  },
  {
    id: 8,
    title: "Rattan Center Table",
    price: "19,000",
    description: "Elevate your living space with the Rattan Center Table. Crafted for sophistication, it seamlessly blends style and functionality. A centerpiece that defines your room.",
    category: "home",
    image: "/tinified/8.jpg",
    rating: {
      rate: 1.9,
      count: 100
    }
  },
  {
    id: 9,
    title: "Modern Velvet 2-seater Sofa Bed ",
    price: "33,500",
    description: "Welcome guests with comfort. This Modern Velvet Sofa Bed combines chic design with practicality. Stylish seating by day, cozy sleep by night.",
    category: "home",
    image: "/tinified/9.jpg",
    rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 10,
    title: "Modern Patchwork Armchair ",
    price: "20,000",
    description: "Add a pop of color and style to your space with the Modern Patchwork Armchair. Unique design, comfortable seating. A statement piece for contemporary interiors.",
    category: "home",
    image: "/tinified/10.jpg",
    rating: {
      rate: 2.9,
      count: 470
    }
  },
  {
    id: 11,
    title: "Chair with Sled Base",
    price: "12,500",
    description: "Experience comfort in style with our Chair featuring a sleek sled base. Ergonomic design meets modern aesthetics, making it perfect for your workspace or home.",
    category: "home",
    image: "/tinified/11.jpg",
    rating: {
      rate: 4.8,
      count: 319
    }
  },
  {
    id: 12,
    title: "Brown Wooden Table with Chair ",
    price: "25,000",
    description: "Elevate your setup area with our Brown Wooden Table and Chair set. Crafted from rich wood, it exudes warmth and sophistication. The perfect blend of form and function.",
    category: "home",
    image: "/tinified/12.jpg",
    rating: {
      rate: 4.8,
      count: 400
    }
  },
  {
    id: 13,
    title: "Samsung Galaxy s21",
    price: "500,000",
    description: "Dive into the future with the Samsung Galaxy S21. Cutting-edge technology meets elegant design. Capture moments, stream seamlessly, and experience the extraordinary in your hands.",
    category: "tech",
    image: "/tinified/13.jpg",
    rating: {
      rate: 2.9,
      count: 250
    }
  },
  {
    id: 14,
    title: "Samsung Galaxy buds ",
    price: "100,000",
    description: "Immerse yourself in superior sound quality with Samsung Galaxy Buds. True wireless freedom meets immersive audio experience. Your perfect companions for music and calls on the go.",
    category: "tech",
    image: "/tinified/14.jpg",
    rating: {
      rate: 2.2,
      count: 140
    }
  },
  {
    id: 15,
    title: "Apple Airpods ",
    price: "90,000",
    description: "Unleash the power of simplicity with Apple Airpods. Effortless setup, seamless connection. Enjoy crystal-clear sound and the freedom of wireless listening. Your music, your way.",
    category: "tech",
    image: "/tinified/15.jpg",
    rating: {
      rate: 2.6,
      count: 235
    }
  },
  {
    id: 16,
    title: "Apple Watch Series 4 ",
    price: "160,000",
    description: "Elevate your fitness and style game with the Apple Watch Series 4. Track your workouts, monitor your health, and stay connected, all from your wrist. Experience innovation at a glance.",
    category: "tech",
    image: "/tinified/16.jpg",
    rating: {
      rate: 2.9,
      count: 340
    }
  },
  {
    id: 17,
    title: "Apple Macbook Pro 2019 ",
    price: "305,000",
    description: "Unleash your creativity with the powerhouse Apple MacBook Pro 2019. Precision performance meets stunning Retina display. Perfect for designers, developers, and anyone pushing creative boundaries.",
    category: "tech",
    image: "/tinified/17.jpg",
    rating: {
      rate: 3.8,
      count: 679
    }
  },
  {
    id: 18,
    title: "Asus ZenBook ",
    price: "400,000",
    description: "Experience the epitome of elegance and performance with the Asus ZenBook. Slim, lightweight, and powerful, it's your ideal companion for work and play. Elevate your computing experience.",
    category: "tech",
    image: "/tinified/18.jpg",
    rating: {
      rate: 4.7,
      count: 130
    }
  },
  {
    id: 19,
    title: "Gaming GPU core i7 7700k ",
    price: "195,000",
    description: "Immerse yourself in the world of gaming with the Gaming GPU Core i7 7700k. Unmatched graphics performance and speed ensure you're always ahead in the game. Elevate your gaming rig to the next level.",
    category: "tech",
    image: "/tinified/19.jpg",
    rating: {
      rate: 4.5,
      count: 146
    }
  },
  {
    id: 20,
    title: "Homepod Mini - Speakers",
    price: "15,000",
    description: "Fill your space with rich, immersive sound using the HomePod Mini. Compact yet powerful, it delivers an exceptional audio experience. Control your music, smart home, and more with just your voice.",
    category: "tech",
    image: "/tinified/20.jpg",
    rating: {
      rate: 3.6,
      count: 145
    }
  },
  {
    id: 21,
    title: "Apple Iphone 12 Pro ",
    price: "550,000",
    description: "Experience the pinnacle of smartphone technology with the Apple iPhone 12 Pro. Capture moments in stunning detail, enjoy lightning-fast performance, and revel in the beauty of its sleek design.",
    category: "tech",
    image: "/tinified/21.jpg",
    rating: {
      rate: 2.9,
      count: 340
    }
  },
  {
    id: 22,
    title: "Laptop Stand ",
    price: "8,000",
    description: "Elevate your workspace and enhance your productivity with the Laptop Stand. Ergonomically designed, it reduces strain on your neck and back, allowing you to work comfortably for hours.",
    category: "tech",
    image: "/tinified/22.jpg",
    rating: {
      rate: 3.8,
      count: 679
    }
  },
  {
    id: 23,
    title: "Samsung 980 PRO SSD1 ",
    price: "50,000",
    description: "Upgrade your storage speed with the Samsung 980 PRO SSD. Lightning-fast data transfers, reliability, and high capacity make it the ideal choice for gamers, content creators, and professionals.",
    category: "tech",
    image: "/tinified/23.jpg",
    rating: {
      rate: 4.7,
      count: 130
    }
  },
  {
    id: 24,
    title: "Samsung Portable SSD T5 ",
    price: "40,000",
    description: "Carry your data in style with the Samsung Portable SSD T5. Compact, durable, and blazing fast, it's your portable storage solution for large files, photos, videos, and more.",
    category: "tech",
    image: "/tinified/24.jpg",
    rating: {
      rate: 4.5,
      count: 146
    }
  },
  {
    id: 25,
    title: "T500 PLUS Smart Watch",
    price: "5,000",
    description: "Stay connected and active with the T500 PLUS Smartwatch. Track your fitness, receive notifications, and enjoy a range of smart features, all on your wrist. It's your ideal companion for a tech-savvy lifestyle.",
    category: "tech",
    image: "/tinified/25.jpg",
    rating: {
      rate: 3.6,
      count: 145
    }
  },
  {
    id: 26,
    title: "Women's Knitted Poncho",
    price: "8,000",
    description: "Embrace style and warmth with the Women's Knitted Poncho. Perfect for chilly evenings, its elegant design adds a touch of sophistication to any outfit. Stay cozy and chic.",
    category: "clothing",
    image: "/tinified/26.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 27,
    title: "Soft Mesh Panel Baseball Cap with Custom Patches ",
    price: "3,500",
    description: "Make a statement with the Soft Mesh Panel Baseball Cap. Customizable patches add a personal touch, and the breathable design keeps you cool while showcasing your unique style.",
    category: "clothing",
    image: "/tinified/27.jpg",
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 28,
    title: "Nimble Made Men's Shirt",
    price: "5,000",
    description: "Experience exceptional craftsmanship with Nimble Made Men's Shirt. Tailored for a perfect fit, it combines style and comfort effortlessly. Elevate your wardrobe with this timeless piece.",
    category: "clothing",
    image: "/tinified/28.jpg",
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 29,
    title: "Nike Air Force 1",
    price: "85,000",
    description: "Step into iconic style with Nike Air Force 1 sneakers. Known for their timeless design and comfort, these shoes are a fashion staple, perfect for any casual or athletic occasion.",
    category: "clothing",
    image: "/tinified/29.jpg",
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 30,
    title: "Long Sleeve Mini-dress in Red ",
    price: "7,000",
    description: "Make a bold statement with the Long Sleeve Mini-dress in Red. Its vibrant color, coupled with a flattering silhouette, ensures you stand out in any social or formal event. Perfect for making unforgettable impressions.",
    category: "clothing",
    image: "/tinified/30.jpg",
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 31,
    title: "Long Sleeve Pattern Wrap Mini-dress ",
    price: "6,000",
    description: "Embrace elegance in the Long Sleeve Pattern Wrap Mini-dress. Its unique design and comfortable fit make it perfect for special occasions, ensuring you look chic and sophisticated.",
    category: "clothing",
    image: "/tinified/31.jpg",
    rating: {
      rate: 3.9,
      count: 70
    }
  },
  {
    id: 32,
    title: "Elastic High Waist Cargo Pants with Pockets ",
    price: "4,500",
    description: "Combine style and practicality with Elastic High Waist Cargo Pants. Featuring ample pockets and a comfortable fit, these pants are ideal for those who value both fashion and functionality.",
    category: "clothing",
    image: "/tinified/32.jpg",
    rating: {
      rate: 3,
      count: 400
    }
  },
  {
    id: 33,
    title: "'Daddy Chill' Print Bucket Cap",
    price: "4,000",
    description: "Make a playful statement with the 'Daddy Chill' Print Bucket Cap. Its quirky design adds a touch of humor to your outfit, making it a fun accessory for casual outings.",
    category: "clothing",
    image: "/tinified/33.jpg",
    rating: {
      rate: 1.9,
      count: 100
    }
  },
  {
    id: 34,
    title: "Crew Neck Cotton and Wool Knit Jumper ",
    price: "8,000",
    description: "Stay cozy in the Crew Neck Cotton and Wool Knit Jumper. This warm and soft knitwear is a perfect blend of comfort and style, ensuring you stay fashionable during the colder months.",
    category: "clothing",
    image: "/tinified/34.jpg",
    rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 35,
    title: "Cotton Half Sleeve T-Shirt Black",
    price: "5,000",
    description: "A classic choice, the Cotton Half Sleeve T-Shirt in Black is a versatile addition to your wardrobe. Pair it with jeans, skirts, or shorts for a casual yet chic look that never goes out of style.",
    category: "clothing",
    image: "/tinified/35.jpg",
    rating: {
      rate: 2.9,
      count: 470
    }
  },
  {
    id: 36,
    title: "Chanel Heels Ankle Strap ",
    price: "20,000",
    description: "Step into sophistication with Chanel Heels featuring Ankle Straps. These timeless heels add a touch of glamour to any outfit, making them perfect for formal events or nights out on the town.",
    category: "clothing",
    image: "/tinified/36.jpg",
    rating: {
      rate: 4.8,
      count: 319
    }
  },
  {
    id: 37,
    title: "Causal Wide Women's Trouser",
    price: "6,000",
    description: "Stay comfortable and stylish in the Causal Wide Women's Trousers. Their relaxed fit and contemporary design make them a go-to choice for effortless fashion.",
    category: "clothing",
    image: "/tinified/37.jpg",
    rating: {
      rate: 4.8,
      count: 400
    }
  },
  {
    id: 38,
    title: "Causal Unisex Jeans",
    price: "5,000",
    description: "Unisex Jeans offer a versatile and comfortable fit for any occasion. Dress them up or down, these jeans provide a timeless look suitable for both men and women.",
    category: "clothing",
    image: "/tinified/38.jpg",
    rating: {
      rate: 2.9,
      count: 250
    }
  },
  {
    id: 39,
    title: "Winter Black Sweatshirt ",
    price: "7,500",
    description: "Beat the winter chill in the Winter Black Sweatshirt. Its cozy fleece interior and stylish design make it a must-have for staying warm and fashionable during the colder seasons.",
    category: "clothing",
    image: "/tinified/39.jpg",
    rating: {
      rate: 2.2,
      count: 140
    }
  },
  {
    id: 40,
    title: "Atlas x Dunk High SB Lost At Sea ",
    price: "150,000",
    description: "Elevate your sneaker game with the Atlas x Dunk High SB Lost At Sea edition. These sneakers not only provide exceptional comfort but also add a touch of streetwear flair to your style, making them a favorite among sneaker enthusiasts.",
    category: "clothing",
    image: "/tinified/40.jpg",
    rating: {
      rate: 2.6,
      count: 235
    }
  }
]

export const shuffleArray = (array: any[]) => {
  return array.map((product, index, arr) => {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
    return product;
  });
}

export default products;