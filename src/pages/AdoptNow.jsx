import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import PetForm from "../components/PetForm";

function AdoptNow() {
  const [pets, setPets] = useState([]);

  // Fetch pets from db.json
  useEffect(() => {
    fetch("http://localhost:3000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((error) => console.log(error));
  }, []);

  
}