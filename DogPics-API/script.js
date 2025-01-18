const random_dog = "https://dog.ceo/api/breeds/image/random"
const list_dogs = "https://dog.ceo/api/breeds/list/all"



async function fetchDogImage() {
    try {
      const response = await fetch(random_dog);
      const data = await response.json();
  
      if (data.status === "success") {
        const imgElement = document.getElementById('dog-image');
        imgElement.src = data.message;
        imgElement.style.display = "block"; // Make the image visible
      } else {
        alert("Failed to fetch the dog image.");
      }
    } catch (error) {
      console.error("Error fetching the image:", error);
      alert("An error occurred. Please try again.");
    }
  }
  