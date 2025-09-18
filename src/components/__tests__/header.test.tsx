import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../header';
import { usePathname } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Header', () => {
  const mockUsePathname = usePathname as jest.Mock;
  
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/');
    // Mock scrollTo
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the header with logo and navigation', () => {
    render(<Header />);
    
    // Check if logo is rendered
    expect(screen.getByText('Mulugeta')).toBeInTheDocument();
    expect(screen.getByText('Frontend Engineer')).toBeInTheDocument();
    
    // Check if navigation items are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('applies active styles to current page', () => {
    render(<Header />);
    
    // Home should be active by default
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveClass('text-primary');
  });

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Header />);
    
    // Menu button should be visible on mobile
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
    
    // Menu should be closed by default
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument();
    
    // Click menu button
    fireEvent.click(menuButton);
    
    // Menu should be open
    expect(screen.getByRole('navigation', { name: 'Mobile menu' })).toBeInTheDocument();
    
    // Click menu button again to close
    fireEvent.click(menuButton);
    
    // Menu should be closed
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument();
  });

  it('closes mobile menu when clicking outside', () => {
    render(
      <div>
        <Header />
        <div data-testid="outside">Outside element</div>
      </div>
    );
    
    // Open menu
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    
    // Click outside
    fireEvent.mouseDown(screen.getByTestId('outside'));
    
    // Menu should be closed
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument();
  });

  it('applies scrolled styles when scrolling', () => {
    // Mock scroll position
    Object.defineProperty(window, 'pageYOffset', {
      value: 100,
      writable: true,
    });
    
    render(<Header />);
    
    // Trigger scroll event
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    // Header should have scrolled styles
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('shadow-md');
    expect(header).toHaveClass('py-2');
  });
});
