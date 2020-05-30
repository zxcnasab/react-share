import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

function twitterLink(
  url: string,
  {
    title,
    via,
    hashtags = [],
    related = [],
    target = ""
  }: { title?: string; via?: string; hashtags?: string[]; related?: string[], target?: string },
) {
  assert(url, 'twitter.url');
  assert(Array.isArray(hashtags), 'twitter.hashtags is not an array');
  assert(Array.isArray(related), 'twitter.related is not an array');

  return (
    'https://twitter.com/share' +
    objectToGetParams({
      url,
      text: title,
      via,
      hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
      related: related.length > 0 ? related.join(',') : undefined,
      target
    })
  );
}

const TwitterShareButton = createShareButton<{
  title?: string;
  via?: string;
  hashtags?: string[];
  related?: string[];
  target?: string;
}>(
  'twitter',
  twitterLink,
  props => ({
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related,
    target: props.target
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default TwitterShareButton;
