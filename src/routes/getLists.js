import axios from 'axios';
export async function get(req, res, next) {
    const url = "https://dev.api.mesaidespubliques.fr/Aides/all?page=1&count=50"
    try {
        const response = await axios.get(url);
        return res.end(JSON.stringify(response.data));
        
      } catch (error) {
        console.error(error);
      }
}