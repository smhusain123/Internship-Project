console.log("entered in app");

let currentPage = 1;
let currentCity = "";
let lastFetchedHotels = [];

async function searchHotels(reset = true) {
  console.log("searching...");

  const city = document.getElementById("cityInput").value.trim();
  const resultsContainer = document.getElementById("results");

  if (reset) {
    if (!city) {
      return alert("Please enter a city name.");
    }

    currentCity = city;
    currentPage = 1;
  } else {
    currentPage++;
  }

  resultsContainer.innerHTML = "Loading...";

  try {
    console.log("trying...");

    
    const response = await fetch("/api/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        city: currentCity,
        page: currentPage
      })
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(
        data.error?.message ||
        data.error ||
        "Failed to fetch hotels"
      );
    }

    const hotels = data.hotels;

    if (!hotels || !Array.isArray(hotels)) {
      throw new Error("Invalid hotel data received");
    }

    lastFetchedHotels = hotels;

    resultsContainer.innerHTML = "";

    hotels.forEach((hotel) => {
      resultsContainer.innerHTML += `
        <div class="hotel-card">

          <h2>${hotel.name}</h2>

          <p>
            <strong>City:</strong>
            ${hotel.city}
          </p>

          <p>
            <strong>Price/Night:</strong>
            ₹${hotel.price_per_night}
          </p>

          <p>
            <strong>Rating:</strong>
            ${hotel.rating} ⭐
          </p>

          <p>
            <strong>Amenities:</strong>
            ${
              Array.isArray(hotel.amenities)
                ? hotel.amenities.join(", ")
                : hotel.amenities
            }
          </p>

          <p>
            <strong>Available Rooms:</strong>
            ${hotel.available_rooms}
          </p>

          <p>
            <strong>Address:</strong>
            ${hotel.address}
          </p>

          <p>
            <strong>Contact:</strong>
            ${hotel.contact_number}
          </p>

          <p>
            <strong>Contact Name:</strong>
            ${hotel.contact_name}
          </p>

        </div>
      `;
    });

  } catch (error) {
    console.error(error);

    resultsContainer.innerHTML =
      `Failed to fetch hotels: ${error.message}`;
  }
}


function exportToExcel() {
  if (!lastFetchedHotels.length) {
    alert("No hotels to export. Please search first.");
    return;
  }

  const worksheet =
    XLSX.utils.json_to_sheet(lastFetchedHotels);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Hotels"
  );

  XLSX.writeFile(
    workbook,
    `Hotels_${currentCity}_Page${currentPage}.xlsx`
  );
}