import React from 'react';
import { render } from '@testing-library/react-native';
import { Skeleton } from '../';

describe('Skeleton Component', () => {
  it('matches snapshot', () => {
    const { toJSON } = render(<Skeleton />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('works with count prop', async () => {
    const { findAllByTestId } = render(<Skeleton count={4} />);
    const elements = await findAllByTestId('skeleton');
    expect(elements.length).toBe(4);
  });

  it('works with color prop', () => {
    const color = '#fefefe';
    const { getByTestId } = render(<Skeleton color={color} />);

    const element = getByTestId('skeleton');
    const bgColor = element.props.style.backgroundColor;
    expect(bgColor).toBe(color);
  });

  it('works with style prop', () => {
    const customStyle = {
      margin: 10,
      padding: 10,
      borderColor: 'black',
    };
    const { getByTestId } = render(<Skeleton style={customStyle} />);

    const element = getByTestId('skeleton');
    const style = element.props.style;
    for (const key in customStyle) {
      // @ts-expect-error
      expect(style[key]).toBe(customStyle[key]);
    }
  });

  it('works with spacing prop with more than one count', async () => {
    const spacing = 20;
    const { findAllByTestId } = render(
      <Skeleton count={2} spacing={spacing} />
    );

    const elements = await findAllByTestId('skeleton');

    expect(elements.length).toBe(2);
    const firstStyle = elements[0].props.style;
    expect(firstStyle.marginBottom).toBe(spacing);

    const secondStyle = elements[1].props.style;
    expect(secondStyle.marginBottom).toBe(undefined);
  });

  it('should not works with spacing prop with one count', () => {
    const { getByTestId } = render(<Skeleton spacing={20} />);
    const element = getByTestId('skeleton');

    const style = element.props.style;
    expect(style.marginBottom).toBe(undefined);
  });

  it('works with borderRadius props', () => {
    const borderRadius = 10;
    const { getByTestId } = render(<Skeleton borderRadius={borderRadius} />);
    const element = getByTestId('skeleton');

    const style = element.props.style;
    expect(style.borderRadius).toBe(borderRadius);
  });
});
