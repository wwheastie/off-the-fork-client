const ReviewOrder = () => {
    const order = [
        {
            name: "Grilled Chicken",
            description: "with vegetables",
            image: "https://cdn-icons-png.flaticon.com/512/1377/1377194.png",
            quantity: 1,
        },
        {
            name: "Pasta Primavera",
            description: "with parmesan",
            image: "https://cdn-icons-png.flaticon.com/512/1377/1377194.png",
            quantity: 2,
        },
    ];

    return (
        <div className="max-w-md mx-auto p-6 bg-base-100 shadow-md rounded-xl">
            <h1 className="text-2xl font-bold mb-4">Your Order</h1>

            {order.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-md object-cover"
                        />
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-base-content/70">{item.description}</p>
                        </div>
                    </div>
                    <p className="text-lg">{item.quantity} ×</p>
                </div>
            ))}

            <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
            <p className="text-base">John Doe</p>
            <p className="text-base">john@example.com</p>
            <p className="text-base">+1 (555) 123-4567</p>

            <button className="btn btn-primary w-full mt-6">Submit Final Order</button>
        </div>
    );
};

export default ReviewOrder;
