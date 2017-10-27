'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comparison = function (_React$Component) {
    _inherits(Comparison, _React$Component);

    function Comparison(props) {
        _classCallCheck(this, Comparison);

        var _this = _possibleConstructorReturn(this, (Comparison.__proto__ || Object.getPrototypeOf(Comparison)).call(this, props));

        _this.state = {
            salary: _this.props.salary.toLocaleString(undefined, { maximumFractionDigits: 2 }),
            fromCity: _this.props.fromCity,
            toCity: _this.props.toCity
        };
        _this.calculateComparableSalary = _this.calculateComparableSalary.bind(_this);
        _this.prepareChartData = _this.prepareChartData.bind(_this);
        return _this;
    }

    // Salary + ( (compositeIndexFromCity - compositeIndexToCity) / compositeIndexFromCity) * Salary


    _createClass(Comparison, [{
        key: 'calculateComparableSalary',
        value: function calculateComparableSalary(salary) {
            if (this.props.fromCity && this.props.toCity) {
                var value = salary + (this.props.toCity[4] - this.props.fromCity[4]) / this.props.fromCity[4] * salary;
                console.log('Calc: ' + (this.props.fromCity[4] - this.props.toCity[4]) / this.props.fromCity[4]);
                console.log('Comparable salary: ' + value);
                return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
            }
            return salary.toLocaleString(undefined, { maximumFractionDigits: 2 });
        }
    }, {
        key: 'prepareChartData',
        value: function prepareChartData(fromCity, toCity) {
            if (!(fromCity && toCity)) return [];

            return {
                labels: ['Composite', 'Grocery', 'Housing', 'Utilities', 'Transportation', 'Health', 'Miscellaneous'],
                datasets: [{
                    label: fromCity[3],
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [fromCity[4], fromCity[5], fromCity[6], fromCity[7], fromCity[8], fromCity[9], fromCity[10]]
                }, {
                    label: toCity[3],
                    backgroundColor: 'rgba(99,99,255,0.2)',
                    borderColor: 'rgba(99,99,255,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(99,99,255,0.4)',
                    hoverBorderColor: 'rgba(99,99,255,1)',
                    data: [toCity[4], toCity[5], toCity[6], toCity[7], toCity[8], toCity[9], toCity[10]]
                }]
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var bar = null;
            if (this.props.fromCity && this.props.toCity) {
                bar = _react2.default.createElement(_reactChartjs.Bar, { data: this.prepareChartData(this.props.fromCity, this.props.toCity),
                    width: 100, height: 50, options: { maintainAspectRatio: true }, redraw: true });
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Paper2.default,
                    null,
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Salario comparable / Comparable Salary'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        '$ ',
                        this.calculateComparableSalary(this.props.salary)
                    ),
                    bar
                )
            );
        }
    }]);

    return Comparison;
}(_react2.default.Component);

exports.default = Comparison;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL0NvbXBhcmlzb24uanMiXSwibmFtZXMiOlsiQ29tcGFyaXNvbiIsInByb3BzIiwic3RhdGUiLCJzYWxhcnkiLCJ0b0xvY2FsZVN0cmluZyIsInVuZGVmaW5lZCIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImZyb21DaXR5IiwidG9DaXR5IiwiY2FsY3VsYXRlQ29tcGFyYWJsZVNhbGFyeSIsImJpbmQiLCJwcmVwYXJlQ2hhcnREYXRhIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJob3ZlckJhY2tncm91bmRDb2xvciIsImhvdmVyQm9yZGVyQ29sb3IiLCJkYXRhIiwiYmFyIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7OztBQUNqQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxNQUFLRixLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLGNBQWxCLENBQWlDQyxTQUFqQyxFQUE0QyxFQUFFQyx1QkFBdUIsQ0FBekIsRUFBNUMsQ0FEQztBQUVUQyxzQkFBVSxNQUFLTixLQUFMLENBQVdNLFFBRlo7QUFHVEMsb0JBQVEsTUFBS1AsS0FBTCxDQUFXTztBQUhWLFNBQWI7QUFLQSxjQUFLQyx5QkFBTCxHQUFpQyxNQUFLQSx5QkFBTCxDQUErQkMsSUFBL0IsT0FBakM7QUFDQSxjQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsT0FBeEI7QUFSZTtBQVNsQjs7QUFHRDs7Ozs7a0RBQzBCUCxNLEVBQVE7QUFDOUIsZ0JBQUksS0FBS0YsS0FBTCxDQUFXTSxRQUFY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V0UsTUFBMUM7QUFBUCxxQkFGSjtBQUdLcUI7QUFITDtBQURKLGFBREo7QUFTSDs7OztFQXRFbUMsZ0JBQU1FLFM7O2tCQUF6QjFCLFUiLCJmaWxlIjoiQ29tcGFyaXNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFyaXNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2FsYXJ5OiB0aGlzLnByb3BzLnNhbGFyeS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pLFxuICAgICAgICAgICAgZnJvbUNpdHk6IHRoaXMucHJvcHMuZnJvbUNpdHksXG4gICAgICAgICAgICB0b0NpdHk6IHRoaXMucHJvcHMudG9DaXR5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlQ29tcGFyYWJsZVNhbGFyeSA9IHRoaXMuY2FsY3VsYXRlQ29tcGFyYWJsZVNhbGFyeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByZXBhcmVDaGFydERhdGEgPSB0aGlzLnByZXBhcmVDaGFydERhdGEuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuICAgIC8vIFNhbGFyeSArICggKGNvbXBvc2l0ZUluZGV4RnJvbUNpdHkgLSBjb21wb3NpdGVJbmRleFRvQ2l0eSkgLyBjb21wb3NpdGVJbmRleEZyb21DaXR5KSAqIFNhbGFyeVxuICAgIGNhbGN1bGF0ZUNvbXBhcmFibGVTYWxhcnkoc2FsYXJ5KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZyb21DaXR5ICYmIHRoaXMucHJvcHMudG9DaXR5KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzYWxhcnlcbiAgICAgICAgICAgICAgICArICgodGhpcy5wcm9wcy50b0NpdHlbNF0gLSB0aGlzLnByb3BzLmZyb21DaXR5WzRdKSAvIHRoaXMucHJvcHMuZnJvbUNpdHlbNF0pXG4gICAgICAgICAgICAgICAgKiBzYWxhcnk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FsYzogJyArICgodGhpcy5wcm9wcy5mcm9tQ2l0eVs0XSAtIHRoaXMucHJvcHMudG9DaXR5WzRdKSAvIHRoaXMucHJvcHMuZnJvbUNpdHlbNF0pKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wYXJhYmxlIHNhbGFyeTogJyArIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzYWxhcnkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcbiAgICB9XG5cbiAgICBwcmVwYXJlQ2hhcnREYXRhKGZyb21DaXR5LCB0b0NpdHkpIHtcbiAgICAgICAgaWYgKCEoZnJvbUNpdHkgJiYgdG9DaXR5KSkgcmV0dXJuIFtdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbHM6IFsnQ29tcG9zaXRlJywgJ0dyb2NlcnknLCAnSG91c2luZycsICdVdGlsaXRpZXMnLFxuICAgICAgICAgICAgICAgICdUcmFuc3BvcnRhdGlvbicsICdIZWFsdGgnLCAnTWlzY2VsbGFuZW91cyddLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmcm9tQ2l0eVszXSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsOTksMTMyLDAuMiknLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwwLjQpJyxcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtmcm9tQ2l0eVs0XSwgZnJvbUNpdHlbNV0sIGZyb21DaXR5WzZdLCBmcm9tQ2l0eVs3XSwgZnJvbUNpdHlbOF0sIGZyb21DaXR5WzldLCBmcm9tQ2l0eVsxMF1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0b0NpdHlbM10sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoOTksOTksMjU1LDAuMiknLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoOTksOTksMjU1LDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSg5OSw5OSwyNTUsMC40KScsXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDk5LDk5LDI1NSwxKScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFt0b0NpdHlbNF0sIHRvQ2l0eVs1XSwgdG9DaXR5WzZdLCB0b0NpdHlbN10sIHRvQ2l0eVs4XSwgdG9DaXR5WzldLCB0b0NpdHlbMTBdXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBiYXIgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mcm9tQ2l0eSAmJiB0aGlzLnByb3BzLnRvQ2l0eSkge1xuICAgICAgICAgICAgYmFyID0gPEJhciBkYXRhPXt0aGlzLnByZXBhcmVDaGFydERhdGEodGhpcy5wcm9wcy5mcm9tQ2l0eSwgdGhpcy5wcm9wcy50b0NpdHkpfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9IGhlaWdodD17NTB9IG9wdGlvbnM9e3sgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSB9fSByZWRyYXcgLz5cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBhcGVyID5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlNhbGFyaW8gY29tcGFyYWJsZSAvIENvbXBhcmFibGUgU2FsYXJ5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPiQge3RoaXMuY2FsY3VsYXRlQ29tcGFyYWJsZVNhbGFyeSh0aGlzLnByb3BzLnNhbGFyeSl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAge2Jhcn1cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4iXX0=