import TextMessage from '@/helpers/TextMessage';

const Message = ({ setScrolledText }) => {

    return (
        <div className="h-screen w-full text-9xl flex items-center justify-center">
        <TextMessage setScrolledText={setScrolledText}/>
        </div>
    );
}
export default Message;