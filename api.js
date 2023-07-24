async function fetchData(links){
    var response
    await axios.get(links)
    .then(async (res) => {
        response = res.data
    })
    .catch((err) => {
        response = err
    })

    return response
}