import { useParams } from 'react-router-dom';
function Cast() {
  const { id } = useParams();
  return <div>Cast: {id}</div>;
}
export default Cast;
