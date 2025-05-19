import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';

const Home = () => {
  const user = {
    name: 'John',
    role: 'Admin'
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="bg-light min-vh-100">
      <Header user={user} onLogout={handleLogout} />
      <div className="d-flex">
        <Navbar role={user.role} />
        <main className="p-4 flex-grow-1">
          <div className="mb-4">
            <h2 className="fw-bold text-dark">Dashboard Overview</h2>
            <p className="text-muted">Quick summary of your pharma operations.</p>
          </div>
          <div className="row">
            <StatCard title="Medicines in Stock" value="1,230" icon="💊" color="success" />
            <StatCard title="Pending Orders" value="45" icon="📦" color="warning" />
            <StatCard title="Production Batches" value="5" icon="🏭" color="info" />
            <StatCard title="Monthly Sales" value="₹2.3L" icon="📈" color="primary" />
          </div>

          {/* Optional: Notifications Section */}
          <div className="mt-5">
            <h5 className="text-muted mb-3">Notifications</h5>
            <div className="alert alert-warning">⚠️  Low stock: Paracetamol</div>
            <div className="alert alert-info">📢  3 new orders awaiting confirmation</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
