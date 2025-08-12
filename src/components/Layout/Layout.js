import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="bg-background text-text-primary">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;