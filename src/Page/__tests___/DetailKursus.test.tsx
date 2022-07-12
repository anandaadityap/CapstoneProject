import { render } from '@testing-library/react';
import DetailKursus from '../DetailKursus';

describe('<DetailKursus />', () => {
  it('should render without errors', () => {
    const { container } = render(<DetailKursus />);

    expect(container).toBeInTheDocument();
  });
});
