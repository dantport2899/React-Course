import React, { createContext, useState } from 'react';
import { Producto } from '../interfaces/app-Interfaces';
import { useEffect } from 'react';
import cafeApi from '../api/CafeApi';
import { ProductsResponse } from '../interfaces/app-interfaces';
import { ImagePickerResponse } from 'react-native-image-picker';

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: ( categoryId: string, productName: string ) => Promise<Producto>;
    updateProduct: ( categoryId: string, productName: string, productId: string ) => Promise<void>;
    deleteProduct: ( id: string ) => Promise<void>;
    loadProductById: ( id: string ) => Promise<Producto>;
    uploadImage: ( uri: string, name: string, type: string, id: string ) => Promise<void>; // TODO: cambiar ANY
}



export const ProductsContext = createContext({} as ProductsContextProps);



export const ProductsProvider = ({ children }: any ) => {

    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        loadProducts();
    }, [])
    

    const loadProducts = async() => {
        const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
        setProducts([...resp.data.productos]);
    }

    const addProduct = async( categoryId: string, productName: string ):Promise<Producto> => {
       const resp = await cafeApi.post<Producto>('/productos',{
           nombre:productName,
           categoria:categoryId
       });
       setProducts([...products,resp.data]);

       return resp.data
    }

    const updateProduct = async( categoryId: string, productName: string, productId: string ) =>{
        const resp = await cafeApi.put<Producto>('/productos/'+productId,{
            nombre:productName,
            categoria:categoryId
        });
        setProducts(products.map(prod=> {
            return (prod._id === productId)
                    ? resp.data
                    : prod
        }));
    }

    const deleteProduct = async( id: string ) => {
        
    }

    const loadProductById = async( id: string ):Promise<Producto> => {
        const resp = await cafeApi.get<Producto>('/productos/'+id);
        
        // throw new Error('Not implemented');
        return resp.data
    };

    // TODO: cambiar ANY
    const uploadImage = async( uri: string, name: string, type: string, id: string ) => {
        const fileToUpload = {
            uri: uri,
            type: type,
            name: name,
        }

        const formData = new FormData();
        formData.append('archivo',fileToUpload);

        try {
            const resp = await cafeApi.put('/uploads/productos/'+id, formData,  {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data',
                },
                transformRequest: () => {
                  return formData;
                },
              });

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
        }}>
            { children }
        </ProductsContext.Provider>
    )
}