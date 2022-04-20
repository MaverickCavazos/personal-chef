import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';

const Testimonials = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];
    console.log(thoughts);

    return (
        <main>
            <div className='flex-row justify-space-between'>
                <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>
            </div>
        </main>
    );
};

export default Testimonials;