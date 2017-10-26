'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hello = require('./Hello');

var _Hello2 = _interopRequireDefault(_Hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coli = function (_React$Component) {
    _inherits(Coli, _React$Component);

    function Coli() {
        _classCallCheck(this, Coli);

        return _possibleConstructorReturn(this, (Coli.__proto__ || Object.getPrototypeOf(Coli)).apply(this, arguments));
    }

    _createClass(Coli, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                ' Hello ',
                _react2.default.createElement(_Hello2.default, null)
            );
        }
    }]);

    return Coli;
}(_react2.default.Component);

exports.default = Coli;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL0NvbGkuanMiXSwibmFtZXMiOlsiQ29saSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEk7Ozs7Ozs7Ozs7O2lDQUNSO0FBQ0wsbUJBQU87QUFBQTtBQUFBO0FBQUE7QUFBVztBQUFYLGFBQVA7QUFDSDs7OztFQUg2QixnQkFBTUMsUzs7a0JBQW5CRCxJIiwiZmlsZSI6IkNvbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbGxvIGZyb20gJy4vSGVsbG8nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxoMT4gSGVsbG8gPEhlbGxvLz48L2gxPjtcbiAgICB9XG59XG5cblxuIl19