/*
Yes, you can use a bitwise operation to simplify the conversion from an unsigned 8-bit integer to a signed 8-bit integer. The bitwise shift operator can be used to extend the sign bit when converting from an 8-bit value to a 32-bit value. This can be done using a left shift followed by a right shift.

Simplified Decoding with Bitwise Operations
Here’s a more concise way to convert the decoded depth to a signed 8-bit integer using bitwise operations:

Left shift by 24 bits (to move the sign bit to the most significant bit position of a 32-bit integer).
Right shift back by 24 bits (to extend the sign bit).
This effectively performs sign extension.

javascript
*/

export const bin = (dec: number): string => dec.toString(2).padStart(32, '0');

// Define the values
const width = 5; // 8 bits
const depth = 10; // 8 bits
const height = 12; // 4 bits

// Ensure values fit in the required bit length
const widthBits15 = width & 15; // Mask to 8 bits
const depthBits = depth & 15; // Mask to 8 bits
const heightBits = height & 0x0f; // Mask to 4 bits

// Combine values into a single 32-bit integer
const combined = (heightBits << 16) | (depthBits << 8) | widthBits15;

// To decode, reverse the bit shifts and masks
const decodedHeight = (combined >> 16) & 0x0f;
console.log(decodedHeight);
const decodedDepth = (combined >> 8) & 15;
const decodedWidth = combined & 15;
console.log(decodedWidth);

// Convert decodedDepth back to signed 8-bit integer using bitwise operations
const signedDecodedDepth = (decodedDepth << 24) >> 24;
console.log(signedDecodedDepth);

const i = 127;
console.log(bin(i & 255));
console.log(bin(i & 127));
console.log(bin(i & 63));
console.log(bin(i & 31));
console.log(bin(i & 15));
console.log(bin(i));

const b = -128;
console.log(b);
console.log(bin(b & 255));
console.log(bin(b & 127));
console.log(bin(b & 63));
console.log(bin(b & 31));
console.log(bin(b & 15));
console.log(bin(b));

/*
Explanation
Encoding: The same process as before, masking and shifting the values into their respective positions within a 32-bit integer.
Decoding:
decodedHeight: Extracted and masked to 4 bits.
decodedDepth: Extracted and masked to 8 bits.
decodedWidth: Extracted and masked to 8 bits.
signedDecodedDepth: The bitwise operation (decodedDepth << 24) >> 24 converts the 8-bit unsigned integer to a signed integer by extending the sign bit.
Running the Updated Code
plaintext
Copy code
Combined: 00000000000011001111011000000101 (binary), 849413 (decimal)
Decoded values - Width: 5, Depth: -10, Height: 12
This approach avoids the need for an explicit check and provides a more concise and efficient way to handle the signed conversion using bitwise operations.
*/
