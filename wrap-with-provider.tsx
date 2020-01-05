import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';

// export default ({ element }: { element: any }) => {
const withProvider = (props: { element: any }) => {
    const { element } = props;
    const store = createStore();
    return <Provider store={store}>{element}</Provider>;
};

export default withProvider;
