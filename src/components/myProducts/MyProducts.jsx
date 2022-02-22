import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react"
import { TokenContext } from "../..";
import { EditProduct } from "./EditProduct";

const { REACT_APP_LOCALHOST } = process.env;

export const MyProducts = ({ privateUser }) => {

    const [token] = useContext(TokenContext);
    const [products, setProducts] = useState([]);
    const [state, setState] = useState();
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        const getMyProducts = async () => {
            try {
                const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}/products`;
                const response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token.token,
                    }
                });

                if (response.ok) {
                    const body = await response.json();
                    setProducts(body.products);
                    setState('Productos del usuario devueltos correctamente');
                } else {
                    setState('No se han encontrado productos publicados por este usuario.')
                }
            } catch(error) {
                console.error(error.message);
            }
        }

        getMyProducts();
    }, [token.token, privateUser.id])

    return (
        <div>
            <h2>Mis Productos Publicados</h2>
            {products.length > 0 ? products.map((product, index) => {
                return (
                    <div key={index}>
                        {showPopUp && <EditProduct
                                        setShowPopUp={setShowPopUp} 
                                        idUser={privateUser.id} 
                                        name={product.name} 
                                        price={product.price} 
                                        description={product.description} 
                                        category={product.category} 
                                    />}
                        <p onClick={() => setShowPopUp(true)}>{product.name} - {product.price}€</p>
                        <p>{product.description}</p>
                        {/* {product.photos.length > 0 ? product.photos.map((photo) => (
                            <img
                                key={photo.id}
                                src={`${REACT_APP_LOCALHOST}/avatar/${photo.name}`}
                                alt='product_photo'
                                style={{width: '5rem'}}
                            />
                            )) : <i>No se han encontrado fotos del producto</i>} */}
                    </div>
                )
            }) : state}
        </div>
    )
}