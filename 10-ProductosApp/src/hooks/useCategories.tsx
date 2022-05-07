import React from 'react'
import { useState, useEffect } from 'react';
import cafeApi from '../api/CafeApi';
import { CategoriesResponse, Categoria } from '../interfaces/app-interfaces';

export const useCategories = () => {
  
    const [isLoading, setisLoading] = useState(true)
    const [categories, setcategories] = useState<Categoria[]>([]);

    useEffect(() => {
        getCategories();
    }, [])
    

    const getCategories = async () => {
        const resp = await cafeApi.get<CategoriesResponse>('/categorias');
        setcategories(resp.data.categorias);
        setisLoading(false);
    }

  return{
    categories,
    isLoading,
  }
}
