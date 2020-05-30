import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

function facebookLink(url: string, { quote, hashtag, target }: { quote?: string; hashtag?: string; target?: string }) {
  assert(url, 'facebook.url');
  const t = 'https://www.facebook.com/sharer/sharer.php' +
  objectToGetParams({
    u: url,
    quote,
    hashtag,
    target
  })
  return (
    t
  );
}

const FacebookShareButton = createShareButton<{ quote?: string; hashtag?: string; target?: string }>(
  'facebook',
  facebookLink,
  props => ({
    quote: props.quote,
    hashtag: props.hashtag,
    target: props.target
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default FacebookShareButton;
