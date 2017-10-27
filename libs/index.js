'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Coli = require('./components/Coli');

var _Coli2 = _interopRequireDefault(_Coli);

var _coli_index = require('csv-loader!./coli_data/coli_index.csv');

var _coli_index2 = _interopRequireDefault(_coli_index);

var _coli_average_prices = require('csv-loader!./coli_data/coli_average_prices.csv');

var _coli_average_prices2 = _interopRequireDefault(_coli_average_prices);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_coli_index2.default);
_reactDom2.default.render(_react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(_Coli2.default, { index: _coli_index2.default, averagePrices: _coli_average_prices2.default })
), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxRQUFRQyxHQUFSO0FBQ0EsbUJBQVNDLE1BQVQsQ0FDSTtBQUFBO0FBQUE7QUFDQSxvREFBTSwyQkFBTixFQUF3Qiw0Q0FBeEI7QUFEQSxDQURKLEVBSUlDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FKSiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDb2xpIGZyb20gJy4vY29tcG9uZW50cy9Db2xpJztcbmltcG9ydCBDb2xpSW5kZXggZnJvbSAnY3N2LWxvYWRlciEuL2NvbGlfZGF0YS9jb2xpX2luZGV4LmNzdic7XG5pbXBvcnQgQ29saUF2ZXJhZ2VQcmljZXMgZnJvbSAnY3N2LWxvYWRlciEuL2NvbGlfZGF0YS9jb2xpX2F2ZXJhZ2VfcHJpY2VzLmNzdic7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5cbmNvbnNvbGUubG9nKENvbGlJbmRleCk7XG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPE11aVRoZW1lUHJvdmlkZXI+XG4gICAgPENvbGkgaW5kZXg9e0NvbGlJbmRleH0gYXZlcmFnZVByaWNlcz17Q29saUF2ZXJhZ2VQcmljZXN9IC8+XG4gICAgPC9NdWlUaGVtZVByb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7Il19