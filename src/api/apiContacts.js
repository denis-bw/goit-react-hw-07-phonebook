export const fethContactsDetails = async () => await fetch('https://64d1256eff953154bb7a0d1e.mockapi.io/contacts').then((response) => {
    return response.json();
}).then((data) => {
    return data;
});
