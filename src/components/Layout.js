import React from 'react'
import { Header } from './Header';
import { Outlet } from "react-router-dom";
import { Footer } from './Footer';
import { Car } from './Car';

export const Layout = () => {
  return (
    <>
        <nav>
            <Header />
            <Car />
        </nav>
        <section>
            <Outlet />
        </section>
        <Footer />
    </>
  )
}
