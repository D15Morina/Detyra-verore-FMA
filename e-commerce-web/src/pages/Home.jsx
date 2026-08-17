export default function Home() {

    const products = [
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


    return (
        <>
            <main>
                <article className="enterance">
                    <section className="welcomingText">
                        <div>
                            <h1>Welcome to E-Commerce Web</h1>

                            <p className="welcomingP">Mirësevini në faqen më të madhe dhe më të besueshme në vend.</p>
                        </div>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtStYnedEs9ue8_bfeXw-9Yku31M00poILz-IRmVCUXw&s=10" className="enteranceImg"></img>
                    </section>
                </article>

                <h2 className="produktet">-Produktet-</h2>

                <article className="productsArticle">
                    <section>
                        <select>
                            <option>Select</option>
                            <option>Clothing</option>
                            <option>Tech</option>
                            <option>Accessories</option>
                            <option>Toy</option>
                            <option>Sport</option>
                        </select>

                        <div className="productCard">
                            {
                                products.map(p => {
                                    return (
                                        <div className="product">
                                            <><img src={p.img} className="productImg"></img>

                                                <h2 className="name text">{p.name}</h2>
                                                <p className="description text">{p.description}...</p>
                                                <div className="addToCart">
                                                    <h3 className="price text">Price: ${p.price}</h3>

                                                    <button className="addButton">Add to cart</button>
                                                </div>
                                            </>
                                        </div>)
                                })
                            }
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}