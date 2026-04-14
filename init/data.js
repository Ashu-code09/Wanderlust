const sampleListings = [
{
title: "Beachside Villa",
description: "Beautiful villa with ocean view",
image: "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fHww",
price: 25000,
location: "Goa",
country: "India"
},
{
title: "Mountain Cabin",
description: "Cozy wooden cabin in the mountains",
image: "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 12000,
location: "Manali",
country: "India"
},
{
title: "City Apartment",
description: "Modern apartment in the city center",
image: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 18000,
location: "Mumbai",
country: "India"
},
{
title: "Desert Camp",
description: "Luxury tents in the desert",
image: "https://plus.unsplash.com/premium_photo-1686090450346-f418fff5486e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 9000,
location: "Jaisalmer",
country: "India"
},
{
title: "Lake House",
description: "Peaceful stay near the lake",
image: "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 15000,
location: "Udaipur",
country: "India"
},
{
title: "Hilltop Cottage",
description: "Cottage with panoramic hill views",
image: "https://images.unsplash.com/photo-1650920950150-090f492764ea?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 13000,
location: "Darjeeling",
country: "India"
},
{
title: "Forest Retreat",
description: "Stay surrounded by dense forest",
image: "https://images.unsplash.com/photo-1697807650304-907257330a3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 11000,
location: "Coorg",
country: "India"
},
{
title: "Luxury Penthouse",
description: "High-end penthouse with skyline view",
image: "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 45000,
location: "Delhi",
country: "India"
},
{
title: "Countryside Farmhouse",
description: "Relaxing farmhouse stay",
image: "https://plus.unsplash.com/premium_photo-1733514691417-1e31ea6ec492?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 8000,
location: "Punjab",
country: "India"
},
{
title: "Island Resort Room",
description: "Private room in island resort",
image: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 30000,
location: "Andaman",
country: "India"
},
{
title: "Riverside Cottage",
description: "Cottage beside flowing river",
image: "https://images.unsplash.com/photo-1570127828934-c60aa3e1e5af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 14000,
location: "Rishikesh",
country: "India"
},
{
title: "Heritage Haveli",
description: "Traditional haveli with royal feel",
image: "https://images.unsplash.com/photo-1629725053305-9bb7886f9545?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 20000,
location: "Jaipur",
country: "India"
},
{
title: "Ski Lodge",
description: "Perfect stay for ski lovers",
image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 22000,
location: "Gulmarg",
country: "India"
},
{
title: "Backwater Houseboat",
description: "Experience Kerala backwaters",
image: "https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 27000,
location: "Alleppey",
country: "India"
},
{
title: "Tea Garden Bungalow",
description: "Stay among lush tea gardens",
image: "https://images.unsplash.com/photo-1654535095187-769ba364ad7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 16000,
location: "Assam",
country: "India"
},
{
title: "Modern Studio",
description: "Compact studio apartment",
image: "https://images.unsplash.com/photo-1616045152636-8dc45bf00e4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 10000,
location: "Bangalore",
country: "India"
},
{
title: "Cliffside Villa",
description: "Villa on cliff with stunning view",
image: "https://images.unsplash.com/photo-1759084689254-9f0709fae491?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 35000,
location: "Santorini",
country: "Greece"
},
{
title: "Snow Chalet",
description: "Warm chalet in snowy region",
image: "https://images.unsplash.com/photo-1513801469483-6c115f89c689?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 28000,
location: "Zermatt",
country: "Switzerland"
},
{
title: "Tokyo Capsule Room",
description: "Compact capsule style room",
image: "https://thumbs.dreamstime.com/b/tokyo-japan-june-interior-view-capsule-hotel-city-center-hotels-expensive-structures-very-famous-99080039.jpg",
price: 7000,
location: "Tokyo",
country: "Japan"
},
{
title: "Paris Loft",
description: "Stylish loft near Eiffel Tower",
image: "https://images.unsplash.com/photo-1668015642223-bab4d1d724e0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 32000,
location: "Paris",
country: "France"
},
{
title: "New York Studio",
description: "Studio apartment in Manhattan",
image: "https://plus.unsplash.com/premium_photo-1661882126637-5b2ba33aab27?q=80&w=1276&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 40000,
location: "New York",
country: "USA"
},
{
title: "Sydney Harbour Apartment",
description: "Apartment with harbour view",
image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 38000,
location: "Sydney",
country: "Australia"
},
{
title: "London Townhouse",
description: "Classic townhouse stay",
image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 42000,
location: "London",
country: "UK"
},
{
title: "Dubai Luxury Suite",
description: "Premium suite in skyscraper",
image: "https://plus.unsplash.com/premium_photo-1661875135365-16aab794632f?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 50000,
location: "Dubai",
country: "UAE"
},
{
title: "Bali Jungle Villa",
description: "Private villa in tropical jungle",
image: "https://plus.unsplash.com/premium_photo-1675745329416-34e44eabb9f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 26000,
location: "Bali",
country: "Indonesia"
},
{
title: "Maldives Water Villa",
description: "Villa above crystal clear water",
image: "https://images.unsplash.com/photo-1590523277760-06f4e9939d1a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 60000,
location: "Maldives",
country: "Maldives"
},
{
title: "Rome Heritage Apartment",
description: "Apartment in historic building",
image: "https://plus.unsplash.com/premium_photo-1676657955279-8fd22fbb75e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 29000,
location: "Rome",
country: "Italy"
},
{
title: "Barcelona Beach Apartment",
description: "Apartment near the beach",
image: "https://plus.unsplash.com/premium_photo-1661963542944-0d1fc8e66f83?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
price: 24000,
location: "Barcelona",
country: "Spain"
},
{
title: "Bangkok Riverside Hotel Room",
description: "Room overlooking Chao Phraya river",
image: "https://images.trvl-media.com/lodging/1000000/30000/21100/21007/cf48e328.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
price: 17000,
location: "Bangkok",
country: "Thailand"
},
{
title: "Cape Town Ocean Villa",
description: "Luxury villa with ocean view",
image: "https://www.capetownvillas.net/wp-content/uploads/2022/07/ocean-villa-ocean-villa-atlantic-ocean-views-304560043.jpg",
price: 33000,
location: "Cape Town",
country: "South Africa"
}
];

module.exports = { data: sampleListings };