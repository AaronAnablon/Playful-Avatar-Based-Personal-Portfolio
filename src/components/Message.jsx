import TextMessage from '@/helpers/TextMessage';

const Message = ({ setScrolledText }) => {

    return (
        <div className="h-screen w-full flex items-center justify-center">
        <TextMessage setScrolledText={setScrolledText}/>
        </div>
    );
}
export default Message;