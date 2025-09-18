import { Button } from "@/components/ui/button";
import React from "react";
import YourCartComponent from "./YourCartComponent";
import YourDetailsComponent from "./YourDetailsComponent";

function CartComponent() {
  return (
    <div className="fixed h-200 md:h-180 top-4 lg:top-1/2 left-1/2 transform lg:-translate-y-1/2 -translate-x-1/2 w-[95vw] lg:w-[90vw] max-w-[1200px] max-h-[95vh] lg:max-h-[80vh] bg-white rounded-xl shadow-2xl z-[1001] overflow-hidden flex flex-col border border-black border border-black bg-white text-black">
      <div className="flex justify-end w-full p-2 mx-auto">
        <div>X</div>
      </div>
      <div className="p-2  flex flex-col flex-col-reverse md:grid grid-cols-2 w-full">
        <div className="">
          <YourDetailsComponent />
          <Button>Proceed To Payment</Button>
        </div>{" "}
        <YourCartComponent />
      </div>
    </div>
  );
}

export default CartComponent;
