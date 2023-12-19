const TextTruncate = ({ text, maxWords }) => {
    const words = text.split(" ");

    if (words.length <= maxWords) {
        return <p>{text}</p>;
    } else {
        const truncatedText = words.slice(0, maxWords).join(" ");
        return <p>{truncatedText}...</p>;
    }
};

export default TextTruncate;
