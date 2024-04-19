/**Convert fahrenheit to Celsius using (32°F − 32) × 5/9 = 0°C
 *
 * By: Feyi Akomolafe
 * Version: 1.0
 * Since: 2024-04-15
 */

import { createPrompt } from 'bun-promptx';

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5 / 9);
}

// Get Fahrenheit input from user
const userFahrenheit = createPrompt("Enter the temperature in Fahrenheit: ");

// Parse user input to a floating-point number
const fahrenheit = parseFloat(userFahrenheit.value || "-1");

// Check if the input is valid
if (isNaN(fahrenheit)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Convert Fahrenheit to Celsius
    const celsius = fahrenheitToCelsius(fahrenheit);

    // Round the result to 3 decimal places
    const roundedCelsius = Math.round(celsius * 1000) / 1000;

    // Output
    console.log(`${fahrenheit}°F is equal to ${roundedCelsius}°C.`);
}

console.log("\nDone.");
