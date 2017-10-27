'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SalarySlider = function (_React$Component) {
    _inherits(SalarySlider, _React$Component);

    function SalarySlider(props) {
        _classCallCheck(this, SalarySlider);

        var _this = _possibleConstructorReturn(this, (SalarySlider.__proto__ || Object.getPrototypeOf(SalarySlider)).call(this, props));

        _this.state = { salary: _this.props.defaultSalary };
        _this.handleChangeSalary = _this.handleChangeSalary.bind(_this);
        return _this;
    }

    _createClass(SalarySlider, [{
        key: 'handleChangeSalary',
        value: function handleChangeSalary(event, newValue) {
            this.props.onChange(newValue);
            this.setState({ salary: newValue });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Actualmente mi sueldo es / Currently my salary is'
                ),
                _react2.default.createElement(_Slider2.default, { style: { width: 600 },
                    min: this.props.min, max: this.props.max,
                    step: this.props.step, value: this.state.salary,
                    onChange: this.handleChangeSalary }),
                _react2.default.createElement(
                    'h3',
                    null,
                    this.state.salary.toLocaleString()
                )
            );
        }
    }]);

    return SalarySlider;
}(_react2.default.Component);

exports.default = SalarySlider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3RoaW5raW5nX2NvbXBvbmVudHMvU2FsYXJ5U2xpZGVyLmpzIl0sIm5hbWVzIjpbIlNhbGFyeVNsaWRlciIsInByb3BzIiwic3RhdGUiLCJzYWxhcnkiLCJkZWZhdWx0U2FsYXJ5IiwiaGFuZGxlQ2hhbmdlU2FsYXJ5IiwiYmluZCIsImV2ZW50IiwibmV3VmFsdWUiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwid2lkdGgiLCJtaW4iLCJtYXgiLCJzdGVwIiwidG9Mb2NhbGVTdHJpbmciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxZOzs7QUFDakIsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBRUMsUUFBUSxNQUFLRixLQUFMLENBQVdHLGFBQXJCLEVBQWI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsT0FBMUI7QUFIZTtBQUlsQjs7OzsyQ0FFa0JDLEssRUFBT0MsUSxFQUFVO0FBQ2hDLGlCQUFLUCxLQUFMLENBQVdRLFFBQVgsQ0FBb0JELFFBQXBCO0FBQ0EsaUJBQUtFLFFBQUwsQ0FBYyxFQUFDUCxRQUFRSyxRQUFULEVBQWQ7QUFDSDs7O2lDQUVRO0FBQ0wsbUJBQ0E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVJLGtFQUFRLE9BQU8sRUFBQ0csT0FBTyxHQUFSLEVBQWY7QUFDSSx5QkFBSyxLQUFLVixLQUFMLENBQVdXLEdBRHBCLEVBQ3lCLEtBQUssS0FBS1gsS0FBTCxDQUFXWSxHQUR6QztBQUVJLDBCQUFNLEtBQUtaLEtBQUwsQ0FBV2EsSUFGckIsRUFFMkIsT0FBTyxLQUFLWixLQUFMLENBQVdDLE1BRjdDO0FBR0ksOEJBQVUsS0FBS0Usa0JBSG5CLEdBRko7QUFNSTtBQUFBO0FBQUE7QUFBSyx5QkFBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCWSxjQUFsQjtBQUFMO0FBTkosYUFEQTtBQVNIOzs7O0VBdEJxQyxnQkFBTUMsUzs7a0JBQTNCaEIsWSIsImZpbGUiOiJTYWxhcnlTbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdtYXRlcmlhbC11aS9TbGlkZXInO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsYXJ5U2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNhbGFyeTogdGhpcy5wcm9wcy5kZWZhdWx0U2FsYXJ5IH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlU2FsYXJ5ID0gdGhpcy5oYW5kbGVDaGFuZ2VTYWxhcnkuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VTYWxhcnkoZXZlbnQsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzYWxhcnk6IG5ld1ZhbHVlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPkFjdHVhbG1lbnRlIG1pIHN1ZWxkbyBlcyAvIEN1cnJlbnRseSBteSBzYWxhcnkgaXM8L2gzPlxuICAgICAgICAgICAgPFNsaWRlciBzdHlsZT17e3dpZHRoOiA2MDB9fSBcbiAgICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufSBtYXg9e3RoaXMucHJvcHMubWF4fSBcbiAgICAgICAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXB9IHZhbHVlPXt0aGlzLnN0YXRlLnNhbGFyeX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTYWxhcnl9IC8+XG4gICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUuc2FsYXJ5LnRvTG9jYWxlU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59Il19