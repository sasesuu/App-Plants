const selectPlant = () => {
    const plantIdFromSelect = document.getElementById("plants-select").value;
    console.log({ plantIdFromSelect });
    waterPlant(plantIdFromSelect);
  };
  
  const plants = {
    "plant-1": {
      description: "Water this plant very often but add some fly",
      name: "Rosiczka",
      img:
        "https://previews.123rf.com/images/ylivdesign/ylivdesign1707/ylivdesign170732396/83066415-euphorbia-plant-icon-cartoon-illustration-of-euphorbia-plant-vector-icon-for-web.jpg"
    },
    "plant-2": {
      description: "Don't water this plant more than 3 times a week",
      name: "Skrzydlokwiat",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaGmS45r1hxT8Um6rWSic9j6dfkwX2GSTtjw&usqp=CAU"
    },
    "plant-3": {
      description: "WATEEEER!!",
      name: "Skrzeloziele",
      img:
        "https://previews.123rf.com/images/oligliya/oligliya1606/oligliya160600030/58293537-potted-plant-isolated-vector-flat-plant-pot-illustration-concept-of-flat-flower-pot-colorful-plant-i.jpg"
    },
    "plant-4": {
      description: "Meeh, your decision",
      name: "Areka",
      img:
        "https://st2.depositphotos.com/1701651/6005/v/950/depositphotos_60055791-stock-illustration-plant-in-pot.jpg"
    },
    "plant-5": {
      description: "Only rain please",
      name: "Amelanchier",
      img:
        "https://st3.depositphotos.com/1432405/12579/v/950/depositphotos_125794216-stock-illustration-plant-in-ceramic-pot-icon.jpg"
    },
    "plant-6": {
      description: "I will die anyway",
      img:
        "https://previews.123rf.com/images/azazelka/azazelka1611/azazelka161100079/67092640-cartoon-plant-in-pot-flat-vector-illustration-green-leaves-on-white-background-decorative-home-plant.jpg",
      name: "Kalatea"
    }
  };
  
  const waterPlant = plantId => {
    const plantName = document.getElementById("plant-name");
    const plantImage = document.getElementById("plant-image");
    const plantDescription = document.getElementById("plant-description");
    const plantWrapper = document.getElementById("plant-wrapper");
  
    plantWrapper.style.visibility = "visible";
    plantName.innerHTML = plants[plantId].name;
    plantDescription.innerHTML = plants[plantId].description;
    plantImage.alt = plants[plantId].name;
    plantImage.src = plants[plantId].img;
  
    // switch (plantId) {
    //   case "plant-1":
    //     alert(plants[plantId]);
    //     break;
    //   case "plant-2":
    //     alert(plants[plantId]);
    //     break;
    //   case "plant-3":
    //     alert(plants[plantId]);
    //     break;
    //   case "plant-4":
    //     alert(plants[plantId]);
    //     break;
    //   case "plant-5":
    //     alert(plants[plantId]);
    //     break;
    //   case "plant-6":
    //     alert(plants[plantId]);
    //     break;
    //   default:
    //     alert("I don't know this plant");
    // }
  };
  