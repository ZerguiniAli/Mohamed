'use client'
import * as React from "react"
import { useState, useEffect } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Define the type of each item in the array
interface ITEM {
  value: string;
  name: string;
}

export function SelectDemo({ placeholder = "Select", Items = ""}) {
  const [items, setItems] = useState<ITEM[]>([]) // Provide the type annotation

  fetch(Items)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the data to verify if it's fetched correctly
    setItems(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item: ITEM) => (
            <SelectItem key={item.value} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
