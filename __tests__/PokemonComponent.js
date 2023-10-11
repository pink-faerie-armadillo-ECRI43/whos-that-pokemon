import Pokemon from '../client/components/Pokemon.jsx';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
jest.mock('../images/playButton.png');

describe('Unit testing Pokemon component', () => {
  describe('Pokemon Component with No Pokemon in state', () => {
    let pokemonComponent;
    let props = {
      pokemon: {
        name: 'Henry',
        imageURL: undefined,
      },
      getNewPokemon: jest.fn(),
      hardmode: false,
      setHardmode: jest.fn(),
    };

    beforeEach(async () => {
      pokemonComponent = await render(<Pokemon {...props} />);
    });

    // when image is undefined, a button should render, and an image of a play button should render
    test('When pokemon.image is undefined: a button should render and a play button image should render', async () => {
      const buttons = await pokemonComponent.getAllByRole('button');
      expect(buttons).toHaveLength(1);
      expect(buttons[0]).toHaveAttribute('id', 'playButton');
      const images = await pokemonComponent.getAllByRole('img');
      expect(images[0]).toHaveClass('playButton');
    });
  });

  describe('Pokemon Component with Pokemon in state', () => {
    let pokemonComponent;
    let props = {
      pokemon: {
        name: 'Henry',
        imageURL: 'test-image-path',
      },
      getNewPokemon: jest.fn(),
      hardmode: false,
      setHardmode: jest.fn(),
    };

    beforeEach(async () => {
      pokemonComponent = await render(<Pokemon {...props} />);
    });

    test('When pokemon.image is defined: no button should render and a pokemon image should render', async () => {
      expect(pokemonComponent.queryAllByRole('button')).toHaveLength(0);
      // console.log(buttons);
      // expect(buttons).toHaveLength(0);
      const images = await pokemonComponent.getAllByRole('img');
      expect(images[0]).toHaveClass('pokemon');
    });
  });
});
