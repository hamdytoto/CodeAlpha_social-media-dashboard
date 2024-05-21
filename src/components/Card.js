import React from 'react';

const Card = ({ platform, username, followers, change }) => {
  const isChangePositive = parseInt(change) > 0;
  const changeClass = isChangePositive ? 'up' : 'down';
  const changeIcon = isChangePositive ? './images/icon-up.svg' : './images/icon-down.svg';

  return (
    <div className={`card card_main top-border ${platform}`}>
      <div className="card_top">
        <a className="icon" href="h"><img src={`./images/icon-${platform}.svg`} alt={platform} /></a>
        <p className="username">{username}</p>
      </div>
      <div className="card_middle">
        <h1 className="numbers_of_followers" id={`${platform}-count`}>{followers}</h1>
        <p>Followers</p>
      </div>
      <div className="card_bottom">
        <img className={changeClass} src={changeIcon} alt="change-type" />
        <p className={`change ${changeClass}`}>
          <span id={`${platform}-change`}>{change}</span>
          Today
        </p>
      </div>
    </div>
  );
};

export default Card;
