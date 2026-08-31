import { useState } from "react";

export default function Admin({ products, onAddProduct, onDeleteProduct, onUpdateProduct }) {

    const [name, setName] = useState("");

    const [price, setPrice] = useState("");

    const [category, setCategory] = useState("");

    const [description, setDescription] = useState("");

    const [img, setImg] = useState("");

    const [editingId, setEditingId] = useState(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name || !price) {

            alert("Ju lutem plotesoni emrin dhe cmimin!");

            return;

        }

        if (editingId) {

            const updatedProduct = {

                id: editingId,

                name: name,

                price: Number(price),

                category: category,

                description: description,

                img: img || "https://via.placeholder.com/150"

            };


            onUpdateProduct(updatedProduct);

            setEditingId(null);

        } else {

            const newProduct = {

                name: name,

                price: Number(price),

                category: category,

                description: description,

                img: img || "https://via.placeholder.com/150"

            };

            onAddProduct(newProduct);

        }

        setName("");

        setPrice("");

        setCategory("");

        setDescription("");

        setImg("");

    };

    const handleEditClick = (product) => {

        setEditingId(product.id);

        setName(product.name);

        setPrice(product.price);

        setCategory(product.category || "");

        setDescription(product.description || "");

        setImg(product.img || "");

    };

    const handleCancelEdit = () => {

        setEditingId(null);

        setName("");

        setPrice("");

        setCategory("");

        setDescription("");

        setImg("");
    };

    return (

        <div className="admin-container">

            <h2>Paneli i Adminit</h2>

            <div className="add-product-form">

                <h3>{editingId ? "Ndrysho Produktin" : "Shto Produkt të Ri"}</h3>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Emri i produktit"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Çmimi ($)"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Kategoria"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Linku i fotos (URL)"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />

                    <textarea
                        placeholder="Përshkrimi i produktit"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className="form-buttons">

                        <button type="submit" className="save-btn">
                            {editingId ? "Ruaj Ndryshimet" : "Shto Produktin"}
                        </button>

                        {editingId && (
                            <button type="button" className="cancel-btn" onClick={handleCancelEdit}>
                                Anulo Redaktimin
                            </button>

                        )}
                    </div>

                </form>

            </div>

            <div className="admin-products-list">

                <h3>Menaxho Produktet Ekzistuese</h3>

                <table>

                    <thead>

                        <tr>
                            <th>Foto</th>
                            <th>Emri</th>
                            <th>Çmimi</th>
                            <th>Kategoria</th>
                            <th>Veprimet</th>
                        </tr>

                    </thead>

                    <tbody>

                        {products.map((item) => (

                            <tr key={item.id}>

                                <td>

                                    <img src={item.img} alt={item.name} className="admin-thumb" />

                                </td>

                                <td>{item.name}</td>

                                <td>${item.price}</td>

                                <td>{item.category}</td>

                                <td>

                                    <button className="edit-btn" onClick={() => handleEditClick(item)}>

                                        Edito

                                    </button>

                                    <button className="delete-btn" onClick={() => onDeleteProduct(item.id)}>

                                        Fshij

                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};