import React from 'react';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import Title from '../../Title';
import NewsCard from '../../Cards/Post/NewsCard';
import useStyles from './news-event-style';

const newsContent = [
  {
    text: 'Sed imperdiet enim ligula.',
    img: imgAPI.photosL[1],
    type: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[2],
    type: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[3],
    type: 'caption_event',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[4],
    type: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[5],
    type: 'caption_event',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[6],
    type: 'caption_news',
  },
];

function NewsEvent() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    }]
  };

  return (
    <div >
      {/* <Title align="center" text={t('ai-landing.news_title')} />
      <p className={cx(text.subtitle2, align.textCenter)}>
        {t('ai-landing.news_desc')}
      </p>
      <div className={classes.carousel}>
        <Carousel {...settings}>
          {newsContent.map((item, index) => (
            <div key={index.toString()}>
              <div className={classes.item}>
                <NewsCard
                  img={item.img}
                  title={item.text}
                  headline="headline"
                  orientation="portrait"
                  type="over"
                  href={link.blogDetail}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div> */}
    </div>
  );
}

NewsEvent.propTypes = {

};

export default NewsEvent;
