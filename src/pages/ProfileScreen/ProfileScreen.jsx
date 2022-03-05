import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { selectSubscribe } from '../../features/subscribeSlice';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import PlansScreen from '../PlansScren/PlansScreen';
import './ProfileScreen.css';

const plans = [
  { id: 1, plan: 'Basic', description: '480p' },
  { id: 2, plan: 'Standart', description: '1080p' },
  { id: 3, plan: 'Premium', description: '4k+HDR' },
];

function ProfileScreen() {
  const user = useSelector(selectUser);
  const { currentPlanId, renewalDate } = useSelector(selectSubscribe);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://64.media.tumblr.com/avatar_061c59a49906_512.pnj" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>
                Plans (Current Plan:{' '}
                {currentPlanId ? plans[currentPlanId - 1].description : ' not selected'})
              </h3>
              <h4>Renewal Date: {renewalDate || 'subscription is not active'}</h4>
              {plans &&
                plans.map((plan) => (
                  <PlansScreen
                    key={plan.id}
                    {...plan}
                    currentPlanId={currentPlanId}
                    renewalDate={renewalDate}
                  />
                ))}
              <button onClick={() => auth.signOut()} className="profileScreen__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
