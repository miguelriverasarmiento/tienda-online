import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Initiation } from './Initiation';
import { ProductList } from './ProductList';
import { Layout } from './Layout';

export const Pages = () => {
  return (
    <section>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Initiation />} />
            <Route path="products" element={<ProductList />} />
          </Route> 
        </Routes>
    </section>
  )
}
