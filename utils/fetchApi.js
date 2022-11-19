import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (params = null, url) => {
    const options = {
        method: 'GET',
        url: url,
        headers: {
            'X-RapidAPI-Key': 'a30520c056msh551745e4df4b124p1b9b92jsn423337604bf8',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };

    if (params) {
        options['params'] = params;
    }
    
    const response = await axios.request(options);

    try {
        return response.data;
    } catch (error) {
        console.error(error)
    }
}


// params: {
//     locationExternalIDs: '5002',
//     purpose: purpose || 'for-rent',
//     rentFrequency : rentFrequency || 'yearly',
//     minPrice : minPrice || '0',
//     maxPrice : maxPrice || '1000000',
//     roomsMin : roomsMin || '0',
//     bathsMin : bathsMin || '0',
//     sort : sort || 'price-desc',
//     areaMax : areaMax || '35000',
//     locationExternalIDs : locationExternalIDs || '5002',
//     categoryExternalID : categoryExternalID || '4',
// }