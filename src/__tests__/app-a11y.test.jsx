import { render, screen } from '@testing-library/react';
import App from '../App';
import { ThemeProvider } from '../context/ThemeContext';
import { AppStateProvider } from '../context/AppStateContext';

const renderWithProviders = () => {
  return render(
    <ThemeProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </ThemeProvider>,
  );
};

describe('App accessibility scaffolding', () => {
  it('renders skip link and onboarding tour hint', () => {
    renderWithProviders();
    expect(screen.getByText(/Skip to main content/i)).toBeInTheDocument();
  });
});
