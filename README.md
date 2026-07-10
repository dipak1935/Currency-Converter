# 🪙 Currency Converter Web App

A clean, modern, and real-time currency converter web application that fetches the latest exchange rates using a public API. It provides accurate, instant conversions between 100+ global currencies, styled with a premium **Glassmorphism** layout.

---

## 🚀 Live Demo

🔗 [Click here to view the hosted site](https://dipak1935.github.io/Currency-Converter/)

---

## ✨ Features

- 🔮 **Glassmorphism UI**: A premium, modern interface featuring a frosted-glass container set against a soft, elegant pastel gradient backdrop.
- ⚡ **Auto-Fetch & Live Rates**: Fetches live, real-time exchange rates automatically when the page loads or when dropdown selections are changed.
- 🔄 **Currency Swap**: Clickable swap button that physically swaps selected currencies and flags with a smooth rotation animation.
- 💾 **State Persistence**: Uses browser `localStorage` to remember the user's last selected currencies across page refreshes.
- 🎯 **Robust Input Validation**: Safely handles invalid, empty, or negative amount inputs by gracefully defaulting to `1`.
- 🏳️ **Country Flag Indicators**: Displays the flags of selected countries dynamically to improve usability.

---

## 🛠️ Technologies Used

- **HTML5** - Structured document markup
- **CSS3 (Vanilla)** - Premium Glassmorphism styling, layout, transitions, and hover micro-animations
- **JavaScript (ES6+)** - Reusable async-await fetch logic, localStorage persistence, and DOM event handling
- **Currency API** - Live CDN: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api`
- **Flags API** - Dynamic country flags via `https://flagsapi.com/`
- **Font Awesome v6** - Vector icons for clean layout UI

---

## ⚙️ How It Works

1. Enter an amount in the input box.
2. Select your **From** and **To** currencies from the dropdown selections.
3. The app automatically fetches the latest rate and updates the exchange value dynamically, or you can click **Get Exchange Rate** to refresh.
4. Use the **Swap Icon** in the center to instantly swap the two currencies.
5. Your currency selections are automatically stored in the browser's local storage for your next visit.

---

## 📁 File Structure

```text
Currency-Converter/
├── index.html     # HTML structure
├── style.css      # Custom CSS & Glassmorphism styles
├── app.js         # Core application logic & API connection
├── codes.js       # Mapping of currency codes to country codes
└── README.md      # Documentation
```

---

## ⚙️ Running Locally

No server or bundlers required. To run this project locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   ```
2. Open `index.html` in your favorite web browser.
