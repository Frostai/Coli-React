'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioGroup = require('./thinking_components/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _LocationSelectField = require('./LocationSelectField');

var _LocationSelectField2 = _interopRequireDefault(_LocationSelectField);

var _Comparison = require('./Comparison');

var _Comparison2 = _interopRequireDefault(_Comparison);

var _SalarySlider = require('./thinking_components/SalarySlider');

var _SalarySlider2 = _interopRequireDefault(_SalarySlider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thinking = function (_React$Component) {
    _inherits(Thinking, _React$Component);

    function Thinking(props) {
        _classCallCheck(this, Thinking);

        var _this = _possibleConstructorReturn(this, (Thinking.__proto__ || Object.getPrototypeOf(Thinking)).call(this, props));

        _this.state = {
            thinking: props.thinking,
            states: _this.getStates(),
            cities: _this.getCities(),
            salary: 50000,
            fromCity: '',
            toCity: '',
            pr: '72-41980-700'
        };
        _this.handleThinkingChange = _this.handleThinkingChange.bind(_this);
        _this.handleSelectedCity = _this.handleSelectedCity.bind(_this);
        _this.handleSalaryChange = _this.handleSalaryChange.bind(_this);
        _this.getCityForId = _this.getCityForId.bind(_this);
        return _this;
    }

    _createClass(Thinking, [{
        key: 'getStates',
        value: function getStates() {
            var options = [];
            options[options.length] = { value: options.length, label: this.props.locations[0][1] };
            for (var i = 1; i < this.props.locations.length; i++) {
                if (this.props.locations[i][1] != this.props.locations[i - 1][1]) {
                    options[options.length] = { value: options.length, label: this.props.locations[i][1] };
                }
            }
            console.log(options);
            return options;
        }
    }, {
        key: 'getCities',
        value: function getCities() {
            var cities = [];
            for (var i = 0; i < this.props.locations.length; i++) {
                cities[i] = {
                    value: this.props.locations[i][0],
                    state: this.props.locations[i][1],
                    label: this.props.locations[i][3]
                };
                //console.log(options[i]);
            }
            return cities;
        }
    }, {
        key: 'handleThinkingChange',
        value: function handleThinkingChange(e) {
            console.log(e);
            this.setState({
                thinking: e,
                fromCity: this.getCityForId(e == 'from-pr' ? this.state.pr : this.state.selectedCity),
                toCity: this.getCityForId(e == 'from-pr' ? this.state.selectedCity : this.state.pr)
            });
        }
    }, {
        key: 'handleSelectedCity',
        value: function handleSelectedCity(selected) {
            this.setState({
                selectedCity: selected,
                fromCity: this.getCityForId(this.state.thinking == 'from-pr' ? this.state.pr : selected),
                toCity: this.getCityForId(this.state.thinking == 'from-pr' ? selected : this.state.pr)
            });
            console.log('Thinking HandleSelectedCity: ' + this.state.thinking);
            console.log('Selected CityID: ' + selected);
            console.log('From CityID: ' + this.state.fromCity);
            console.log('To CityID: ' + this.state.toCity);
        }
    }, {
        key: 'handleSalaryChange',
        value: function handleSalaryChange(value) {
            this.setState({
                salary: value
            });
            console.log('ThinkingSalary: $' + value);
        }
    }, {
        key: 'getCityForId',
        value: function getCityForId(value) {
            for (var i = 0; i < this.props.locations.length; i++) {
                if (this.props.locations[i][0] == value) {
                    console.log(this.props.locations[i]);
                    return this.props.locations[i];
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Paper2.default,
                    null,
                    _react2.default.createElement(_RadioGroup2.default, { onChange: this.handleThinkingChange, 'default': this.state.thinking }),
                    _react2.default.createElement(_LocationSelectField2.default, { onSelectedCity: this.handleSelectedCity,
                        states: this.state.states,
                        cities: this.state.cities }),
                    _react2.default.createElement(_SalarySlider2.default, { onChange: this.handleSalaryChange,
                        min: 20000, max: 250000, step: 5000, defaultSalary: 50000
                    })
                ),
                _react2.default.createElement(_Comparison2.default, { salary: this.state.salary,
                    fromCity: this.state.fromCity,
                    toCity: this.state.toCity
                })
            );
        }
    }]);

    return Thinking;
}(_react2.default.Component);

exports.default = Thinking;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL1RoaW5raW5nLmpzIl0sIm5hbWVzIjpbIlRoaW5raW5nIiwicHJvcHMiLCJzdGF0ZSIsInRoaW5raW5nIiwic3RhdGVzIiwiZ2V0U3RhdGVzIiwiY2l0aWVzIiwiZ2V0Q2l0aWVzIiwic2FsYXJ5IiwiZnJvbUNpdHkiLCJ0b0NpdHkiLCJwciIsImhhbmRsZVRoaW5raW5nQ2hhbmdlIiwiYmluZCIsImhhbmRsZVNlbGVjdGVkQ2l0eSIsImhhbmRsZVNhbGFyeUNoYW5nZSIsImdldENpdHlGb3JJZCIsIm9wdGlvbnMiLCJsZW5ndGgiLCJ2YWx1ZSIsImxhYmVsIiwibG9jYXRpb25zIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJlIiwic2V0U3RhdGUiLCJzZWxlY3RlZENpdHkiLCJzZWxlY3RlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFVRixNQUFNRSxRQURQO0FBRVRDLG9CQUFRLE1BQUtDLFNBQUwsRUFGQztBQUdUQyxvQkFBUSxNQUFLQyxTQUFMLEVBSEM7QUFJVEMsb0JBQVEsS0FKQztBQUtUQyxzQkFBVSxFQUxEO0FBTVRDLG9CQUFRLEVBTkM7QUFPVEMsZ0JBQUk7QUFQSyxTQUFiO0FBU0EsY0FBS0Msb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJDLElBQTFCLE9BQTVCO0FBQ0EsY0FBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLE9BQTFCO0FBQ0EsY0FBS0Usa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JGLElBQXhCLE9BQTFCO0FBQ0EsY0FBS0csWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSCxJQUFsQixPQUFwQjtBQWRlO0FBZWxCOzs7O29DQUNXO0FBQ1IsZ0JBQUlJLFVBQVUsRUFBZDtBQUNBQSxvQkFBUUEsUUFBUUMsTUFBaEIsSUFBMEIsRUFBRUMsT0FBT0YsUUFBUUMsTUFBakIsRUFBeUJFLE9BQU8sS0FBS25CLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBaEMsRUFBMUI7QUFDQSxpQkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3JCLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJILE1BQXpDLEVBQWlESSxHQUFqRCxFQUFzRDtBQUNsRCxvQkFBSSxLQUFLckIsS0FBTCxDQUFXb0IsU0FBWCxDQUFxQkMsQ0FBckIsRUFBd0IsQ0FBeEIsS0FBOEIsS0FBS3JCLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJDLElBQUksQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBbEMsRUFBa0U7QUFDOURMLDRCQUFRQSxRQUFRQyxNQUFoQixJQUEwQixFQUFFQyxPQUFPRixRQUFRQyxNQUFqQixFQUF5QkUsT0FBTyxLQUFLbkIsS0FBTCxDQUFXb0IsU0FBWCxDQUFxQkMsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBaEMsRUFBMUI7QUFDSDtBQUNKO0FBQ0RDLG9CQUFRQyxHQUFSLENBQVlQLE9BQVo7QUFDQSxtQkFBT0EsT0FBUDtBQUNIOzs7b0NBQ1c7QUFDUixnQkFBSVgsU0FBUyxFQUFiO0FBQ0EsaUJBQUssSUFBSWdCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLckIsS0FBTCxDQUFXb0IsU0FBWCxDQUFxQkgsTUFBekMsRUFBaURJLEdBQWpELEVBQXNEO0FBQ2xEaEIsdUJBQU9nQixDQUFQLElBQVk7QUFDUkgsMkJBQU8sS0FBS2xCLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJDLENBQXJCLEVBQXdCLENBQXhCLENBREM7QUFFUnBCLDJCQUFPLEtBQUtELEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJDLENBQXJCLEVBQXdCLENBQXhCLENBRkM7QUFHUkYsMkJBQU8sS0FBS25CLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJDLENBQXJCLEVBQXdCLENBQXhCO0FBSEMsaUJBQVo7QUFLQTtBQUNIO0FBQ0QsbUJBQU9oQixNQUFQO0FBQ0g7Ozs2Q0FFb0JtQixDLEVBQUc7QUFDcEJGLG9CQUFRQyxHQUFSLENBQVlDLENBQVo7QUFDQSxpQkFBS0MsUUFBTCxDQUFlO0FBQ1h2QiwwQkFBVXNCLENBREM7QUFFWGhCLDBCQUFVLEtBQUtPLFlBQUwsQ0FBbUJTLEtBQUssU0FBTCxHQUFpQixLQUFLdkIsS0FBTCxDQUFXUyxFQUE1QixHQUFpQyxLQUFLVCxLQUFMLENBQVd5QixZQUEvRCxDQUZDO0FBR1hqQix3QkFBUSxLQUFLTSxZQUFMLENBQW1CUyxLQUFLLFNBQUwsR0FBa0IsS0FBS3ZCLEtBQUwsQ0FBV3lCLFlBQTdCLEdBQTRDLEtBQUt6QixLQUFMLENBQVdTLEVBQTFFO0FBSEcsYUFBZjtBQUtIOzs7MkNBQ2tCaUIsUSxFQUFVO0FBQ3pCLGlCQUFLRixRQUFMLENBQWM7QUFDVkMsOEJBQWNDLFFBREo7QUFFVm5CLDBCQUFVLEtBQUtPLFlBQUwsQ0FBa0IsS0FBS2QsS0FBTCxDQUFXQyxRQUFYLElBQXVCLFNBQXZCLEdBQW1DLEtBQUtELEtBQUwsQ0FBV1MsRUFBOUMsR0FBbURpQixRQUFyRSxDQUZBO0FBR1ZsQix3QkFBUSxLQUFLTSxZQUFMLENBQWtCLEtBQUtkLEtBQUwsQ0FBV0MsUUFBWCxJQUF1QixTQUF2QixHQUFvQ3lCLFFBQXBDLEdBQStDLEtBQUsxQixLQUFMLENBQVdTLEVBQTVFO0FBSEUsYUFBZDtBQUtBWSxvQkFBUUMsR0FBUixDQUFZLGtDQUFrQyxLQUFLdEIsS0FBTCxDQUFXQyxRQUF6RDtBQUNBb0Isb0JBQVFDLEdBQVIsQ0FBWSxzQkFBc0JJLFFBQWxDO0FBQ0FMLG9CQUFRQyxHQUFSLENBQVksa0JBQWtCLEtBQUt0QixLQUFMLENBQVdPLFFBQXpDO0FBQ0FjLG9CQUFRQyxHQUFSLENBQVksZ0JBQWdCLEtBQUt0QixLQUFMLENBQVdRLE1BQXZDO0FBQ0g7OzsyQ0FFa0JTLEssRUFBTztBQUN0QixpQkFBS08sUUFBTCxDQUFjO0FBQ1ZsQix3QkFBUVc7QUFERSxhQUFkO0FBR0FJLG9CQUFRQyxHQUFSLENBQVksc0JBQXNCTCxLQUFsQztBQUNIOzs7cUNBRVlBLEssRUFBTztBQUNoQixpQkFBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3JCLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJILE1BQXpDLEVBQWlESSxHQUFqRCxFQUFzRDtBQUNsRCxvQkFBSSxLQUFLckIsS0FBTCxDQUFXb0IsU0FBWCxDQUFxQkMsQ0FBckIsRUFBd0IsQ0FBeEIsS0FBOEJILEtBQWxDLEVBQXlDO0FBQ3JDSSw0QkFBUUMsR0FBUixDQUFZLEtBQUt2QixLQUFMLENBQVdvQixTQUFYLENBQXFCQyxDQUFyQixDQUFaO0FBQ0EsMkJBQU8sS0FBS3JCLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJDLENBQXJCLENBQVA7QUFDSDtBQUNKO0FBQ0o7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNBLDBFQUFvQixVQUFVLEtBQUtWLG9CQUFuQyxFQUF5RCxXQUFTLEtBQUtWLEtBQUwsQ0FBV0MsUUFBN0UsR0FEQTtBQUVBLG1GQUFnQixnQkFBZ0IsS0FBS1csa0JBQXJDO0FBQ0ksZ0NBQVEsS0FBS1osS0FBTCxDQUFXRSxNQUR2QjtBQUVJLGdDQUFRLEtBQUtGLEtBQUwsQ0FBV0ksTUFGdkIsR0FGQTtBQUtBLDRFQUFjLFVBQVUsS0FBS1Msa0JBQTdCO0FBQ0ksNkJBQUssS0FEVCxFQUNnQixLQUFLLE1BRHJCLEVBQzZCLE1BQU0sSUFEbkMsRUFDeUMsZUFBZTtBQUR4RDtBQUxBLGlCQURKO0FBVUksc0VBQVksUUFBUSxLQUFLYixLQUFMLENBQVdNLE1BQS9CO0FBQ0ksOEJBQVUsS0FBS04sS0FBTCxDQUFXTyxRQUR6QjtBQUVJLDRCQUFRLEtBQUtQLEtBQUwsQ0FBV1E7QUFGdkI7QUFWSixhQURKO0FBaUJIOzs7O0VBL0ZpQyxnQkFBTW1CLFM7O2tCQUF2QjdCLFEiLCJmaWxlIjoiVGhpbmtpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoaW5raW5nUmFkaW9Hcm91cCBmcm9tICcuL3RoaW5raW5nX2NvbXBvbmVudHMvUmFkaW9Hcm91cCc7XG5pbXBvcnQgTG9jYXRpb25TZWxlY3QgZnJvbSAnLi9Mb2NhdGlvblNlbGVjdEZpZWxkJztcbmltcG9ydCBDb21wYXJpc29uIGZyb20gJy4vQ29tcGFyaXNvbic7XG5pbXBvcnQgU2FsYXJ5U2xpZGVyIGZyb20gJy4vdGhpbmtpbmdfY29tcG9uZW50cy9TYWxhcnlTbGlkZXInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhpbmtpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRoaW5raW5nOiBwcm9wcy50aGlua2luZyxcbiAgICAgICAgICAgIHN0YXRlczogdGhpcy5nZXRTdGF0ZXMoKSxcbiAgICAgICAgICAgIGNpdGllczogdGhpcy5nZXRDaXRpZXMoKSxcbiAgICAgICAgICAgIHNhbGFyeTogNTAwMDAsXG4gICAgICAgICAgICBmcm9tQ2l0eTogJycsXG4gICAgICAgICAgICB0b0NpdHk6ICcnLFxuICAgICAgICAgICAgcHI6ICc3Mi00MTk4MC03MDAnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlVGhpbmtpbmdDaGFuZ2UgPSB0aGlzLmhhbmRsZVRoaW5raW5nQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0ZWRDaXR5ID0gdGhpcy5oYW5kbGVTZWxlY3RlZENpdHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTYWxhcnlDaGFuZ2UgPSB0aGlzLmhhbmRsZVNhbGFyeUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldENpdHlGb3JJZCA9IHRoaXMuZ2V0Q2l0eUZvcklkLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGdldFN0YXRlcygpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25zLmxlbmd0aF0gPSB7IHZhbHVlOiBvcHRpb25zLmxlbmd0aCwgbGFiZWw6IHRoaXMucHJvcHMubG9jYXRpb25zWzBdWzFdIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5wcm9wcy5sb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uc1tpXVsxXSAhPSB0aGlzLnByb3BzLmxvY2F0aW9uc1tpIC0gMV1bMV0pIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zW29wdGlvbnMubGVuZ3RoXSA9IHsgdmFsdWU6IG9wdGlvbnMubGVuZ3RoLCBsYWJlbDogdGhpcy5wcm9wcy5sb2NhdGlvbnNbaV1bMV0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGdldENpdGllcygpIHtcbiAgICAgICAgdmFyIGNpdGllcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMubG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaXRpZXNbaV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMubG9jYXRpb25zW2ldWzBdLFxuICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnByb3BzLmxvY2F0aW9uc1tpXVsxXSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5wcm9wcy5sb2NhdGlvbnNbaV1bM11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9wdGlvbnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaXRpZXM7XG4gICAgfVxuXG4gICAgaGFuZGxlVGhpbmtpbmdDaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgge1xuICAgICAgICAgICAgdGhpbmtpbmc6IGUsXG4gICAgICAgICAgICBmcm9tQ2l0eTogdGhpcy5nZXRDaXR5Rm9ySWQoIGUgPT0gJ2Zyb20tcHInID8gdGhpcy5zdGF0ZS5wciA6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5KSxcbiAgICAgICAgICAgIHRvQ2l0eTogdGhpcy5nZXRDaXR5Rm9ySWQoIGUgPT0gJ2Zyb20tcHInID8gIHRoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5IDogdGhpcy5zdGF0ZS5wcilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVNlbGVjdGVkQ2l0eShzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ2l0eTogc2VsZWN0ZWQsXG4gICAgICAgICAgICBmcm9tQ2l0eTogdGhpcy5nZXRDaXR5Rm9ySWQodGhpcy5zdGF0ZS50aGlua2luZyA9PSAnZnJvbS1wcicgPyB0aGlzLnN0YXRlLnByIDogc2VsZWN0ZWQpLFxuICAgICAgICAgICAgdG9DaXR5OiB0aGlzLmdldENpdHlGb3JJZCh0aGlzLnN0YXRlLnRoaW5raW5nID09ICdmcm9tLXByJyA/ICBzZWxlY3RlZCA6IHRoaXMuc3RhdGUucHIpXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpbmtpbmcgSGFuZGxlU2VsZWN0ZWRDaXR5OiAnICsgdGhpcy5zdGF0ZS50aGlua2luZyk7ICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIENpdHlJRDogJyArIHNlbGVjdGVkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Zyb20gQ2l0eUlEOiAnICsgdGhpcy5zdGF0ZS5mcm9tQ2l0eSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUbyBDaXR5SUQ6ICcgKyB0aGlzLnN0YXRlLnRvQ2l0eSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2FsYXJ5Q2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgICAgIHNhbGFyeTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlua2luZ1NhbGFyeTogJCcgKyB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0Q2l0eUZvcklkKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5sb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uc1tpXVswXSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubG9jYXRpb25zW2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5sb2NhdGlvbnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQYXBlcj4gXG4gICAgICAgICAgICAgICAgPFRoaW5raW5nUmFkaW9Hcm91cCBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaGlua2luZ0NoYW5nZX0gZGVmYXVsdD17dGhpcy5zdGF0ZS50aGlua2luZ30vPlxuICAgICAgICAgICAgICAgIDxMb2NhdGlvblNlbGVjdCBvblNlbGVjdGVkQ2l0eT17dGhpcy5oYW5kbGVTZWxlY3RlZENpdHl9XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcz17dGhpcy5zdGF0ZS5zdGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgIGNpdGllcz17dGhpcy5zdGF0ZS5jaXRpZXN9IC8+XG4gICAgICAgICAgICAgICAgPFNhbGFyeVNsaWRlciBvbkNoYW5nZT17dGhpcy5oYW5kbGVTYWxhcnlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MjAwMDB9IG1heD17MjUwMDAwfSBzdGVwPXs1MDAwfSBkZWZhdWx0U2FsYXJ5PXs1MDAwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPENvbXBhcmlzb24gc2FsYXJ5PXt0aGlzLnN0YXRlLnNhbGFyeX1cbiAgICAgICAgICAgICAgICAgICAgZnJvbUNpdHk9e3RoaXMuc3RhdGUuZnJvbUNpdHl9XG4gICAgICAgICAgICAgICAgICAgIHRvQ2l0eT17dGhpcy5zdGF0ZS50b0NpdHl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==