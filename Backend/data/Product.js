const products = [
  {
    name: "MEN'S HARPOON 2 EYE BOOT",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe23_5444b0e6-72c7-450c-aab6-081a70660dcd_600x.jpg_v=1494316272?updatedAt=1733198634190",
    description:
      "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
    price: 135,
    countInStock: 4,
    rating: 4.5,
    numReview: 6,
  },

  {
    name: "CLIMBING SHOE",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe26_de67b47c-8d95-481f-aa85-268cdc309e4e.jpg_v=1494314652?updatedAt=1733198633327",
    description:
      "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
    price: 675,
    countInStock: 0,
    rating: 4,
    numReview: 6,
  },

  {
    name: "DIABETIC SHOE",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe25_2b59f812-76f2-448b-8835-d7ad151027e4_600x.jpg_v=1494315511?updatedAt=1733198632269",
    description:
      "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
    price: 258,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "UltraFlex Performance Sneakers",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe22_48464579-a7fe-40ba-ad66-8c6aa7ef2bb1.jpg_v=1494315721?updatedAt=1733198580161",
    description:
      "Elevate your athletic performance with the UltraFlex Performance Sneakers. Designed with advanced FlexTech technology, these shoes offer unmatched flexibility and support, allowing for rapid movements and quick transitions. The breathable mesh upper keeps your feet cool during intense workouts, while the responsive cushioning absorbs impact with every step. Perfect for runners, gym enthusiasts, and anyone looking to boost their performance. The non-slip rubber sole ensures traction on any surface, and the sleek design transitions easily from the gym to casual wear. Available in multiple colors to match your style. Ideal for all fitness levels. Experience comfort that goes the distance. Lightweight yet durable for everyday use.",
    price: 254,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "SpeedRunner 360 Running Shoes",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe21.jpg_v=1494317531?updatedAt=1733198493995",
    description:
      "Run faster, longer, and stronger with the SpeedRunner 360 Running Shoes. These shoes are engineered for athletes who demand both speed and comfort. Featuring a lightweight, breathable upper mesh and a high-traction rubber outsole, you can expect a smooth, responsive ride with every stride. The SpeedRunner 360 is equipped with a dynamic midsole that provides superior cushioning and support for both short sprints and long-distance runs. A seamless design ensures a snug fit, reducing friction and chafing. Perfect for daily training or race-day performance. Available in both men’s and women’s sizes. A must-have for serious runners. Your performance is just a step away.",
    price: 789,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "EverStride Casual Comfort Sneakers",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe12_600x.jpg_v=1494314503?updatedAt=1733198459420",
    description:
      "Step into effortless style and comfort with the EverStride Casual Comfort Sneakers. Designed for all-day wear, these sneakers offer a soft, padded insole that cushions your feet with each step. The durable yet lightweight construction makes them ideal for running errands or casual outings. The breathable fabric ensures your feet stay fresh, while the slip-resistant sole offers traction on various surfaces. Whether you’re heading to work, the gym, or just out for a walk, the EverStride sneakers provide a versatile solution. Available in neutral tones that complement any wardrobe. A great choice for anyone on the go. Simple, stylish, and practical.",
    price: 123,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "UrbanGlide High-Top Sneakers",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe11.jpg_v=1494314260?updatedAt=1733198458528",
    description:
      "Add some edge to your everyday look with the UrbanGlide High-Top Sneakers. These trendy shoes combine fashion and function, making them perfect for streetwear enthusiasts. The padded ankle collar provides extra support while the cushioned footbed ensures all-day comfort. Made with premium synthetic leather, the UrbanGlide sneakers are durable and stylish, with a sleek design that pairs well with jeans or joggers. The high-top design offers added ankle protection, making them suitable for both active use and casual wear. Available in classic black, white, or bold colorways. Designed to make a statement with every step. Ideal for those who want to stand out in both comfort and style",
    price: 412,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "TrailBlazer Outdoor Hiking Boots",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe7_600x.jpg_v=1494314486?updatedAt=1733198410596",
    description:
      "Gear up for your next adventure with the TrailBlazer Outdoor Hiking Boots. Built for rugged terrains, these boots provide superior ankle support and protection with their durable, waterproof leather construction. The non-slip rubber sole offers exceptional grip, even on wet or rocky surfaces, while the shock-absorbing midsole cushions each step on uneven ground. Perfect for hiking, camping, or outdoor exploration, the TrailBlazer boots are designed to keep your feet dry and comfortable, no matter the weather. The reinforced toe cap provides extra durability, and the breathable mesh lining ensures moisture-wicking comfort. Ready for your next outdoor challenge.",
    price: 658,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "CloudTech Memory Foam Flats",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe9_8a5e5186-31f5-47cb-a8cf-fecf2349bed7_600x.jpg_v=1494325511?updatedAt=1733198408219",
    description:
      "Experience the ultimate in comfort with the CloudTech Memory Foam Flats. Featuring a soft memory foam insole, these flats mold to the shape of your feet, providing customized support with every wear. The lightweight construction ensures your feet won’t feel fatigued, while the cushioned footbed absorbs impact, making them perfect for all-day wear. The sleek design and versatile color options make them easy to pair with both casual and semi-formal outfits. Ideal for busy professionals or anyone seeking style without compromising comfort. Slip them on for a day of running errands or a casual day out. Breathable materials ensure your feet stay cool and dry.",
    price: 471,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },

  {
    name: "VeloTrack Running Shoes – Men’s",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe3_600x.jpg_v=1494317531?updatedAt=1733198356019",
    description:
      "Push your limits with the VeloTrack Running Shoes for men. These high-performance shoes are designed to keep you on track, whether you're hitting the track or the pavement. Featuring a lightweight mesh upper for breathability and a responsive cushioning system, the VeloTrack shoes provide the ideal balance of comfort and support. The reinforced heel and toe areas add durability, while the flexible outsole allows for a natural stride. Whether you're training for a marathon or just enjoy the occasional jog, the VeloTrack Running Shoes are built to meet your needs. Available in a range of colors to suit your style. Get ready to run like never before.",
    price: 455,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "StealthGrip All-Terrain Sports Shoes",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/collection3_large.jpg_v=1613156071?updatedAt=1733197969735",
    description:
      "Tackle any challenge with the StealthGrip All-Terrain Sports Shoes. Built for adventure, these shoes feature an advanced tread pattern designed to provide superior grip on various surfaces, from mud and gravel to wet pavement. The durable, water-resistant upper keeps your feet dry in all conditions, while the cushioned midsole absorbs shocks and reduces foot fatigue. Whether you’re trail running, hiking, or exploring the great outdoors, these shoes provide the support and protection you need. The lightweight construction ensures ease of movement, while the reinforced toe and heel add durability. Ready for any terrain, the StealthGrip shoes will keep you moving forward.",
    price: 125,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "PrimeFit Pro Training Sneakers",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg_v=1613157025?updatedAt=1733198135686",
    description:
      "Maximize your workout with the PrimeFit Pro Training Sneakers. Designed for athletes who demand high performance, these shoes feature a supportive, breathable mesh upper that enhances airflow to keep your feet cool during intense sessions. The responsive midsole cushioning adapts to your movements, offering dynamic support for jumps, sprints, and strength training. The high-traction outsole ensures stability on all surfaces, giving you the grip you need during quick direction changes. The lightweight design minimizes foot fatigue, while the sleek, modern look makes these sneakers stylish enough for both gym sessions and casual wear. Take your fitness to the next level with PrimeFit Pro.",
    price: 589,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "Nike Air Zoom Pegasus 40 Men's Running Shoes - Black/White, Lightweight & Breathable",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg_v=1613157026?updatedAt=1733198157297",
    description:
      "The Nike Air Zoom Pegasus 40 Men's Running Shoes offer the perfect blend of style, comfort, and performance. Designed with a breathable mesh upper, they keep your feet cool and comfortable during long runs or workouts. The Zoom Air cushioning and React foam midsole ensure responsive energy return with every step. A durable rubber outsole provides excellent traction on various surfaces. The Flywire technology integrated into the laces delivers a secure and adaptive fit. With a sleek Black/White design, these shoes are versatile for both athletic and casual use. Lightweight and durable, they’re ideal for runners seeking comfort and reliability. Available in multiple sizes to suit your needs.",
    price: 426,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "Adidas Ultraboost Light Running Shoes - Grey/Orange, High Energy Return",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/RS-X-Efekt-Unisex-Sneakers?updatedAt=1736135612480",
    description:
      "The Adidas Ultraboost Light offers a sleek design and unparalleled comfort for runners of all levels. Featuring a Primeknit+ upper for adaptive support and a Light Boost midsole for maximum energy return, these shoes are built for performance. A Stretchweb outsole with Continental™ rubber provides excellent traction on wet and dry surfaces. Stylish Grey/Orange accents make it perfect for both workouts and casual wear.",
    price: 198,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "Puma RS-X³ Puzzle Sneakers - Multicolor, Bold and Trendy Design",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
    description:
      "Stand out with the Puma RS-X³ Puzzle Sneakers, designed for those who love bold, vibrant styles. These sneakers feature an extra-chunky silhouette with multi-layered mesh and leather overlays for a statement look. A cushioned midsole ensures all-day comfort, while the rubber outsole delivers durability. Ideal for casual outings, they pair effortlessly with streetwear or everyday attire.",
    price: 458,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
  {
    name: "Skechers Go Walk Arch Fit - Black, Comfort & Support Walking Shoes",
    image:
      "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/19030464a.webp?updatedAt=1736135192368",
    description:
      "The Skechers Go Walk Arch Fit shoes are a perfect choice for walking enthusiasts. Designed with podiatrist-certified Arch Fit insoles, they provide superior arch support and reduce foot fatigue. A lightweight mesh upper enhances breathability, and the durable outsole offers excellent grip. These shoes are ideal for long walks, travel, or casual wear, blending style and functionality seamlessly.",
    price: 438,
    countInStock: 4,
    rating: 4,
    numReview: 6,
  },
];

module.exports = products;
