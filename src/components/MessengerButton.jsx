import { FacebookProvider, CustomChat } from 'react-facebook';

export default function MessengerButton() {
    return (
        <FacebookProvider appId="103462801849471" chatSupport>
            <CustomChat pageId="236538592441021" minimized={false} />
        </FacebookProvider>
    );
}