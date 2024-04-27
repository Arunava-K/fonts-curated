import { useParams } from 'react-router-dom'; // Import useParams for URL parameters
import './fontdetail.css';
import Overlay from './Vertical Overlay/vertical_overlay'

interface FontDetails {
  name: string;
  description: string;
  specimens: string[];
  // ...other properties as needed
}

function FontDetail(){
  // Use destructuring to extract fontName directly
  const { fontName } = useParams< { fontName: string }>(); // Extract font name from URL

  // Fetch or retrieve font details based on fontName here
  const fontDetails: FontDetails = {
    // Example details
    name: fontName || '', // Handle potential missing fontName
    description: '...',
    specimens: ['...', '...'],
    // ...other properties
  };

  return (
    <>
    <section className='font-detail-body'>
    <div className="font-detail">
      <h1>{fontDetails.name}</h1>
      <p>{fontDetails.description}</p>
      {/* Display other font details here (specimens, usage, etc.) */}
    </div>
    </section>
    </>
  );
}

export default FontDetail;
