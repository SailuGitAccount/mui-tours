import React from 'react';
import TourCard from '../TourCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react';

describe('Tour Card tests', () => {
  const sampleTour = {
    name: 'Sample Tour',
    duration: 4,
    rating: 4.5,
    numberOfReviews: 10,
    price: 100,
    image:
      'https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg',
  };
  test('renders tour', async () => {
    await act(async () => {
      render(<TourCard tour={sampleTour} />);
    });

    const tourName = screen.getByText(sampleTour.name);
    expect(tourName).toBeInTheDocument();
  });
  test('renders tour image', async () => {
    await act(async () => {
      render(<TourCard tour={sampleTour} />);
    });
    const tourImageTxt = screen.getByAltText('Niagara falls');
    expect(tourImageTxt).toBeInTheDocument();

    // Check if tour duration is rendered
    const tourDuration = screen.getByText(`${sampleTour.duration} hours`);
    expect(tourDuration).toBeInTheDocument();

    // Check if tour rating is rendered
    const rating = screen.getByTestId('tour-rating');
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveAttribute('aria-valuenow', String(sampleTour.rating));
    // expect(tourRating).toBeInTheDocument();

    // Check if number of reviews is rendered
    const numberOfReviews = screen.getByText(
      `(${sampleTour.numberOfReviews} reviews)`
    );
    expect(numberOfReviews).toBeInTheDocument();

    // Check if tour price is rendered
    const tourPrice = screen.getByText(`From C ${sampleTour.price}$`);
    expect(tourPrice).toBeInTheDocument();
  });
  it('renders with correct typography variants', () => {
    render(<TourCard tour={sampleTour} />);

    // Check if tour name uses variant "subtitle1"
    const tourName = screen.getByText(sampleTour.name);
    expect(tourName).toHaveClass('MuiTypography-subtitle1');

    // Check if tour duration uses variant "body2"
    const tourDuration = screen.getByText(`${sampleTour.duration} hours`);
    expect(tourDuration).toHaveClass('MuiTypography-body2');

    // Check if number of reviews uses variant "body2"
    const numberOfReviews = screen.getByText(
      `(${sampleTour.numberOfReviews} reviews)`
    );
    expect(numberOfReviews).toHaveClass('MuiTypography-body2');

    // Check if tour price uses variant "h6"
    const tourPrice = screen.getByText(`From C ${sampleTour.price}$`);
    expect(tourPrice).toHaveClass('MuiTypography-h6');
  });
});
