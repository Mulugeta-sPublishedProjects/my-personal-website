import { render, screen } from '@testing-library/react';
import { AboutUs } from '../about';
import { useReducedMotion } from '../performance-optimizer';

// Mock useReducedMotion
jest.mock('../performance-optimizer', () => ({
  useReducedMotion: jest.fn(),
}));

describe('AboutUs', () => {
  const mockUseReducedMotion = useReducedMotion as jest.Mock;
  
  beforeEach(() => {
    mockUseReducedMotion.mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the about section with title and description', () => {
    render(<AboutUs />);
    
    // Check main title
    expect(screen.getByText('About Me')).toBeInTheDocument();
    
    // Check section description
    expect(screen.getByText(/I'm a passionate Frontend Engineer/i)).toBeInTheDocument();
  });

  it('displays the experience timeline', () => {
    render(<AboutUs />);
    
    // Check experience section title
    expect(screen.getByText('Professional Journey')).toBeInTheDocument();
    
    // Check if experience items are rendered
    const experienceItems = screen.getAllByTestId('experience-item');
    expect(experienceItems.length).toBeGreaterThan(0);
  });

  it('shows skills section with categories', () => {
    render(<AboutUs />);
    
    // Check skills section
    expect(screen.getByText('What I Do')).toBeInTheDocument();
    
    // Check skill categories
    expect(screen.getByText('Frontend Development')).toBeInTheDocument();
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument();
    expect(screen.getByText('Mobile Development')).toBeInTheDocument();
  });

  it('displays education section', () => {
    render(<AboutUs />);
    
    // Check education section
    expect(screen.getByText('Education')).toBeInTheDocument();
    
    // Check if education items are rendered
    const educationItems = screen.getAllByTestId('education-item');
    expect(educationItems.length).toBeGreaterThan(0);
  });

  it('respects reduced motion preferences', () => {
    mockUseReducedMotion.mockReturnValue(true);
    render(<AboutUs />);
    
    // Check if animations are disabled when reduced motion is preferred
    const animatedElements = screen.queryAllByRole('presentation', { hidden: true });
    expect(animatedElements.length).toBe(0);
  });

  it('displays call-to-action button', () => {
    render(<AboutUs />);
    
    // Check CTA button
    const ctaButton = screen.getByRole('link', { name: /view my work/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#work');
  });
});
