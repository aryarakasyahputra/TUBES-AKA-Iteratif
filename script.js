// Iterative function to convert binary to decimal
function binaryToDecimalIterative(binary) {
    let decimal = 0;
    let power = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += parseInt(binary[i]) * Math.pow(2, power);
        power++;
    }
    return decimal;
}

// Iterative function to convert decimal to binary
function decimalToBinaryIterative(decimal) {
    if (decimal === 0) return '0';
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

function convertBinaryToDecimal() {
    const binary = document.getElementById('binaryInput').value;
    if (!/^[01]+$/.test(binary)) {
        document.getElementById('binaryToDecimalResult').textContent = 'Invalid binary number';
        return;
    }
    const decimal = binaryToDecimalIterative(binary);
    document.getElementById('binaryToDecimalResult').textContent = `Decimal: ${decimal}`;
}

function convertDecimalToBinary() {
    const decimal = parseInt(document.getElementById('decimalInput').value, 10);
    if (isNaN(decimal) || decimal < 0) {
        document.getElementById('decimalToBinaryResult').textContent = 'Invalid decimal number';
        return;
    }
    const binary = decimalToBinaryIterative(decimal);
    document.getElementById('decimalToBinaryResult').textContent = `Binary: ${binary}`;
}
