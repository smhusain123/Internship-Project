# AI-Powered Hotel Discovery Platform

An AI-powered hotel discovery web application developed during my Software Developer Internship at DeBox Global.

The application allows users to search for hotels by city, receive AI-powered hotel recommendations, view hotel details, browse additional results, and export hotel data to an Excel file.

## Features

- Search for hotels by city
- AI-powered hotel recommendations using the Groq API
- Display hotel information including:
  - Hotel name
  - City
  - Price per night
  - Rating
  - Amenities
  - Available rooms
  - Address
  - Contact details
- Browse additional hotel recommendations
- Export hotel data to an Excel file
- Simple and user-friendly interface

## Tech Stack

- HTML
- CSS
- JavaScript
- Groq API
- SheetJS (XLSX)
- Git & GitHub

## How It Works

1. The user enters a city name.
2. The application sends a request for AI-powered hotel recommendations.
3. Hotel recommendations are generated and displayed dynamically.
4. The user can browse additional hotel results.
5. The displayed hotel data can be exported to an Excel file.

## Run Locally

1. Clone the repository:

```bash
git clone https://github.com/smhusain123/Internship-Project.git
```

2. Open the project folder:

```bash
cd Internship-Project
```

3. Install the required dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

5. Start the application:

```bash
npm start
```

6. Open the application in your browser:

```text
http://localhost:5000
```

## Security Note

For secure public deployment, a lightweight server-side layer was added later to keep the Groq API key out of the frontend code and prevent it from being exposed publicly.

## Internship

This project was developed during my Software Developer Internship at DeBox Global from June 2025 to August 2025.

## Author

**Syed Madiha Husain**

## 📸 Project Screenshots

### Search Page
<img width="449" height="221" alt="image" src="https://github.com/user-attachments/assets/8145b4cf-0fe1-48ab-b9d1-bfc42f03c20b" />

### Hotel Search Results
<img width="499" height="670" alt="image" src="https://github.com/user-attachments/assets/2526f49e-2c7d-4a75-9fed-a180e46e1fd6" />

### Excel Export
<img width="773" height="312" alt="image" src="https://github.com/user-attachments/assets/5c9af183-1c7d-4efc-a866-e4f52f30dafd" />



