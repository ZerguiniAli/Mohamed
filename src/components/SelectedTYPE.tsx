'use client'
import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Option {
  value: string;
  name: string;
}

interface OptionGroup {
  type: string;
  options: Option[];
}

export function SelectDemoType({ placeholder = "Type" }) {
  const [options, setOptions] = useState<OptionGroup[]>([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('type.json')
      .then(response => response.json())
      .then((data: OptionGroup[]) => setOptions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(optionGroup => (
          <SelectGroup key={optionGroup.type}>
            <SelectLabel>{optionGroup.type}</SelectLabel>
            {optionGroup.options.map((option: Option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.name}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
