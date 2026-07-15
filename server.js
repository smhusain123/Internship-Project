const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/hotels", async (req, res) => {
  try {
    const { city, page } = req.body;

    const prompt = `
Return only valid JSON in this exact format:
{
  "hotels": [
    {
      "name": "string",
      "city": "string",
      "price_per_night": 0,
      "rating": 0,
      "amenities": ["string"],
      "available_rooms": 0,
      "image_url": "string",
      "address": "string",
      "contact_number": "string",
      "contact_name": "string"
    }
  ]
}

Return exactly 10 hotels in ${city}.
Page: ${page}.

Do not add explanations or Markdown.
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          response_format: {
            type: "json_object"
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const parsedData = JSON.parse(
      data.choices[0].message.content
    );

    res.json(parsedData);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch hotels"
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});