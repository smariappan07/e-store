import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const layout = props => (
    <React.Fragment>

        <header>
            <Header />
        </header>

        <main>
            {props.children}
        </main>

        <footer>
            <Footer />
        </footer>

    </React.Fragment>
);

export default layout;