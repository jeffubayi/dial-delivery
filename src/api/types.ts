export const category = [
  { id: 1, name: "All", type: "all" },
  { id: 2, name: "Мeat", type: "meat" },
  { id: 3, name: "Vegetarian", type: "vegetarian" },
  { id: 4, name: "Grilled", type: "grill" },
  { id: 5, name: "Spicy", type: "spicy" },
  { id: 6, name: "Pepperoni", type: "occluded" },
];

export const sort = [
  { name: "popularity (DESC)", type: "rating", order: "desc" },
  { name: "popularity (ASC)", type: "-rating", order: "asc" },
  { name: "prices (DESC)", type: "price", order: "desc" },
  { name: "prices (ASC)", type: "-price", order: "asc" },
  { name: "name (DESC)", type: "name", order: "desc" },
  { name: "name (ASC)", type: "-name", order: "asc" },
];

export const pizzas = [
  {
    id: "1",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    name: "Pepperoni Fresh with pepper",
    desc: "Chicken ham, sweet pepper, natural milk mozzarella, tomato sauce, Italian herbs, garlic, cheddar cheese",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 670,
        weight: 330,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 803,
        weight: 480,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 999,
        weight: 720,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 803,
    category: "spicy",
    rating: 4,
    delivery: false,
  },
  {
    id: "2",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    name: "cheese",
    desc: "Enlarged natural milk mozzarella, tomatoes, Italian herbs, tomato sauce",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 250,
        weight: 440,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 340,
        weight: 650,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 450,
        weight: 870,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 340,
    category: "vegetarian",
    rating: 6,
    delivery: true,
  },
  {
    id: "3",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    name: "barbecue chicken",
    desc: "Turkey, champignons, increased portion of natural milk mozzarella, tomato sauce",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 470,
        weight: 460,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 560,
        weight: 670,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 770,
        weight: 870,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 560,
    category: "grill",
    rating: 4,
    delivery: false,
  },
  {
    id: "4",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
    name: "Sweet and sour chicken",
    desc: "Chicken ham, pineapples, natural milk mozzarella, tomato sauce",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 580,
        weight: 480,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 660,
        weight: 710,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 730,
        weight: 960,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 660,
    category: "grill",
    rating: 2,
    delivery: true,
  },
  {
    id: "5",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    name: "cheeseburger pizza",
    desc: "Natural milk mozzarella, cheese, champignons, sweet peppers, tomatoes, tomato sauce, basil, red onion",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 675,
        weight: 480,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 785,
        weight: 710,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 890,
        weight: 960,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 785,
    category: "meat",
    rating: 8,
    delivery: true,
  },
  {
    id: "6",
    imageUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/de51de47773843fe95957caab3d7f974_292x292.png",
    name: "Crazy pepperoni",
    desc: "Chicken, natural milk mozzarella, tomato sauce, jalapeno peppers, bell peppers, salsa sauce, tomatoes, red onion",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 375,
        weight: 450,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 465,
        weight: 660,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 795,
        weight: 880,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 465,
    category: "grill",
    rating: 2,
    delivery: false,
  },
  {
    id: "7",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
    name: " Pepperoni",
    desc: "100% beef meatballs, turkey, 100% beef pepperoni, natural milk mozzarella, tomato sauce",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 550,
        weight: 440,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 655,
        weight: 660,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 790,
        weight: 910,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 655,
    category: "occluded",
    rating: 9,
    delivery: true,
  },
  {
    id: "8",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    name: "Margarita",
    desc: "Chicken, natural milk mozzarella, chicken ham, barbecue sauce, tomato sauce, red onion",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 672,
        weight: 440,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 786,
        weight: 640,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 892,
        weight: 870,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 786,
    category: "grill",
    rating: 10,
    delivery: false,
  },
  {
    id: "9",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    name: "four seasons",
    desc: "Chicken, 100% beef pepperoni, natural milk mozzarella, sweet and sour sauce, tomato sauce",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 573,
        weight: 440,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 684,
        weight: 630,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 865,
        weight: 880,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 684,
    category: "meat",
    rating: 10,
    delivery: true,
  },
  {
    id: "10",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
    name: "Vegetables and mushrooms 🌱",
    desc: " Beef bacon, chicken, 100% beef pepperoni, natural milk mozzarella, pizza sauce, red onion",
    sizes: [
      {
        id: "1",
        size: 25,
        price: 469,
        weight: 440,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: false,
          },
        ],
      },
      {
        id: "2",
        size: 30,
        price: 587,
        weight: 680,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
      {
        id: "3",
        size: 35,
        price: 766,
        weight: 1200,
        type: [
          {
            id: "1",
            typeName: "Traditional",
            isShow: true,
          },
          {
            id: "2",
            typeName: "Thin",
            isShow: true,
          },
        ],
      },
    ],
    price: 587,
    category: "vegetarian",
    rating: 7,
    delivery: true,
  },
];
