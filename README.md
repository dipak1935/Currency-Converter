🪙 Currency Converter Web App

📌 Description
A real-time currency converter web application that fetches the latest exchange rates using a public API and provides accurate conversion between any two selected currencies. The app enhances the user experience with country flags, dynamic dropdowns, and auto-filled fields.





🚀 Features
🌐 Real-time exchange rate fetching from Fawaz Ahmed's Currency API

🔄 Currency selection with country flags for "From" and "To"

🔢 Converts amount instantly with a default fallback to 1 if empty or invalid

🧩 Dynamically populates the dropdowns with over 100 currency options

💡 Clean UI using HTML & CSS, with icon support via FontAwesome

🛠️ Technologies Used
HTML5 – for structured content

CSS3 – for styling the layout

JavaScript (Vanilla) – for DOM manipulation and API integration

Currency API – CDN: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api

Flags API – Dynamic flag rendering using country codes

Font Awesome – Icons for better UX

⚙️ How It Works
User selects the "From" and "To" currencies via dropdown menus.

Currency symbols and flags update automatically based on selection.

User enters the amount (defaults to 1 if left empty or invalid).

On clicking "Get Exchange Rate", the app fetches the current rate and displays the converted value.

Rates are retrieved using:

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{from}.json


🖼️ UI Preview 
<img width="895" height="806" alt="Screenshot from 2025-07-30 11-02-17" src="https://github.com/user-attachments/assets/2e0a3a3e-697f-4768-8354-b70a46e7398d" />



📁 CurrencyConverter/
├── index.html
├── style.css
├── app.js
├── codes.js

✅ To Run Locally
No backend or server is needed.

Clone the repo:

git clone https://github.com/yourusername/currency-converter.git

Open index.html in your browser.



📌 Future Improvements
Add dark mode

Auto-swap functionality for "From" and "To"

Graphical representation of exchange trends
