const mockData = [
  {
    id: "06b42da3-2efd-4c84-bbcf-fbb6681ddb20",
    name: "Grilled Chicken Salad",
    description: "Fresh salad with grilled chicken, tomatoes, and cucumbers.",
    price: 9.99,
    imageUrl:
      "https://www.shutterstock.com/shutterstock/videos/3529752559/thumb/1.jpg?ip=x480",
    tags: ["Healthy", "Salad", "Low Carb"],
    calories: 400,
    protein: 35,
    fats: 10,
    carbs: 20,
    note: "",
    quantity: 0,
  },
  {
    id: "6227d36e-9ca5-4cf1-94a8-b3a10f7167f5",
    name: "Beef Burger",
    description: "Juicy beef burger with cheese, lettuce, and tomato.",
    price: 12.5,
    imageUrl:
      "https://media.istockphoto.com/id/617364554/photo/hamburger-with-fries.jpg?s=612x612&w=0&k=20&c=t8fMIRewNFRU7YSMNWIx2axoyZNjsh0cxHM4vYMALf8=",
    tags: ["Burger", "Comfort Food"],
    calories: 850,
    protein: 45,
    fats: 40,
    carbs: 60,
    note: "",
    quantity: 0,
  },
  {
    id: "823feaa0-db45-4cc6-a212-b68ee8381069",
    name: "Vegan Bowl",
    description:
      "A hearty vegan bowl with quinoa, chickpeas, and roasted veggies.",
    price: 11.25,
    imageUrl:
      "https://www.eatingwell.com/thmb/YHbocBajlPlMXuv_aeatcyIUKi4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-269844-vegan-superfood-grain-bowls-Hero-04-6649468763cd4914a69434e21aa1d272.jpg",
    tags: ["Vegan", "Gluten Free", "Healthy"],
    calories: 550,
    protein: 18,
    fats: 15,
    carbs: 65,
    note: "",
    quantity: 0,
  },
  {
    id: "e960f916-e722-4812-9373-2c049236347e",
    name: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
    price: 13.99,
    imageUrl:
      "https://www.simplyrecipes.com/thmb/4rVYqq80fd-kHTx25yKtd8bvHzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Pasta-Carbonara-LEAD-4-3c433b3057e7465b8738b43de762df06.jpg",
    tags: ["Italian", "Pasta"],
    calories: 720,
    protein: 28,
    fats: 30,
    carbs: 75,
    note: "",
    quantity: 0,
  },
  {
    id: "3906b03e-0bc3-4da4-be54-cc74e27a2bfe",
    name: "Miso Soup",
    description: "Light Japanese soup with tofu, seaweed, and green onions.",
    price: 4.99,
    imageUrl:
      "https://www.crowdedkitchen.com/wp-content/uploads/2020/08/vegan-miso-soup.jpg",
    tags: [],
    calories: 120,
    protein: 8,
    fats: 3,
    carbs: 12,
    note: "",
    quantity: 0,
  },
  {
    id: "e06626d5-0329-40ad-90d4-3a5d1c1ce572",
    name: "Pancakes",
    description: "Stack of fluffy pancakes with syrup and butter.",
    price: 7.5,
    imageUrl:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    tags: [],
    calories: 600,
    protein: 12,
    fats: 20,
    carbs: 90,
    note: "",
    quantity: 0,
  },
];

function setQuantityByIdInPlace(arr, meal, quantity, id, idKey = "id") {
  if (!Array.isArray(arr)) throw new Error("arr must be an array");
  const q = Number(quantity);
  if (!Number.isFinite(q)) throw new Error("quantity must be a finite number");

  // If quantity is 0, delete all items with the matching id
  if (q === 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
      const item = arr[i];
      if (item && item[idKey] === id) arr.splice(i, 1);
    }
    return arr;
  }

  // Otherwise update; track if any existed
  let found = false;
  for (const item of arr) {
    if (item && item[idKey] === id) {
      item.quantity = q;
      found = true;
    }
  }

  // If none existed, insert new with quantity 1
  if (!found) {
    const newItem = { ...meal };
    if (newItem[idKey] == null) newItem[idKey] = id;
    newItem.quantity = 1;
    arr.push(newItem);
  }

  return arr; // mutated in place
}

export { mockData, setQuantityByIdInPlace };
