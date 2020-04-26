import axios from 'axios';

export interface ICatService {
    getRandomImageUrl(): Promise<string>;
}

export class CatService implements ICatService {
    async getRandomImageUrl() {
        const response = await axios.get('https://aws.random.cat/meow');
        return response.data.file;
    }
}