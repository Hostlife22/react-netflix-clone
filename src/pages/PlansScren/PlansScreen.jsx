import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { subscribePlan, unsubscribePlan } from '../../features/subscribeSlice';
import './PlansScreen.css';

function PlansScreen({ id, plan, description, currentPlanId }) {
  const dispatch = useDispatch();

  const handleClickToPlan = (id) => {
    if (id !== currentPlanId) {
      dispatch(
        subscribePlan({
          id,
          date: new Date().toLocaleDateString(),
        }),
      );
    } else {
      dispatch(unsubscribePlan());
    }
  };

  return (
    <div className="plansScreen">
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Netflix {plan}</h5>
          <h6>{description}</h6>
        </div>
        <button
          onClick={() => handleClickToPlan(id)}
          style={{ backgroundColor: id === currentPlanId ? 'gray' : '' }}>
          {id === currentPlanId ? 'Current Package' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
}

PlansScreen.propTypes = {
  id: PropTypes.number.isRequired,
  plan: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currentPlanId: PropTypes.number,
};

export default PlansScreen;
