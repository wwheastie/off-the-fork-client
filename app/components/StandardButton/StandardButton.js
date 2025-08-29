import { Button } from "@/components/ui/button";
import React from "react";

export default function StandardButton({ info }) {
  return (
    <div>
      <Button className="bg-green-600">{info.title}</Button>
    </div>
  );
}
