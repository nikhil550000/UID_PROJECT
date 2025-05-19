import React from 'react';

const StatCard = ({ title, value, icon, color = "primary" }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className={`card border-0 shadow-sm h-100 text-${color}`}>
        <div className="card-body text-center">
          <div className="display-5 mb-2">{icon}</div>
          <h6 className="card-title fw-semibold">{title}</h6>
          <h4 className="fw-bold">{value}</h4>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
