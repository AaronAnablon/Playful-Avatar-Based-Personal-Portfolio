import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const Facebook = () => {
    return (
        <FacebookProvider appId="236538592441021" chatSupport>
            <CustomChat pageId="103462801849471" minimized={true} />
        </FacebookProvider>
    );
}

export default Facebook;