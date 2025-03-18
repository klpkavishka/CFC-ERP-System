// filepath: e:\project\ERP system-CFC\project\src\pages\Dashboard.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders Dashboard component', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/some text/i);
  expect(linkElement).toBeInTheDocument();
});