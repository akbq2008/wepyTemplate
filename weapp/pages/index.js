"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _index = require('../api/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    text: '首页'
  },
  methods: {
    getData: function getData() {
      console.log(1221); // searchValue({ wd: '百度' }).then(res => {
      //     console.log(res);
      // })
    },
    handleClick: function handleClick() {
      console.log(13);
    }
  },
  onLoad: function onLoad() {
    this.getData();
  }
}, {info: {"components":{"wepy-list":{"path":"..\\components\\wepy-list"}},"on":{}}, handlers: {'4-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} });