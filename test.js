const axios = require('axios')

function getApi(address) {
    return new Promise((resolve) => {
        axios
            .get('https://restapi.amap.com/v3/geocode/geo', {
                params: {
                    key: '02173ea51a9245ef63966988c96a3a67',
                    address,
                },
            })
            .then((resX) => {
                axios
                    .get('https://restapi.amap.com/v3/weather/weatherInfo', {
                        params: {
                            key: '02173ea51a9245ef63966988c96a3a67',
                            city: +resX.data.geocodes[0].adcode,
                        },
                    })
                    .then((res) => {
                        resolve(res.data)
                    })
            })
            
    })
}

async function main() {
    let params = "广东省广州市天河区";
    let res = await getApi(params)
    console.error("天气：",res.lives[0].temperature)
}
main()