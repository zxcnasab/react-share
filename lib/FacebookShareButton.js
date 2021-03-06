"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));
var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));
function facebookLink(url, _a) {
    var quote = _a.quote, hashtag = _a.hashtag, target = _a.target;
    assert_1.default(url, 'facebook.url');
    var t = 'https://www.facebook.com/sharer/sharer.php' +
        objectToGetParams_1.default({
            u: url,
            quote: quote,
            hashtag: hashtag,
            target: target
        });
    return (t);
}
var FacebookShareButton = createShareButton_1.default('facebook', facebookLink, function (props) { return ({
    quote: props.quote,
    hashtag: props.hashtag,
    target: props.target
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
exports.default = FacebookShareButton;
