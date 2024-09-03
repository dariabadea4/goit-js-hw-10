import axios from 'axios';

const API_KEY = 'live_H84h4Ja7AwmaNFDZaXCvccmf3LWYoI3yuUijayzlno00Axm2D1BUaGKrZn65YDlC';
const ENDPOINT = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export default class CatList {
  constructor({ selector  }) {
    this.element = this.select(selector);
  }
  select(selector) {
    return document.querySelector(selector);
  }
  hide(){
    this.element.classList.add('hidden')
  }
  show(){
    this.element.classList.remove('hidden')
  }
  async getCats() {
    try {
      const { data } = await axios.get(`${ENDPOINT}/breeds`);
      return data;
    } catch (err) {
      return console.error(error);
    }
  }
  async getCatInfo(breedId) {
    try {
      const { data } = await axios.get(
        `${ENDPOINT}/images/search?breed_ids=${breedId}`
      );
      return data;
    } catch (err) {
      return console.error(error);
    }
  }
}