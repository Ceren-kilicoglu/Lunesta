import React from 'react';
import Footer from './footer';
import Header from './header';

function PageContent({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default PageContent;
