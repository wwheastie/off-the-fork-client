import { Button } from "@/components/ui/button";
import React from "react";

export default function StandardButton({ info }) {
  return (
    <div>
      <Button>{info.title}</Button>
    </div>
  );
}
