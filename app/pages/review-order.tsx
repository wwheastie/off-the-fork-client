import React, {useState} from "react";
import {useNavigate} from "react-router";

const ReviewOrder = () => {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const payload = {
            contact: contactInfo,
            // include other order data here as needed
        };

        // Example POST request
        // await fetch("/api/submit-order", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(payload),
        // });

        // Optional: navigate or show success message
        // Show the toast
        const toast = document.createElement("div");
        toast.className = "alert alert-success";
        toast.innerHTML = `
            <span>🎉 Order submitted successfully!</span>
          `;

        const toastContainer = document.querySelector(".toast");
        toastContainer?.appendChild(toast);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, 3000);
    };

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
        <main className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto p-6 bg-base-100 shadow-md rounded-xl">
                <div className="toast toast-top toast-center z-50 fixed">
                    {/* We’ll insert toast messages here */}
                </div>

                <button
                    className="btn btn-ghost text-sm mb-4"
                    onClick={() => navigate("/")}
                >
                    ← Back
                </button>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="input input-bordered w-full"
                        value={contactInfo.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="input input-bordered w-full"
                        value={contactInfo.lastName}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="input input-bordered w-full mt-2"
                    value={contactInfo.phone}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full mt-2"
                    value={contactInfo.email}
                    onChange={handleChange}
                />

                <button className="btn btn-primary w-full mt-6" onClick={handleSubmit}>Submit Order</button>
            </div>
        </main>
    );
};

export default ReviewOrder;
