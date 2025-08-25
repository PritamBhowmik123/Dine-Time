const restaurants = [
  {
    name: "Sea Grill of Merrick Park",
    seats: 50,
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
    address: `4250 Salzedo Street, Suite 1425Coral Gables, FL 33146`,
    opening: "11:30",
    closing: "23:00",
  },
  {
    address: "123 Ocean Drive, Suite 101, Miami Beach, FL 33139",
    closing: "22:00",
    image:
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Ocean's Edge Bistro",
    opening: "10:00",
    seats: 50,
  },
  {
    address: "789 Sunset Blvd, Suite 202, Los Angeles, CA 90069",
    closing: "00:00",
    image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg",
    name: "Sunset Grill",
    opening: "11:00",
    seats: 75,
  },
  {
    address: "456 River Road, Suite 300, New York, NY 10001",
    closing: "23:30",
    image: "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg",
    name: "Riverside Diner",
    opening: "09:00",
    seats: 65,
  },
  {
    address: "321 Bay Street, Suite 400, San Francisco, CA 94133",
    closing: "22:30",
    image: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg",
    name: "Bayview Café",
    opening: "10:30",
    seats: 80,
  },
  {
    address: "555 Lake Avenue, Suite 120, Chicago, IL 60611",
    closing: "23:00",
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
    name: "Lakeside Eatery",
    opening: "11:00",
    seats: 70,
  },
  {
    address: "789 Fifth Avenue, Suite 201, New York, NY 10022",
    closing: "21:30",
    image: "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg",
    name: "Central Park Café",
    opening: "08:30",
    seats: 60,
  },
  {
    address: "1000 Broadway, Suite 500, Nashville, TN 37203",
    closing: "00:30",
    image:
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Music City Grill",
    opening: "12:00",
    seats: 100,
  },
  {
    address: "222 Elm Street, Suite 101, Dallas, TX 75201",
    closing: "22:00",
    image:
      "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Texas BBQ House",
    opening: "10:00",
    seats: 90,
  },
  {
    address: "789 Pine Street, Suite 204, Seattle, WA 98101",
    closing: "23:00",
    image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg",
    name: "Evergreen Eatery",
    opening: "11:30",
    seats: 85,
  },
  {
    address: "456 King Street, Suite 100, Charleston, SC 29403",
    closing: "22:00",
    image:
      "https://images.pexels.com/photos/1628020/pexels-photo-1628020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Lowcountry Diner",
    opening: "09:30",
    seats: 55,
  },
  {
    address: "789 Bourbon Street, Suite 300, New Orleans, LA 70116",
    closing: "01:00",
    image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
    name: "Bourbon Street Grill",
    opening: "11:00",
    seats: 110,
  },
  {
    address: "123 Main Street, Suite 150, Las Vegas, NV 89109",
    closing: "23:30",
    image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg",
    name: "Vegas Strip Café",
    opening: "12:00",
    seats: 120,
  },
];
const carouselImages = [
  {
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_1",
  },
  {
    images: [
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_2",
  },
  {
    images: [
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=170.625&fit=crop&h=276.25",
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&h=138.125&fit=crop&w=154.375&dpr=1",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&h=138.125&fit=crop&w=154.375&dpr=1",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_3",
  },
  {
    images: [
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_4",
  },
  {
    images: [
      "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_5",
  },
  {
    images: [
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_6",
  },
  {
    images: [
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=236.25&fit=crop&h=382.5",
    ],
    res_id: "/restaurants/restaurant_7",
  },
  {
    images: [
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_8",
  },
  {
    images: [
      "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_9",
  },
  {
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_10",
  },
  {
    images: [
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_11",
  },
  {
    images: [
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_12",
  },
];

const slots = [
  {
    ref_id: "/restaurants/restaurant_1",
    slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  },
  {
    ref_id: "/restaurants/restaurant_2",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    ref_id: "/restaurants/restaurant_3",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
  {
    ref_id: "/restaurants/restaurant_4",
    slot: [
      "09:00",
      "11:00",
      "13:00",
      "15:00",
      "17:00",
      "19:00",
      "21:00",
      "23:00",
    ],
  },
  {
    ref_id: "/restaurants/restaurant_5",
    slot: ["10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  },
  {
    ref_id: "/restaurants/restaurant_6",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
  },
  {
    ref_id: "/restaurants/restaurant_7",
    slot: ["08:30", "10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  },
  {
    ref_id: "/restaurants/restaurant_8",
    slot: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  },
  {
    ref_id: "/restaurants/restaurant_9",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    ref_id: "/restaurants/restaurant_10",
    slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  },
  {
    ref_id: "/restaurants/restaurant_11",
    slot: ["09:30", "11:30", "13:30", "15:30", "17:30", "19:30"],
  },
  {
    ref_id: "/restaurants/restaurant_12",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
  
];

const menu = [
  {
    ref_id: "/restaurants/restaurant_1",
    dishes: [
      { name: "Jambalaya", price: 19, category: "Main Course" },
      { name: "Gumbo", price: 16, category: "Soup" },
      { name: "Fried Catfish", price: 18, category: "Main Course" },
      { name: "Beignets", price: 6, category: "Dessert" },
      { name: "Cajun Shrimp Skewers", price: 12, category: "Starter" },
      { name: "Po' Boy Sandwich", price: 15, category: "Main Course" },
      { name: "Pecan Pie", price: 7, category: "Dessert" },
      { name: "Creole Salad", price: 10, category: "Salad" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_2",
    dishes: [
      { name: "Margherita Pizza", price: 14, category: "Main Course" },
      { name: "Pepperoni Pizza", price: 16, category: "Main Course" },
      { name: "Caprese Salad", price: 11, category: "Salad" },
      { name: "Tiramisu", price: 8, category: "Dessert" },
      { name: "Bruschetta", price: 9, category: "Starter" },
      { name: "Minestrone Soup", price: 7, category: "Soup" },
      { name: "Fettuccine Alfredo", price: 17, category: "Main Course" },
      { name: "Gelato", price: 6, category: "Dessert" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_3",
    dishes: [
      { name: "Chicken Tikka Masala", price: 18, category: "Main Course" },
      { name: "Butter Naan", price: 5, category: "Starter" },
      { name: "Paneer Butter Masala", price: 16, category: "Main Course" },
      { name: "Gulab Jamun", price: 6, category: "Dessert" },
      { name: "Dal Tadka", price: 14, category: "Main Course" },
      { name: "Masala Papad", price: 4, category: "Starter" },
      { name: "Veg Biryani", price: 15, category: "Main Course" },
      { name: "Kheer", price: 7, category: "Dessert" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_4",
    dishes: [
      { name: "Sushi Platter", price: 22, category: "Main Course" },
      { name: "Miso Soup", price: 6, category: "Soup" },
      { name: "Tempura Prawns", price: 12, category: "Starter" },
      { name: "Ramen", price: 17, category: "Main Course" },
      { name: "Sashimi", price: 20, category: "Main Course" },
      { name: "Edamame", price: 5, category: "Starter" },
      { name: "Mochi Ice Cream", price: 8, category: "Dessert" },
      { name: "Seaweed Salad", price: 9, category: "Salad" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_5",
    dishes: [
      { name: "Cheeseburger", price: 14, category: "Main Course" },
      { name: "BBQ Ribs", price: 20, category: "Main Course" },
      { name: "Buffalo Wings", price: 11, category: "Starter" },
      { name: "Caesar Salad", price: 10, category: "Salad" },
      { name: "Mac & Cheese", price: 12, category: "Main Course" },
      { name: "Clam Chowder", price: 9, category: "Soup" },
      { name: "Apple Pie", price: 7, category: "Dessert" },
      { name: "Brownie Sundae", price: 8, category: "Dessert" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_6",
    dishes: [
      { name: "Pad Thai", price: 15, category: "Main Course" },
      { name: "Tom Yum Soup", price: 8, category: "Soup" },
      { name: "Spring Rolls", price: 7, category: "Starter" },
      { name: "Green Curry", price: 16, category: "Main Course" },
      { name: "Thai Fried Rice", price: 14, category: "Main Course" },
      { name: "Papaya Salad", price: 9, category: "Salad" },
      { name: "Mango Sticky Rice", price: 8, category: "Dessert" },
      { name: "Coconut Ice Cream", price: 6, category: "Dessert" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_7",
    dishes: [
      { name: "Falafel Wrap", price: 12, category: "Main Course" },
      { name: "Hummus with Pita", price: 9, category: "Starter" },
      { name: "Shawarma Plate", price: 15, category: "Main Course" },
      { name: "Lentil Soup", price: 7, category: "Soup" },
      { name: "Greek Salad", price: 10, category: "Salad" },
      { name: "Baklava", price: 6, category: "Dessert" },
      { name: "Grilled Kebab", price: 16, category: "Main Course" },
      { name: "Tabbouleh", price: 8, category: "Salad" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_8",
    dishes: [
      { name: "Sizzling Fajitas", price: 17, category: "Main Course" },
      { name: "Nachos", price: 10, category: "Starter" },
      { name: "Tacos al Pastor", price: 14, category: "Main Course" },
      { name: "Guacamole", price: 8, category: "Starter" },
      { name: "Quesadilla", price: 12, category: "Main Course" },
      { name: "Chicken Enchiladas", price: 16, category: "Main Course" },
      { name: "Churros", price: 7, category: "Dessert" },
      { name: "Flan", price: 6, category: "Dessert" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_9",
    dishes: [
      { name: "Croissant", price: 5, category: "Starter" },
      { name: "French Onion Soup", price: 9, category: "Soup" },
      { name: "Ratatouille", price: 15, category: "Main Course" },
      { name: "Coq au Vin", price: 20, category: "Main Course" },
      { name: "Nicoise Salad", price: 12, category: "Salad" },
      { name: "Quiche Lorraine", price: 14, category: "Main Course" },
      { name: "Creme Brulee", price: 8, category: "Dessert" },
      { name: "Macarons", price: 7, category: "Dessert" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_10",
    dishes: [
      { name: "Kimchi Stew", price: 13, category: "Soup" },
      { name: "Bibimbap", price: 16, category: "Main Course" },
      { name: "Korean Fried Chicken", price: 14, category: "Starter" },
      { name: "Japchae", price: 15, category: "Main Course" },
      { name: "Bulgogi", price: 18, category: "Main Course" },
      { name: "Seafood Pancake", price: 12, category: "Starter" },
      { name: "Hotteok", price: 6, category: "Dessert" },
      { name: "Bingsu", price: 8, category: "Dessert" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_11",
    dishes: [
      { name: "Fish and Chips", price: 15, category: "Main Course" },
      { name: "Shepherd’s Pie", price: 17, category: "Main Course" },
      { name: "Mushroom Soup", price: 8, category: "Soup" },
      { name: "Cauliflower Cheese", price: 10, category: "Starter" },
      { name: "Ploughman’s Salad", price: 11, category: "Salad" },
      { name: "Scotch Eggs", price: 9, category: "Starter" },
      { name: "Sticky Toffee Pudding", price: 7, category: "Dessert" },
      { name: "Trifle", price: 8, category: "Dessert" },
    ],
  },
  {
    ref_id: "/restaurants/restaurant_12",
    dishes: [
      { name: "Peking Duck", price: 24, category: "Main Course" },
      { name: "Sweet and Sour Pork", price: 16, category: "Main Course" },
      { name: "Dumplings", price: 9, category: "Starter" },
      { name: "Hot and Sour Soup", price: 8, category: "Soup" },
      { name: "Kung Pao Chicken", price: 17, category: "Main Course" },
      { name: "Fried Rice", price: 12, category: "Main Course" },
      { name: "Spring Rolls", price: 7, category: "Starter" },
      { name: "Sesame Balls", price: 6, category: "Dessert" },
    ],
  },
];


export { carouselImages, menu, restaurants, slots };

