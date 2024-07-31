import React, { useState, useEffect } from "react";

const Afichage = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const [datas, setData] = useState([]);

  const fetchData = async () => {
    try {
      const reponse = await fetch(
        "https://good-cooker-admin.fatihazaki.com/api/recipe/breakfast",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization:`Bearer ${jwt}`
          },
        },
      );
      const dataJson = await reponse.json();
      console.log(dataJson);
      setData(dataJson);
    } catch (error) {
      console.error("error api", error);
    }
  };

  // const fetchDta = async () => {
  //   try {
  //     const reponse = await fetch("", {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",  est utilisé dans les requêtes HTTP pour indiquer le type de contenu qui est envoyé dans le corps de la requête. Dans ce cas, cela signifie que le contenu est au format JSON
  //         // Authorization:`Bearer ${jwt}`
  //       },
  //       // body : JSON.stringify(body)
  //     });
  //     const data= await reponse.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("error appi", error);
  //   }
  // };

  const formData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    password: "securepassword123",
  };

  fetch("https://example.com/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  return (
    <div>
      {datas.length > 0 ? (
        datas.map((data, id) => (
          <div key={id}>
            <h1>Hello</h1>
            <h2>{data.title}</h2>
            <p>{data.ingrediants}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Afichage;
