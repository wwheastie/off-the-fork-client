"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function NoteComponent({ setShowNote }) {
  return (
    <div className="h-30 px-1 my-1 border border-gray-200 rounded-lg bg-white transition-all duration-200 hover:shadow-sm">
      <div className="my-2">
        <Textarea placeholder="Type your message here." />
      </div>
      <div className="flex flex-row gap-3">
        <Button className="bg-green-600">Save</Button>
        <Button
          onClick={() => {
            setShowNote(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default NoteComponent;
