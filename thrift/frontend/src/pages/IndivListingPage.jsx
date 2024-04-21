import * as React from 'react';
import Header from '../components/Header.jsx';
import ResponsiveCarousel from '../components/ResponsiveCarousel.jsx';
import IndivListing from "../components/IndivListing.jsx";

function IndivListingPage() {

  const listingData = {
    title: 'Frog',
    category: 'Cuddly Friends',
    owner: 'John Doe',
    description: 'Frog. Very cute frog. You want to buy this frog. Frog very good price. His name is jerome :). Blablablablablablablablablablablablablablablablablablablablablablabla. blablablablablablablablablablablablablablablablablablablablabla. blablablablablablablablablablablablablablablablablablablablablablablablablabla. blablablablablablablablablablablablablablabla',
    price: '$100',
    createdAt: '2022-04-20 ',
    updatedAt: '2022-04-21'
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <ResponsiveCarousel />
        <div style={{ display: 'flex' }}>
        <IndivListing
          title={listingData.title}
          category={listingData.category}
          owner={listingData.owner}
          description={listingData.description}
          price={listingData.price}
          createdAt={listingData.createdAt}
          updatedAt={listingData.updatedAt}
        />
        </div>
      </div>
    </>
  );
}

export default IndivListingPage;
