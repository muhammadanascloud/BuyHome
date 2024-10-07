'use client'; // Ensure this component is treated as a Client Component

// Import necessary hooks from React
import { useEffect } from 'react';  // <-- Import the useEffect hook

// Define the type for DiffConfig
type DiffConfig = {
  // Define relevant properties for your DiffConfig here if needed
  // For example, fields like 'field1'?: string; 'field2'?: boolean;
};

// Example type definition for OmitWithTag if you haven't defined it elsewhere
type OmitWithTag<T> = {
  default: () => void;
  config: Partial<T>; // Assume config can have partial properties from DiffConfig
  generateStaticParams: () => void;
};

// This is your checkFields configuration using OmitWithTag
const checkFields: OmitWithTag<DiffConfig> = {
  default: () => {
    console.log("Default field check");
  },
  config: {}, // Empty config for now, you can add necessary configurations
  generateStaticParams: () => {
    console.log("Static Params generated");
  },
};

// Function to execute field check
const executeFieldCheck = () => {
  // Call the default field check
  checkFields.default();

  // Optionally use generateStaticParams if required
  checkFields.generateStaticParams();

  // Log config if necessary
  console.log('Config:', checkFields.config);
};

// Example function demonstrating how this might fit into a page/component logic
export default function MyPage() {
  // Simulating page or component logic that might involve checkFields
  useEffect(() => {
    // Automatically run field check when the component mounts
    executeFieldCheck();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <h1>Check Fields Page</h1>
      <p>This page checks and logs default field values.</p>
      <button onClick={checkFields.default}>Run Default Field Check</button>
      <button onClick={checkFields.generateStaticParams}>Generate Static Params</button>
    </div>
  );
}
