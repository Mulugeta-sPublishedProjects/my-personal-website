import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../footer';
import { useReducedMotion } from 'framer-motion';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useReducedMotion: jest.fn(),
}));

describe('Footer', () => {
  const mockUseReducedMotion = useReducedMotion as jest.Mock;
  
  beforeEach(() => {
    mockUseReducedMotion.mockReturnValue(false);
    // Mock scrollTo
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the footer with all sections', () => {
    render(<Footer />);
    
    // Check footer sections
    expect(screen.getByText('Mulugeta Adamu')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('displays the copyright information', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Mulugeta Adamu`)).toBeInTheDocument();
    expect(screen.getByText('All rights reserved.')).toBeInTheDocument();
  });

  it('contains all navigation links', () => {
    render(<Footer />);
    
    // Check if all navigation items are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('contains all social links', () => {
    render(<Footer />);
    
    // Check social links
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
  });

  it('has a working back to top button', () => {
    render(<Footer />);
    
    const backToTopButton = screen.getByRole('button', { name: /back to top/i });
    expect(backToTopButton).toBeInTheDocument();
    
    fireEvent.click(backToTopButton);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('renders in compact mode when prop is true', () => {
    render(<Footer compact={true} />);
    
    // In compact mode, some elements might be hidden or different
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('py-8'); // Compact mode has smaller padding
  });

  it('respects reduced motion preferences', () => {
    mockUseReducedMotion.mockReturnValue(true);
    render(<Footer />);
    
    // Check if animations are disabled when reduced motion is preferred
    const animatedElements = screen.queryAllByRole('presentation', { hidden: true });
    expect(animatedElements.length).toBe(0);
  });

  it('has a contact button that scrolls to contact section', () => {
    render(<Footer />);
    
    const contactButton = screen.getByRole('button', { name: /send message/i });
    expect(contactButton).toBeInTheDocument();
    
    fireEvent.click(contactButton);
    // Should call scrollToSection with '#contact'
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
