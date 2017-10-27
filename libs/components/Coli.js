'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Thinking = require('./Thinking');

var _Thinking2 = _interopRequireDefault(_Thinking);

var _Comparison = require('./Comparison');

var _Comparison2 = _interopRequireDefault(_Comparison);

var _ProductsTable = require('./ProductsTable');

var _ProductsTable2 = _interopRequireDefault(_ProductsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coli = function (_React$Component) {
    _inherits(Coli, _React$Component);

    function Coli(props) {
        _classCallCheck(this, Coli);

        var _this = _possibleConstructorReturn(this, (Coli.__proto__ || Object.getPrototypeOf(Coli)).call(this, props));

        _this.state = {
            thinking: 'from-pr',
            index: _this.props.index,
            averagePrices: _this.props.averagePrices
        };
        console.log(_this.props.index);
        _this.handleThinkingChange = _this.handleThinkingChange.bind(_this);
        return _this;
    }

    // This handler is passed to the Thinking Component as onThinkingChange


    _createClass(Coli, [{
        key: 'handleThinkingChange',
        value: function handleThinkingChange(e) {
            console.log(e);
            // Sets the local state with the value sent from Thinking Component
            this.setState({ thinking: e });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Thinking2.default, { onThinkingChange: this.handleThinkingChange,
                    thinking: this.state.thinking, locations: this.state.index }),
                _react2.default.createElement(_ProductsTable2.default, { products: this.state.averagePrices })
            );
        }
    }]);

    return Coli;
}(_react2.default.Component);

exports.default = Coli;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL0NvbGkuanMiXSwibmFtZXMiOlsiQ29saSIsInByb3BzIiwic3RhdGUiLCJ0aGlua2luZyIsImluZGV4IiwiYXZlcmFnZVByaWNlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVUaGlua2luZ0NoYW5nZSIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBQ2pCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFVLFNBREQ7QUFFVEMsbUJBQU8sTUFBS0gsS0FBTCxDQUFXRyxLQUZUO0FBR1RDLDJCQUFlLE1BQUtKLEtBQUwsQ0FBV0k7QUFIakIsU0FBYjtBQUtBQyxnQkFBUUMsR0FBUixDQUFZLE1BQUtOLEtBQUwsQ0FBV0csS0FBdkI7QUFDQSxjQUFLSSxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsT0FBNUI7QUFSZTtBQVNsQjs7QUFFRDs7Ozs7NkNBQ3FCQyxDLEVBQUc7QUFDcEJKLG9CQUFRQyxHQUFSLENBQVlHLENBQVo7QUFDQTtBQUNBLGlCQUFLQyxRQUFMLENBQWMsRUFBRVIsVUFBVU8sQ0FBWixFQUFkO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJLG9FQUFVLGtCQUFrQixLQUFLRixvQkFBakM7QUFDSSw4QkFBVSxLQUFLTixLQUFMLENBQVdDLFFBRHpCLEVBQ21DLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxLQUR6RCxHQURKO0FBR0kseUVBQWUsVUFBVSxLQUFLRixLQUFMLENBQVdHLGFBQXBDO0FBSEosYUFESjtBQU9IOzs7O0VBM0I2QixnQkFBTU8sUzs7a0JBQW5CWixJIiwiZmlsZSI6IkNvbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoaW5raW5nIGZyb20gJy4vVGhpbmtpbmcnO1xuaW1wb3J0IENvbXBhcmlzb24gZnJvbSAnLi9Db21wYXJpc29uJztcbmltcG9ydCBQcm9kdWN0c1RhYmxlIGZyb20gJy4vUHJvZHVjdHNUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRoaW5raW5nOiAnZnJvbS1wcicsXG4gICAgICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgICAgICAgIGF2ZXJhZ2VQcmljZXM6IHRoaXMucHJvcHMuYXZlcmFnZVByaWNlc1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaW5kZXgpO1xuICAgICAgICB0aGlzLmhhbmRsZVRoaW5raW5nQ2hhbmdlID0gdGhpcy5oYW5kbGVUaGlua2luZ0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgaGFuZGxlciBpcyBwYXNzZWQgdG8gdGhlIFRoaW5raW5nIENvbXBvbmVudCBhcyBvblRoaW5raW5nQ2hhbmdlXG4gICAgaGFuZGxlVGhpbmtpbmdDaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgLy8gU2V0cyB0aGUgbG9jYWwgc3RhdGUgd2l0aCB0aGUgdmFsdWUgc2VudCBmcm9tIFRoaW5raW5nIENvbXBvbmVudFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGhpbmtpbmc6IGUgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGhpbmtpbmcgb25UaGlua2luZ0NoYW5nZT17dGhpcy5oYW5kbGVUaGlua2luZ0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdGhpbmtpbmc9e3RoaXMuc3RhdGUudGhpbmtpbmd9IGxvY2F0aW9ucz17dGhpcy5zdGF0ZS5pbmRleH0gLz5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdHNUYWJsZSBwcm9kdWN0cz17dGhpcy5zdGF0ZS5hdmVyYWdlUHJpY2VzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19