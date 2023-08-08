export const fethContactsDetails = async () => await fetch('https://64d1256eff953154bb7a0d1e.mockapi.io/contacts').then((response) => {
    return response.json();
}).then((data) => {
    return data;
});

export const fethContactsDelete = async (id) => await fetch(`https://64d1256eff953154bb7a0d1e.mockapi.io/contacts/${id}`, {
    method: 'DELETE'
  }).then((response) => {
     return response.json();
  }).then((data) => {
    return data;
  }).catch(err => {
      console.error(err)
      return err
  });

  export const fethContactsAdd = async ({createdAt, name, phone}) => await fetch(`https://64d1256eff953154bb7a0d1e.mockapi.io/contacts`, {
    method: "POST",
    body: JSON.stringify({
        createdAt,
        name,
        phone,
    }),
    headers: {
        "Content-Type": "application/json",
    }
}).then((response) => {
    return response.json();
}).then((data) => {
    return data;
});
