import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router";
import type {ReviewOrderItem} from "~/types/ReviewOrderItem";
import { config } from "~/config/env";

interface ReviewOrderItemInterface {
    reviewOrderItems: ReviewOrderItem[];
}

const ReviewOrder: React.FC<ReviewOrderItemInterface> = () => {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const location = useLocation();
    const { reviewOrderItems = [] } = location.state || {};

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactInfo((prev) => ({ ...prev, [name]: value }));
    };

    const total: number = reviewOrderItems.reduce((sum: number, item: { totalPrice: number; }) => sum + item.totalPrice, 0);

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
        toast.innerHTML = `<span>🎉 Order submitted successfully!</span>`;

        const toastContainer = document.querySelector(".toast");
        toastContainer?.appendChild(toast);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, config.ui.toastDuration);
    };

    const order = [
        {
            name: "Grilled Chicken",
            description: "with vegetables",
            image: config.ui.defaultMealImage,
            quantity: 1,
        },
        {
            name: "Pasta Primavera",
            description: "with parmesan",
            image: config.ui.defaultMealImage,
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

                {reviewOrderItems.map((item: ReviewOrderItem, idx: string) => (
                    <div key={idx} className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-16 h-16 rounded-md object-cover"
                            />
                            <div>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm text-base-content/70">{item.description}</p>
                                {item.notes?.trim() && (
                                    <p className="text-sm text-base-content/70 italic">
                                        Notes: {item.notes.trim()}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="ml-auto text-right">
                            <p className="text-lg whitespace-nowrap">{item.quantity}×</p>
                            <p className="text-sm italic whitespace-nowrap">${item.totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                ))}

                <div className="text-lg whitespace-nowrap font-bold italic ml-auto text-right">Total: ${total.toFixed(2)}</div>

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
