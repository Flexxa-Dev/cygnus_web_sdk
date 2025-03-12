# Cygnus Payment SDK

A flexible and secure payment integration SDK for web applications, supporting both traditional and crypto payments.

## Features

- 🔒 Secure payment processing
- 🎨 Customizable UI themes
- 💳 Multiple payment method support
- 🔄 Real-time payment status updates
- 🌐 Cross-browser compatibility
- 🔌 Easy integration with React and vanilla JavaScript

## Installation

Install the package using npm:

```bash
npm install cygnus-payment-sdk
```

## Usage

### React Example

```jsx
import { CygnusPayment } from 'cygnus-payment-sdk';

<CygnusPayment />
```

### HTML and JavaScript Example

```html
<script src="https://cdn.jsdelivr.net/npm/cygnus-payment-sdk@latest/dist/cygnus-payment-sdk.min.js"></script>

<script>
  const cygnusPayment = new CygnusPayment();
  cygnusPayment.init();
</script>
```

## Configuration

### React Example

```jsx
<CygnusPayment
  apiKey="your_api_key_here"
  companyName="Your Company Name"
  theme={{
    primaryColor: "#0070f4",
    backgroundColor: "#f9f9f9",
  }}
/>
```

### HTML and JavaScript Example

```html
<script>
  const cygnusPayment = new CygnusPayment();
  cygnusPayment.init();
</script>
```

## Customization

### React Example

```jsx
<CygnusPayment
  apiKey="your_api_key_here"
  companyName="Your Company Name"
  theme={{
    primaryColor: "#0070f4",
    backgroundColor: "#f9f9f9",
  }}
/>
```

### HTML and JavaScript Example

```html
<script>
  const cygnusPayment = new CygnusPayment();
  cygnusPayment.init();
</script>
```

## Events

### React Example

```jsx
<CygnusPayment
  onPaymentSuccess={handlePaymentSuccess}
  onPaymentFailure={handlePaymentFailure}
/>
```

### HTML and JavaScript Example

```html
<script>
  const cygnusPayment = new CygnusPayment();
  cygnusPayment.init();
</script>
```

## API Reference

### React Example

```jsx
const cygnusPayment = new CygnusPayment();
cygnusPayment.init();
```

### HTML and JavaScript Example

```html
<script>
  const cygnusPayment = new CygnusPayment();
  cygnusPayment.init();
</script>
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
