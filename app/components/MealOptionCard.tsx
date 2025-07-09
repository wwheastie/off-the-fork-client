import React, {useState} from "react";
import CircularTag from "~/components/CircularTag";
import type {Meal} from "~/types/Meal";
import type {OrderItem} from "~/types/OrderItem";

type MealOptionCardProps = {
    meal: Meal;
    quantity: number;
    onChange: (mealId: string, orderItem: OrderItem) => void;
};

const MealOptionCard: React.FC<MealOptionCardProps> = ({ meal, quantity, onChange }) => {
    const { id, image, title, description, tags, price, notes } = meal;
    const [isEditingNote, setIsEditingNote] = useState(false);
    const [noteInput, setNoteInput] = useState(notes);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const qty = parseInt(e.target.value, 10);
        onChange(id, { mealId: id, quantity: qty, notes: noteInput.trim() });
    };

    const handleNoteSave = () => {
        const trimmed = noteInput.trim();
        onChange(id, { mealId: id, quantity, notes: trimmed });
        setIsEditingNote(false);
    };

    const totalPrice = price * quantity;

    return (
        <div className="card bg-base-100 shadow-md">
            <div className="flex items-start p-4 gap-4">
                {/* Image on the left */}
                <img
                    src={image}
                    alt={title}
                    className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Content on the middle */}
                <div className="flex-1">
                    <h2 className="text-lg font-bold mb-1">{title}</h2>
                    <p className="text-sm text-base-content/70">{description}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {tags.map((tag) => (
                            <CircularTag name={tag} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-end w-24">
                    <select
                        className="select select-bordered w-20"
                        value={quantity}
                        onChange={handleQuantityChange}
                    >
                        {Array.from({ length: 21 }, (_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>

                    <div className="text-sm text-base-content mt-1 min-h-[1.5rem]">
                      <span className="flex flex-col md:flex-row md:items-baseline md:whitespace-nowrap gap-x-1">
                        <span className="font-bold">${totalPrice.toFixed(2)}</span>{" "}
                        <span className="italic">(${price.toFixed(2)} ea.)</span>
                      </span>
                    </div>


                    {/* Special Notes button */}
                    <div className="inline-block mt-2">
                        <button
                            className="btn btn-sm btn-outline whitespace-nowrap relative"
                            onClick={() => setIsEditingNote(!isEditingNote)}
                            type="button"
                        >
                            Special Notes

                            {noteInput.trim() !== "" && (
                                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 clip-triangle" />
                            )}
                        </button>
                    </div>

                    {/* Notes input (conditionally shown) */}
                    {isEditingNote && (
                        <div className="mt-2 w-40">
                <textarea
                    className="textarea textarea-bordered w-full text-sm"
                    rows={2}
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                />
                            <button
                                className="btn btn-xs btn-primary mt-1"
                                onClick={handleNoteSave}
                                type="button"
                            >
                                Save Note
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MealOptionCard;
