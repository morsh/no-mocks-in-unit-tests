import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { DogPicture } from './dog-picture';
import { DogService } from '../../services/dogs';

const getRandomImageUrl = jest.fn();
jest.mock('../../services/dogs');
const DogServiceMock = DogService as jest.Mock;

describe('dog-picture', () => {

  beforeAll(() => {
    DogServiceMock.mockImplementation(() => ({
      getRandomImageUrl: jest.fn().mockResolvedValue(getRandomImageUrl())
    }));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('dog-picture', async () => {
    const mockUrl = 'http://some-dog/';
    getRandomImageUrl.mockResolvedValue(mockUrl)
    const { getByTestId } = render(<DogPicture />);
    const image = await waitForElement(() => getByTestId('dog-image'));
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', mockUrl)
  });
  
})