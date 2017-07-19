'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobile_detect = require('../../utils/mobile_detect');

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _react2.default.createClass({
  displayName: 'Header',
  goBackEv: function goBackEv() {
    if (this.props.onClickBack) {
      this.props.onClickBack();
    } else {
      var hasHistory = document.referrer.indexOf(location.host) >= 0;
      if (hasHistory) {
        history.go(-1);
      } else {
        this.goHome();
      }
    }
  },
  goHome: function goHome() {
    var homeUrl = this.props.homeUrl;
    if (homeUrl) window.location.href = homeUrl;
  },
  componentDidMount: function componentDidMount() {
    document.title = this.props.title || this.props.children;
    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
      var i = document.createElement('iframe');
      i.src = '/favicon.ico';
      i.style.display = 'none';
      i.onload = function () {
        setTimeout(function () {
          i.remove();
        }, 9);
      };
      document.body.appendChild(i);
    }
  },
  render: function render() {
    var _props = this.props,
        title = _props.title,
        leftSlot = _props.leftSlot,
        rightSlot = _props.rightSlot,
        showBack = _props.showBack,
        showHome = _props.showHome,
        backText = _props.backText,
        children = _props.children,
        className = _props.className,
        others = (0, _objectWithoutProperties3.default)(_props, ['title', 'leftSlot', 'rightSlot', 'showBack', 'showHome', 'backText', 'children', 'className']);

    // 非浏览器不展示头

    if (_mobile_detect.isWechat || _mobile_detect.isAlipay) return null;

    return _react2.default.createElement(
      'div',
      { className: 'mt-header' },
      _react2.default.createElement(
        'div',
        { className: 'mt-header-left' },
        showBack && _react2.default.createElement(
          'a',
          { className: 'mt-header-back', href: 'javascript:;', onClick: this.goBackEv },
          _react2.default.createElement('i', { className: 'iconfont icon-xiangzuo mt-header-back-icon' }),
          _react2.default.createElement(
            'span',
            { className: 'mt-header-back-text' },
            backText
          )
        ),
        leftSlot
      ),
      _react2.default.createElement(
        'h1',
        { className: 'mt-header-title' },
        title || children
      ),
      _react2.default.createElement(
        'div',
        { className: 'mt-header-right' },
        rightSlot,
        showHome && _react2.default.createElement('a', { className: 'iconfont icon-shouye mt-header-icon-home', href: 'javascript:;', onClick: this.goHome })
      ),
      _react2.default.createElement('div', { className: 'mt-header-ink-bar' })
    );
  }
});

Header.propTypes = {
  title: _react2.default.PropTypes.any.isRequired, // 标题，一般使用文本，更复杂的可使用jsx
  leftSlot: _react2.default.PropTypes.any, // 可自定义的左侧内容，一般使用文本，更复杂的可使用jsx
  rightSlot: _react2.default.PropTypes.any, // 可自定义的右侧内容一般使用文本，更复杂的可使用jsx
  showBack: _react2.default.PropTypes.bool, // 是否显示左侧的返回按钮
  backText: _react2.default.PropTypes.string,
  showHome: _react2.default.PropTypes.bool, // 是否显示右侧的首页图标
  homeUrl: _react2.default.PropTypes.string,
  preventGoBack: _react2.default.PropTypes.bool //是否阻止返回
};

Header.defaultProps = {
  title: '',
  backText: '',
  showBack: true,
  showHome: true,
  homeUrl: '',
  onClickBack: null,
  preventGoBack: false,
  leftSlot: '',
  rightSlot: ''
};

exports.default = Header;