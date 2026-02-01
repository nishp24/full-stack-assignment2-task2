const products = [
    { name: "Nothing Phone 2a", price: 15000, rating: 4.8, category: "Electronics", image: "https://m.media-amazon.com/images/I/61oycK5i7qL._AC_UF894,1000_QL80_.jpg" },
    { name: "Macbook m1", price: 50000, rating: 4.2, category: "Electronics", image: "https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg" },
    { name: "Airpods", price: 2000, rating: 4.0, category: "Electronics", image: "https://m.media-amazon.com/images/I/51ekvilNtUL._AC_UF1000,1000_QL80_.jpg" },
    { name: "AppleWatch", price: 5000, rating: 3.9, category: "Electronics", image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg" },
    { name: "Dyson HairDryer", price: 22000, rating: 4.1, category: "Electronics", image: "https://m.media-amazon.com/images/I/51+jOkLhJNL._AC_UF1000,1000_QL80_.jpg" },
  
    { name: "Gucci Bags", price: 20000, rating: 3.2, category: "Clothing", image:"https://runwaycatalog.in/wp-content/uploads/2025/02/Gucci-Handbag-Women-2-2.png.webp" },
    { name: "Allen Solly T-Shirts", price: 600, rating: 4.5, category: "Clothing", image:"https://imagescdn.allensolly.com/img/app/product/8/890209-10761964.jpg" },
    { name: "HnM trousers", price: 900, rating: 4.6, category: "Clothing", image: "https://image.hm.com/assets/hm/11/00/11005024e6cd2003786261157e50523cf41da3c0.jpg?imwidth=786" },
    { name: "ZARA denims", price: 2500, rating: 4.4, category: "Clothing", image: "https://5.imimg.com/data5/ANDROID/Default/2023/5/306606118/VJ/MF/UT/70222664/product-jpeg.jpg"},
    { name: "Jordan Shoes", price: 8500, rating: 4.2, category: "Clothing", image: "https://www.superkicks.in/cdn/shop/files/1_b008f61a-d47f-44f4-9816-fec71809af75.jpg?v=1723883009" },
  
    { name: "PAC cosmetics", price: 2500, rating: 4.0, category: "Cosmetics", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJxHzZfoPkT1JWwkMo_l_9qlCdVUeahR86Q&s" },
    { name: "MAC Foundations", price: 3000, rating: 3.4, category: "Cosmetics", image:"https://prettycosmo.com/cdn/shop/files/MAC_FY24_SFFKaizen_CGIAmbient_Group_GLOBAL_sRGB72.jpg?v=1750842611" },
    { name: "Chanel Perfume", price: 15000, rating: 4.0, category: "Cosmetics", image:"https://static.sweetcare.com/img/prd/488/v-638561382441823245/chanel-007909cl_01.webp" },
    { name: "Charlotte Tilbury lipsticks", price: 4500, rating: 4.0, category: "Cosmetics", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfeE377KIpUDwJkuEEkBrZli0-VOgXAJNfg&s" },
    { name: "Huda BeautyPallete", price: 4000, rating: 3.7, category: "Cosmetics", image:"https://www.thebeautyworldstore.com/cdn/shop/files/27C9E6B2-CDB4-42A4-9545-F3452D115DDC.jpg?v=1722278998" },
  
    { name: "Milton Bottles", price: 1200, rating: 4.8, category: "Home", image:"https://m.media-amazon.com/images/I/81KrnHiiIHL.jpg" },
    { name: "NestAsia Tumblers", price: 500, rating: 4.3, category: "Home", image:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/0101a5e1-ea74-4a9d-b298-804d929a0c74.__CR0,0,600,450_PT0_SX600_V1___.png" },
    { name: "Dishes", price: 2300, rating: 4.2, category: "Home", image:"https://sc04.alicdn.com/kf/H90fa8cbbfc054691a07ebe4bde88a9a6d.jpg" },
    { name: "Home Decor", price: 1200, rating: 4.5, category: "Home", image:"https://www.ellementry.com/cdn/shop/articles/Banner_12_1.webp?v=1714556617" },
    { name: "Premium Bedsheets", price: 600, rating: 4.6, category: "Home", image:"https://img.cdnx.in/44159/SKU-0670_0-1710850938363.jpg?width=600&format=webp" }
  ];
  
  const productContainer = document.getElementById("products");
  const sortSelect = document.getElementById("sort");
  const categorySelect = document.getElementById("category");
  
  function displayProducts(list) {
    productContainer.innerHTML = "";
    list.forEach(p => {
      productContainer.innerHTML += `
        <div class="product">
         <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p class="price">₹${p.price}</p>
          <span class="rating">⭐ ${p.rating}</span>
          <div class="category">${p.category}</div>
          <button class="btn">Add to Cart</button>
        </div>
      `;
    });
  }
  
  function applyFilters() {
    let filtered = [...products];
  
    const category = categorySelect.value;
    if (category !== "all") {
      filtered = filtered.filter(p => p.category === category);
    }
  
    const sort = sortSelect.value;
    if (sort === "price-asc") filtered.sort((a,b)=>a.price-b.price);
    if (sort === "price-desc") filtered.sort((a,b)=>b.price-a.price);
    if (sort === "name-asc") filtered.sort((a,b)=>a.name.localeCompare(b.name));
    if (sort === "name-desc") filtered.sort((a,b)=>b.name.localeCompare(a.name));
    if (sort === "rating-asc") filtered.sort((a,b)=>a.rating-b.rating);
    if (sort === "rating-desc") filtered.sort((a,b)=>b.rating-a.rating);
  
    displayProducts(filtered);
  }
  
  sortSelect.addEventListener("change", applyFilters);
  categorySelect.addEventListener("change", applyFilters);
  
  displayProducts(products);