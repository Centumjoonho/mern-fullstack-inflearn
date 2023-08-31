/* NodeJs 12 샘플 코드 */
const axios = require('axios');

const evCharger = () => {

    var url = 'http://apis.data.go.kr/B552584/EvCharger/getChargerStatus';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=NdbEdqC6AC4FnV%2BEPdFfqVXv55cNZPizD5Nr3ZvT7ZVoIk%2Bhbra9C4TMN3YRJYG3HXBy0DYax%2FlDCRor5Nhryg%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
    queryParams += '&' + encodeURIComponent('period') + '=' + encodeURIComponent('5'); /* */
    queryParams += '&' + encodeURIComponent('zcode') + '=' + encodeURIComponent('11'); /* */

    axios.get(url + queryParams)
        .then(response => {
            console.log('Status', response.status);
            console.log('Headers', JSON.stringify(response.headers));
            console.log('Response received', response.data);

            const responseData = response.data; // Get the actual data

            res.status(200).json({ success: true, data: responseData });
            // Handle the response data as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

module.exports = evCharger;