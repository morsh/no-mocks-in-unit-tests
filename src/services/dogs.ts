import axios from 'axios';

export interface IDogService {
    getRandomImageUrl(): Promise<string>;
}

export class DogService implements IDogService {
    async getRandomImageUrl() {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        return response.data.message as string;
    }
}