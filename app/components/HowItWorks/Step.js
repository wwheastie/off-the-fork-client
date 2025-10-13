import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Step({step}) {
    return (
        <div key={step.id} className="step-card">
            <AspectRatio ratio={16 / 9} className="relative mb-4">
                <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="rounded-md object-contain"
                />
            </AspectRatio>
            <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-sm md:text-base text-gray-600">{step.description}</p>
        </div>
    )
}