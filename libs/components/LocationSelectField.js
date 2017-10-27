'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
var LocationSelectField = function (_React$Component) {
  _inherits(LocationSelectField, _React$Component);

  function LocationSelectField(props) {
    _classCallCheck(this, LocationSelectField);

    var _this = _possibleConstructorReturn(this, (LocationSelectField.__proto__ || Object.getPrototypeOf(LocationSelectField)).call(this, props));

    _this.state = { state: 0, city: 0,
      cities: []
    };
    _this.handleStatesChange = _this.handleStatesChange.bind(_this);
    _this.handleCitiesChange = _this.handleCitiesChange.bind(_this);
    return _this;
  }

  _createClass(LocationSelectField, [{
    key: 'handleStatesChange',
    value: function handleStatesChange(event, index, value) {
      this.setState({
        state: value,
        city: 0,
        cities: this.getCitiesForState(value)
      });
    }
  }, {
    key: 'getCitiesForState',
    value: function getCitiesForState(value) {
      var cities = [];
      for (var i = 0; i < this.props.cities.length; i++) {
        if (this.props.cities[i].state == this.props.states[value].label) {
          console.log(this.props.cities[i].value + '==' + this.props.states[value].label);
          cities[cities.length] = { value: cities.length, rowId: this.props.cities[i].value, label: this.props.cities[i].label };
        }
      }
      return cities;
    }
  }, {
    key: 'handleCitiesChange',
    value: function handleCitiesChange(event, index, value) {
      console.log('Selected City: ID=' + this.state.cities[value].value + ' Name=' + this.state.cities[value].label);
      this.props.onSelectedCity(this.state.cities[value].rowId);
      this.setState({ city: value });
    }
  }, {
    key: 'menuItems',
    value: function menuItems(options) {
      return options.map(function (option) {
        return _react2.default.createElement(_MenuItem2.default, {
          key: option.value,
          value: option.value,
          primaryText: option.label
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _SelectField2.default,
          {
            hintText: 'Select a state',
            value: this.state.state,
            onChange: this.handleStatesChange,
            autoWidth: true },
          this.menuItems(this.props.states)
        ),
        _react2.default.createElement(
          _SelectField2.default,
          {
            hintText: 'Select a city',
            value: this.state.city,
            onChange: this.handleCitiesChange,
            autoWidth: true },
          this.menuItems(this.state.cities)
        )
      );
    }
  }]);

  return LocationSelectField;
}(_react2.default.Component);

exports.default = LocationSelectField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzL0xvY2F0aW9uU2VsZWN0RmllbGQuanMiXSwibmFtZXMiOlsiTG9jYXRpb25TZWxlY3RGaWVsZCIsInByb3BzIiwic3RhdGUiLCJjaXR5IiwiY2l0aWVzIiwiaGFuZGxlU3RhdGVzQ2hhbmdlIiwiYmluZCIsImhhbmRsZUNpdGllc0NoYW5nZSIsImV2ZW50IiwiaW5kZXgiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZ2V0Q2l0aWVzRm9yU3RhdGUiLCJpIiwibGVuZ3RoIiwic3RhdGVzIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwicm93SWQiLCJvblNlbGVjdGVkQ2l0eSIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJtZW51SXRlbXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxtQjs7O0FBQ25CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFFQSxPQUFPLENBQVQsRUFBWUMsTUFBTSxDQUFsQjtBQUNYQyxjQUFRO0FBREcsS0FBYjtBQUdBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUExQjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQU5pQjtBQU9sQjs7Ozt1Q0FFa0JFLEssRUFBT0MsSyxFQUFPQyxLLEVBQU87QUFDdEMsV0FBS0MsUUFBTCxDQUFjO0FBQ1pULGVBQU9RLEtBREs7QUFFWlAsY0FBTSxDQUZNO0FBR1pDLGdCQUFRLEtBQUtRLGlCQUFMLENBQXVCRixLQUF2QjtBQUhJLE9BQWQ7QUFLRDs7O3NDQUVpQkEsSyxFQUFPO0FBQ3ZCLFVBQUlOLFNBQVMsRUFBYjtBQUNBLFdBQUssSUFBSVMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtaLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlUsTUFBdEMsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFlBQUksS0FBS1osS0FBTCxDQUFXRyxNQUFYLENBQWtCUyxDQUFsQixFQUFxQlgsS0FBckIsSUFBOEIsS0FBS0QsS0FBTCxDQUFXYyxNQUFYLENBQWtCTCxLQUFsQixFQUF5Qk0sS0FBM0QsRUFBbUU7QUFDakVDLGtCQUFRQyxHQUFSLENBQVksS0FBS2pCLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlMsQ0FBbEIsRUFBcUJILEtBQXJCLEdBQTZCLElBQTdCLEdBQW9DLEtBQUtULEtBQUwsQ0FBV2MsTUFBWCxDQUFrQkwsS0FBbEIsRUFBeUJNLEtBQXpFO0FBQ0FaLGlCQUFPQSxPQUFPVSxNQUFkLElBQXdCLEVBQUVKLE9BQU9OLE9BQU9VLE1BQWhCLEVBQXdCSyxPQUFPLEtBQUtsQixLQUFMLENBQVdHLE1BQVgsQ0FBa0JTLENBQWxCLEVBQXFCSCxLQUFwRCxFQUEyRE0sT0FBTyxLQUFLZixLQUFMLENBQVdHLE1BQVgsQ0FBa0JTLENBQWxCLEVBQXFCRyxLQUF2RixFQUF4QjtBQUNEO0FBQ0Y7QUFDRCxhQUFPWixNQUFQO0FBQ0Q7Ozt1Q0FFa0JJLEssRUFBT0MsSyxFQUFPQyxLLEVBQU87QUFDdENPLGNBQVFDLEdBQVIsQ0FBWSx1QkFBdUIsS0FBS2hCLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQk0sS0FBbEIsRUFBeUJBLEtBQWhELEdBQXdELFFBQXhELEdBQW1FLEtBQUtSLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQk0sS0FBbEIsRUFBeUJNLEtBQXhHO0FBQ0EsV0FBS2YsS0FBTCxDQUFXbUIsY0FBWCxDQUEyQixLQUFLbEIsS0FBTCxDQUFXRSxNQUFYLENBQWtCTSxLQUFsQixFQUF5QlMsS0FBcEQ7QUFDQSxXQUFLUixRQUFMLENBQWUsRUFBQ1IsTUFBTU8sS0FBUCxFQUFmO0FBQ0Q7Ozs4QkFHU1csTyxFQUFTO0FBQ2pCLGFBQU9BLFFBQVFDLEdBQVIsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsZUFDakI7QUFDRSxlQUFLQSxPQUFPYixLQURkO0FBRUUsaUJBQU9hLE9BQU9iLEtBRmhCO0FBR0UsdUJBQWFhLE9BQU9QO0FBSHRCLFVBRGlCO0FBQUEsT0FBWixDQUFQO0FBT0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usc0JBQVMsZ0JBRFg7QUFFRSxtQkFBTyxLQUFLZCxLQUFMLENBQVdBLEtBRnBCO0FBR0Usc0JBQVUsS0FBS0csa0JBSGpCO0FBSUUsdUJBQVcsSUFKYjtBQUtHLGVBQUttQixTQUFMLENBQWUsS0FBS3ZCLEtBQUwsQ0FBV2MsTUFBMUI7QUFMSCxTQURGO0FBUUU7QUFBQTtBQUFBO0FBQ0Usc0JBQVMsZUFEWDtBQUVFLG1CQUFPLEtBQUtiLEtBQUwsQ0FBV0MsSUFGcEI7QUFHRSxzQkFBVSxLQUFLSSxrQkFIakI7QUFJRSx1QkFBVyxJQUpiO0FBS0csZUFBS2lCLFNBQUwsQ0FBZSxLQUFLdEIsS0FBTCxDQUFXRSxNQUExQjtBQUxIO0FBUkYsT0FERjtBQWtCRDs7OztFQWpFOEMsZ0JBQU1xQixTOztrQkFBbEN6QixtQiIsImZpbGUiOiJMb2NhdGlvblNlbGVjdEZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9TZWxlY3RGaWVsZCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuXG4vKipcbiAqIFRoZSByZW5kZXJpbmcgb2Ygc2VsZWN0ZWQgaXRlbXMgY2FuIGJlIGN1c3RvbWl6ZWQgYnkgcHJvdmlkaW5nIGEgYHNlbGVjdGlvblJlbmRlcmVyYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25TZWxlY3RGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHN0YXRlOiAwLCBjaXR5OiAwICxcbiAgICAgIGNpdGllczogW11cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3RhdGVzQ2hhbmdlID0gdGhpcy5oYW5kbGVTdGF0ZXNDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNpdGllc0NoYW5nZSA9IHRoaXMuaGFuZGxlQ2l0aWVzQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdGF0ZXNDaGFuZ2UoZXZlbnQsIGluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhdGU6IHZhbHVlLFxuICAgICAgY2l0eTogMCxcbiAgICAgIGNpdGllczogdGhpcy5nZXRDaXRpZXNGb3JTdGF0ZSh2YWx1ZSlcbiAgICB9KTtcbiAgfVxuXG4gIGdldENpdGllc0ZvclN0YXRlKHZhbHVlKSB7XG4gICAgdmFyIGNpdGllcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jaXRpZXMubGVuZ3RoOyBpKyspIHsgICAgICAgIFxuICAgICAgaWYgKHRoaXMucHJvcHMuY2l0aWVzW2ldLnN0YXRlID09IHRoaXMucHJvcHMuc3RhdGVzW3ZhbHVlXS5sYWJlbCApIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jaXRpZXNbaV0udmFsdWUgKyAnPT0nICsgdGhpcy5wcm9wcy5zdGF0ZXNbdmFsdWVdLmxhYmVsKTtcbiAgICAgICAgY2l0aWVzW2NpdGllcy5sZW5ndGhdID0geyB2YWx1ZTogY2l0aWVzLmxlbmd0aCwgcm93SWQ6IHRoaXMucHJvcHMuY2l0aWVzW2ldLnZhbHVlLCBsYWJlbDogdGhpcy5wcm9wcy5jaXRpZXNbaV0ubGFiZWx9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2l0aWVzO1xuICB9XG5cbiAgaGFuZGxlQ2l0aWVzQ2hhbmdlKGV2ZW50LCBpbmRleCwgdmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgQ2l0eTogSUQ9JyArIHRoaXMuc3RhdGUuY2l0aWVzW3ZhbHVlXS52YWx1ZSArICcgTmFtZT0nICsgdGhpcy5zdGF0ZS5jaXRpZXNbdmFsdWVdLmxhYmVsKTtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWRDaXR5KCB0aGlzLnN0YXRlLmNpdGllc1t2YWx1ZV0ucm93SWQgKTtcbiAgICB0aGlzLnNldFN0YXRlKCB7Y2l0eTogdmFsdWV9ICk7XG4gIH1cblxuXG4gIG1lbnVJdGVtcyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgIDxNZW51SXRlbVxuICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgdmFsdWU9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgcHJpbWFyeVRleHQ9e29wdGlvbi5sYWJlbH1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgIGhpbnRUZXh0PVwiU2VsZWN0IGEgc3RhdGVcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXRlc0NoYW5nZX1cbiAgICAgICAgICBhdXRvV2lkdGg9e3RydWV9ID5cbiAgICAgICAgICB7dGhpcy5tZW51SXRlbXModGhpcy5wcm9wcy5zdGF0ZXMpfVxuICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICA8U2VsZWN0RmllbGRcbiAgICAgICAgICBoaW50VGV4dD1cIlNlbGVjdCBhIGNpdHlcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2l0aWVzQ2hhbmdlfVxuICAgICAgICAgIGF1dG9XaWR0aD17dHJ1ZX0gPlxuICAgICAgICAgIHt0aGlzLm1lbnVJdGVtcyh0aGlzLnN0YXRlLmNpdGllcyl9XG4gICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19