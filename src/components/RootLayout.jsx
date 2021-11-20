import React from 'react';

const RootLayout = ({ children }) => {
    return (
        <div className="bg-color">
            <main className="container">
                <section className="row d-flex justify-content-center align-items-center">
                    {children}
                </section>
            </main>
        </div>
    )
}

export default RootLayout;
