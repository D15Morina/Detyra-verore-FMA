import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

export default function App() {

  const PRODUCTS = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecF1Ecdj1ySGb35m0aGu-NH4yD0IGBNRHy8xlbvnStw&s=10",
      description: "Unique Bowling Ball",
      name: "Bowling Ball",
      category: "Sport",
      price: 50
    },

    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiB8xHYViS5zfnyPal-DwjBcSZomxGVipjkXtvv64GQ&s=10",
      description: "Elegant Glasses",
      name: "Prada Glasses",
      category: "Accessories",
      price: 250
    },

    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-c_93d_7zKym0FZsNk9nJ_027szpQeQW2m2_42A1Yw&s=10",
      description: "performance e jashtezakonshme",
      name: "Lenovo Laptop",
      category: "Tech",
      price: 350
    },

    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWST2-0ZulumMuJh04nz5IaDjkODRiIdxVOLTFc82qA&s=10",
      description: "Makine Loder, shume terheqese",
      name: "Lamborghini Toy car",
      category: "Toy",
      price: 5
    },

    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qPyNiJJIpQP1mc52h3d7tAPBViVyjfhu75jyYQ2EYw&s=10",
      description: "Stil unik dhe elegant",
      name: "Maicë Diesel",
      category: "Clothing",
      price: 80
    }

  ];

  const [products, setProducts] = useState(PRODUCTS);

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {

    setCart((prevCart) => {

      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {

        return prevCart.map((item) => {

          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;

        });

      } else {

        return [...prevCart, { ...product, quantity: 1 }];

      }

    });

  };


  const removeFromCart = (id) => {

    setCart((prev) => prev.filter((item) => item.id !== id));

  };

  const addProduct = (newProduct) => {

    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);

  };

  const updateProducts = (updatedProduct) => {

    setProducts((prev) =>

      prev.map((item) => (item.id === updatedProduct.id ? updatedProduct : item))

    );

  };

  const deleteProduct = (id) => {

    setProducts((prev) => prev.filter((item) => item.id !== id));

    setCart((prev) => prev.filter((item) => item.id !== id));

  };


  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header cartCount={totalCartItems} />

      <main>

        <Routes>

          <Route path="/" element={<Home products={products} onAddToCart={addToCart} />} />

          <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={removeFromCart} />} />

          <Route
            path="/admin"
            element={
              <Admin
                products={products}
                onAddProduct={addProduct}
                onDeleteProduct={deleteProduct}
                onUpdateProduct={updateProducts}

              />

            }
          />

        </Routes>

      </main>

      <Footer />

    </>

  );

};