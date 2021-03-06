const common = {
    fetchPostJson : async (url, json) => {
        console.log("fetchPostJson : ",url, json);
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
            'Content-Type': 'application/json',
            },
        });
    },
}

export default common;