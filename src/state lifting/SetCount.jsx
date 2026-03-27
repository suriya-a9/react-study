const SetCount = ({ setCartCount }) => {
    return (
        <button onClick={() => setCartCount(prev => prev + 1)}>
            Add to Cart
        </button>
    );
};

export default SetCount;