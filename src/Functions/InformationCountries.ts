
const InformationCountries = [
  {
    Cod_Country: "COL", 
    Name_Country: "COLOMBIA",
    Borders_Country: ["BRA", "ECU", "PAN", "PER", "VEN"],
    Quantity_Borders_Country: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png"
  },
  {
    Cod_Country: "BRA", 
    Name_Country: "BRASIL",
    Borders_Country: ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
    Quantity_Borders_Country: 10,
    image: "https://s3.static.brasilescola.uol.com.br/be/2021/11/bandeira-do-brasil.jpg"
  },
  {
    Cod_Country: "ECU", 
    Name_Country: "EQUADOR",
    Borders_Country: ["COL", "PER"],
    Quantity_Borders_Country: 2,
    image: "http://geo5.net/imagens/bandeira-do-equador-2000px.png"
  },
  {
    Cod_Country: "PAN",
    Name_Country: "PANAMA",
    Borders_Country: ["COL"],
    Quantity_Borders_Country: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/300px-Flag_of_Panama.svg.png"
  },
  {
    Cod_Country: "PER", 
    Name_Country: "PERU",
    Borders_Country: ["BOL", "BRA", "CHL", "COL", "ECU"],
    Quantity_Borders_Country: 5,
    image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/02/bandeira-do-peru.jpg"
  },
  {
    Cod_Country: "VEM", 
    Name_Country: "VENEZUELA",
    Borders_Country: [],
    Quantity_Borders_Country: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png"
  },
  {
    Cod_Country: "ARG", 
    Name_Country: "ARGENTINA",
    Borders_Country: ["BOL", "BRA", "CHL", "PRY", "URY"],
    Quantity_Borders_Country: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
  },
  {
    Cod_Country: "BOL", 
    Name_Country: "BOLIVIA",
    Borders_Country: ["ARG", "BRA", "CHL", "PRY", "PER"],
    Quantity_Borders_Country: 5,
    image: "https://globaltranslations.com.br/wp-content/uploads/2016/11/2.-Abertura-Bolivia-1-800x400.png"
  },
  {
    Cod_Country: "GUF", 
    Name_Country: "GUIANA FRANCESA",
    Borders_Country: ["BRA", "SUR", "VEN"],
    Quantity_Borders_Country: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_French_Guiana.svg/255px-Flag_of_French_Guiana.svg.png"
  },
  {
    Cod_Country: "PRY", 
    Name_Country: "PARAGUAI",
    Borders_Country: ["ARG", "BOL", "BRA"],
    Quantity_Borders_Country: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_O9g33RUUyyYp9J0qSRq-itfnNWQEgoEuH5hsMZgeP4dibtkYQvljTY87CPKs6mzXRdE&usqp=CAU"
  },
  {
    Cod_Country: "SUR", 
    Name_Country: "SURINAME",
    Borders_Country: ["BRA", "GUF", "GUY"],
    Quantity_Borders_Country: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1200px-Flag_of_Suriname.svg.png"
  },
  {
    Cod_Country: "CHL", 
    Name_Country: "CHILE",
    Borders_Country: ["ARG", "BOL", "PER"],
    Quantity_Borders_Country: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png"
  },
  {
    Cod_Country: "URY", 
    Name_Country: "URUGUAI",
    Borders_Country: ["ARG", "BRA"],
    Quantity_Borders_Country: 2,
    image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/1-bandeira-uruguai.jpg"
  }
]

export function ordination(ordinationList: boolean){
  let newfirst 

  if(ordinationList){
    newfirst = InformationCountries.sort((a, b) => {
      if(a.Quantity_Borders_Country < b.Quantity_Borders_Country){
        return -1
      }else{
        return true
      }
    })
  }else{
    newfirst = InformationCountries.sort((a, b) => {
      if(a.Quantity_Borders_Country > b.Quantity_Borders_Country){
        return -1
      }else{
        return true
      }
    })
  }

  return newfirst
}