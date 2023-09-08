const nigeriaCities = {
  FCT_Abuja: [
    "Abuja",
    "TANGAYIKA",
    "Im SUCCESSFUL"
  ],
  Abia: [
    "Umuahia",
    "Aba",
    "Arochukwu",
    "Ohafia",
    "Bende",
  ],
  Adamawa: [
    "Yola",
    "Mubi",
    "Jimeta",
    "Ganye",
    "Numan",
  ],
  AkwaIbom: [
    "Uyo",
    "Eket",
    "Ikot Ekpene",
    "Oron",
    "Abak",
  ],
  Anambra: [
    "Awka",
    "Onitsha",
    "Nnewi",
    "Aguata",
    "Ekwusigo",
  ],
  Bauchi: [
    "Bauchi",
    "Azare",
    "Misau",
    "Jama'are",
    "Katagum",
  ],
  Bayelsa: [
    "Yenagoa",
    "Sagbama",
    "Brass",
    "Ogbia",
    "Nembe",
  ],
  Benue: [
    "Makurdi",
    "Gboko",
    "Otukpo",
    "Katsina-Ala",
    "Vandeikya",
  ],
  Borno: [
    "Maiduguri",
    "Biu",
    "Monguno",
    "Damboa",
    "Gwoza",
  ],
  CrossRiver: [
    "Calabar",
    "Ugep",
    "Ikom",
    "Ogoja",
    "Obubra",
  ],
  Delta: [
    "Asaba",
    "Warri",
    "Sapele",
    "Ughelli",
    "Agbor",
  ],
  Ebonyi: [
    "Abakaliki",
    "Afikpo",
    "Onueke",
    "Ishieke",
    "Ohaukwu",
  ],
  Edo: [
    "Benin City",
    "Auchi",
    "Ekpoma",
    "Igueben",
    "Uromi",
  ],
  Ekiti: [
    "Ado-Ekiti",
    "Ikere-Ekiti",
    "Efon-Alaaye",
    "Ode-Ekiti",
    "Ikole-Ekiti",
  ],
  Enugu: [
    "Enugu",
    "Nsukka",
    "Agbani",
    "Nkwo Nike",
    "Awgu",
  ],
  Gombe: [
    "Gombe",
    "Kumo",
    "Dukku",
    "Nafada",
    "Deba",
  ],
  Imo: [
    "Owerri",
    "Orlu",
    "Okigwe",
    "Mbaise",
    "Nkwerre",
  ],
  Jigawa: [
    "Dutse",
    "Hadejia",
    "Kazaure",
    "Birnin Kudu",
    "Gumel",
  ],
  Kaduna: [
    "Kaduna",
    "Zaria",
    "Kafanchan",
    "Soba",
    "Jema'a",
  ],
  Kano: [
    "Kano",
    "Kano Municipal",
    "Fagge",
    "Gwale",
    "Dala",
  ],
  Katsina: [
    "Katsina",
    "Daura",
    "Kankia",
    "Malumfashi",
    "Funtua",
  ],
  Kebbi: [
    "Birnin Kebbi",
    "Sokoto",
    "Argungu",
    "Yauri",
    "Jega",
  ],
  Kogi: [
    "Lokoja",
    "Idah",
    "Okene",
    "Kabba",
    "Ankpa",
  ],
  Kwara: [
    "Ilorin",
    "Offa",
    "Omu-Aran",
    "Kaiama",
    "Jebba",
  ],
  Lagos: [
    "Ikeja",
    "Lagos Island",
    "Victoria Island",
    "Apapa",
    "Surulere",
    "Lekki",
    "Ajah",
    "Ikorodu",
    "Badagry",
    "Banana Island",
  ],
  Nasarawa: [
    "Lafia",
    "Keffi",
    "Akwanga",
    "Nasarawa",
    "Wamba",
  ],
  Niger: [
    "Minna",
    "Bida",
    "Suleja",
    "Kontagora",
    "New Bussa",
  ],
  Ogun: [
    "Abeokuta",
    "Sagamu",
    "Ijebu-Ode",
    "Ilaro",
    "Ota",
  ],
  Ondo: [
    "Akure",
    "Ondo",
    "Owo",
    "Ikare",
    "Okitipupa",
  ],
  Osun: [
    "Osogbo",
    "Ile-Ife",
    "Ilesa",
    "Ede",
    "Ila-Orangun",
  ],
  Oyo: [
    "Ibadan",
    "Ogbomoso",
    "Iseyin",
    "Saki",
    "Eruwa",
  ],
  Plateau: [
    "Jos",
    "Bukuru",
    "Pankshin",
    "Langtang",
    "Shendam",
  ],
  Rivers: [
    "Port Harcourt",
    "Obio-Akpor",
    "Eleme",
    "Gokana",
    "Oyigbo",
  ],
  Sokoto: [
    "Sokoto",
    "Wurno",
    "Gwadabawa",
    "Yabo",
    "Isa",
  ],
  Taraba: [
    "Jalingo",
    "Wukari",
    "Bali",
    "Kumo",
    "Karim Lamido",
  ],
  Yobe: [
    "Damaturu",
    "Potiskum",
    "Gashua",
    "Nguru",
    "Geidam",
  ],
  Zamfara: [
    "Gusau",
    "Kaura Namoda",
    "Tsafe",
    "Anka",
    "Talata Mafara",
  ],
};


const selectedState = document.getElementById('states');
const cities = document.getElementById('cities');
//adding an eventlistener
selectedState.addEventListener('change', ()=>{
  //this part iterate over variable named nigeriaCities
  for(const key in nigeriaCities){
    //check if selected value equals to one of the nigeriaCities varable
    //create an option tag
    //append the values under selected state to...
    if(selectedState.value == key){
     for(let i=0; i<nigeriaCities[key].length; i++){
      cities.innerHTML = "";
      for(let a = 0; a<nigeriaCities[key].length; a++){
        const optionTag = document.createElement('option');
        optionTag.textContent = nigeriaCities[key][a];
        cities.appendChild(optionTag);
      }
     }
    }
  }

})