import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/';

import LeftSideContainer from '../client/containers/LeftSideContainer';
import RightSideContainer from '../client/containers/RightSideContainer';

describe('Unit testing for React components', () => {
  describe('LeftSideContainer', () => {
    test('Renders an empty div with id LeftSideContainer when imageURL does not exist', () => {
      let text;
      const props = {
        score: 0,
        pokemon: {},
      };

      text = render(<LeftSideContainer {...props} />);

      expect(text.getByTestId('leftContainer')).toBeEmptyDOMElement();
    });

    test('Renders the passed in score with label Score: ', () => {
      let text;
      const props = {
        score: 2,
        pokemon: { name: 'Psyduck', imageURL: 'http://psyduck.com' },
      };

      text = render(<LeftSideContainer {...props} />);

      expect(text.getByTestId('score').textContent).toEqual('Score: 2');
      expect(text.getByTestId('highscore').textContent).toEqual('Highscore: 2');
    });
  });

  describe('RightSideContainer', () => {
    test('Renders an empty div when imageURL does not exist', () => {
      let text;
      const props = {
        hardmode: false,
        pokemon: {},
      };

      text = render(<RightSideContainer {...props} />);

      expect(text.getByTestId('rightContainer')).toBeEmptyDOMElement();
    });

    test('Renders input type checkbox, checked if hardmode is true, and text Hardmode', () => {
      let check;
      const Wrap = () => {
        const [hardmode, setHardmode] = useState(false);

        const props = {
          hardmode: hardmode,
          setHardMode: setHardmode,
          pokemon: { imageURL: 'http://psyduck.com' },
        };
        return <RightSideContainer {...props} />;
      };

      check = render(<Wrap />);
      const box = check.getByRole('checkbox');
      expect(box.checked).toBe(false);
      userEvent.click(box);
      expect(box.checked).toBe(true);
    });
  });
});
