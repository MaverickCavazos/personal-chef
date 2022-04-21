import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Testimonials Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          <div key={thought._id} className="card mb-3">
            <p className="card-header">
              <h4
                to={`/profile/${thought.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thought.username}
              </h4>{' '}
              review on {thought.createdAt}
            </p>
            <div className="card-body">
              <h4 to={`/thought/${thought._id}`}>
                <p>{thought.thoughtText}</p>
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;