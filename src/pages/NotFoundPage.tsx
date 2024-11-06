import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
  className?: string;
}

const NotFoundPage: React.FC<Props> = () => {
  return (
    <Link to=".." relative="path">Back to Home</Link>
  );
};

export default NotFoundPage;