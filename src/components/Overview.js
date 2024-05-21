
import React from 'react';

const cardsData = [
  { title: 'Page Views', count: 87, icon: './images/icon-facebook.svg', link: 'https://www.facebook.com/' },
  { title: 'Likes', count: 124, icon: './images/icon-instagram.svg', link: 'https://www.instagram.com/' },
  { title: 'Followers', count: 198, icon: './images/icon-twitter.svg', link: 'https://x.com/home' },
  { title: 'Comments', count: 32, icon: './images/icon-youtube.svg', link: 'https://www.youtube.com/' },
  { title: 'Followers', count: 1000, icon: './images/icon-youtube.svg', link: 'https://www.youtube.com/' }
];

const Overview = () => {
  return (
    <section>
      <h2 className="overview-heading">Overview - Today</h2>
      <div className="overview-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card card_sec">
            <div className="wrapper left">
              <h3 className="heading">{card.title}</h3>
              <h1 className="count">{card.count}</h1>
            </div>
            <div className="wrapper right">
              <a className="icon" href={card.link}><img src={card.icon} alt={card.title} /></a>
              <div>
                <img className={index % 2 === 0 ? "up" : "down"} src="./images/icon-up.svg" alt="change_type" />
                <p className={index % 2 === 0 ? "change up" : "change down"}><span>{index % 2 === 0 ? '+' : '-'}10</span>%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
