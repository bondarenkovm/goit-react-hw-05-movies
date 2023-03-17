import { useParams } from 'react-router-dom';
function Reviews() {
  const { id } = useParams();
  return <div>Reviews: {id}</div>;
}
export default Reviews;
