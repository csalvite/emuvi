import { useContext, useState } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

const DeleteProductPhoto = ({ productId, productPhotos }) => {
    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState();
    const [photos, setPhotos] = useState(productPhotos);

    console.log(productPhotos);

    const handleDeleteProductPhoto = async (e) => {
        e.preventDefault();

        const idPhoto = e.target.name;
        
        try {
            const url = `${REACT_APP_LOCALHOST}/products/${productId}/photos/${idPhoto}`;
            
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                setState('Foto de producto eliminada!');
            } else {
                console.error('Hubo un error al eliminar la foto');
            }

            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    console.log('Holi deleteproductofoto');

    return (
        <>
        {photos?.map((photo) => {
            return (
                <img
                    key={photo.id}
                    src={`${REACT_APP_LOCALHOST}/avatar/${photo.name}`}
                    alt={photo.id}
                    name={photo.id}
                    onClick={handleDeleteProductPhoto}
                    style={{width: '5rem'}}
                />
                )
            })}
        </>
    )
}

export { DeleteProductPhoto };