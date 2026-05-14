import { useState } from "react";
import "../styles/PetForm.css";

function PetForm({ onAddPet }) {
  const [formData, setFormData] = useState({
    image_url: "",
    pet_name: "",
    pet_type: "",
    breed: "",
    age: "",
    gender: "",
    vaccinated: false,
    spayed_neutered: false,
    adoption_fee: "",
    adoption_date: "",
    owner_name: "",
    owner_email: "",
    owner_address: "",
  });

  
}