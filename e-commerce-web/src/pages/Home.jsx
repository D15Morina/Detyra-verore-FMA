import React from 'react';

export default function Home({ products, onAddToCart }) {

    return (

        <main className="main-content">

            <section className="enterance">

                <div className="welcomingText">

                    <div>

                        <h1>Mirsevini ne TechStore</h1>
                        <p className="welcomingP">
                            Gjeni produktet me te mira me cmimet me te favorshme ne treg.
                        </p>

                    </div>

                </div>

            </section>


            <section className="products-section">

                <h2 className="produktet">Produktet tona</h2>

                <div className="productCard">

                    {products.map((product) => (

                        <div key={product.id} className="product">

                            <img
                                src={product.img}
                                alt={product.name}
                                className="productImg"
                            />

                            <div className="text">

                                <h3 className="name">{product.name}</h3>
                                <p className="description">{product.description}</p>
                                <p><strong>Çmimi: ${product.price}</strong></p>

                            </div>

                            <div className="addToCart">

                                <button
                                    className="addButton"
                                    onClick={() => onAddToCart(product)}
                                >

                                    Shto në shportë

                                </button>

                            </div>

                        </div>

                    ))};

                </div>

            </section>

        </main>
    );

};