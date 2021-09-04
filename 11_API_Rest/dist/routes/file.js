"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _File = require('../controllers/File'); var _File2 = _interopRequireDefault(_File);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _File2.default.store);

exports. default = router;
