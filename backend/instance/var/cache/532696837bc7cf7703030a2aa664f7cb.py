# -*- coding: utf-8 -*-
__filename = 'login_form'

__tokens = {166: ('string:${here/absolute_url}/login', 11, 33), 291: ('request/came_from | string:', 14, 35)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696093778768 = {}
_static_1696067754640 = {}
_static_1696068148624 = {}
_static_1696032173776 = {}
_static_1696032171600 = {}
_static_1696067221456 = {'method': 'post', 'action': ''}
_static_1696094580240 = __compile_zt_expr
_static_1696094571600 = __C2ZContextWrapper
_static_1696127281936 = {'type': 'hidden', 'name': 'came_from', 'value': ''}
_static_1696095060048 = __compile_zt_expr
_static_1696124818064 = __C2ZContextWrapper
_static_1696124822288 = {'cellpadding': '2'}
_static_1696125899856 = {}
_static_1696125905232 = {}
_static_1696095328976 = {}
_static_1696124618960 = {}
_static_1696127283152 = {'type': 'text', 'name': '__ac_name', 'size': '30'}
_static_1696124820944 = {}
_static_1696125905552 = {}
_static_1696126272912 = {}
_static_1696126273168 = {}
_static_1696126278544 = {'type': 'password', 'name': '__ac_password', 'size': '30'}
_static_1696126274768 = {}
_static_1696124951312 = {'colspan': '2'}
_static_1696126895184 = {}
_static_1696126898000 = {'type': 'submit', 'value': ' Log In '}
import re
import functools
from itertools import chain as __chain
from sys import intern
__default = intern('__default__')
__marker = object()
g_re_amp = re.compile('&(?!([A-Za-z]+|#[0-9]+);)')
g_re_needs_escape = re.compile('[&<>\\"\\\']').search
__re_whitespace = functools.partial(re.compile('\\s+').sub, ' ')

def initialize(modules, nothing, tales, zope_version_6_2_0_):

    def render(__stream, econtext, rcontext, __i18n_domain=None, __i18n_context=None, target_language=None):
        __append = __stream.append
        __re_amp = g_re_amp
        __token = None
        __re_needs_escape = g_re_needs_escape

        def __convert(target):
            if target is None:
                return
            __tt = type(target)
            if __tt is bytes:
                target = decode(target)
            elif __tt is not str:
                if __tt is int or __tt is float:
                    target = str(target)
                else:
                    __markup = getattr(target, '__html__', None)
                    if __markup is None:
                        __converted = translate(target, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                        target = str(target) if target is __converted else __converted
                    else:
                        target = __markup()
            return target

        def __quote(target, quote, quote_entity, default, default_marker):
            if target is None:
                return
            if target is default_marker:
                return default
            __tt = type(target)
            if __tt is bytes:
                target = decode(target)
            elif __tt is not str:
                if __tt is int or __tt is float:
                    return str(target)
                __markup = getattr(target, '__html__', None)
                if __markup is None:
                    __converted = translate(target, domain=__i18n_domain, context=__i18n_context, target_language=target_language)
                    target = str(target) if target is __converted else __converted
                else:
                    return __markup()
            if target is not None:
                try:
                    escape = __re_needs_escape(target) is not None
                except TypeError:
                    pass
                else:
                    if escape:
                        if '&' in target:
                            target = target.replace('&', '&amp;')
                        if '<' in target:
                            target = target.replace('<', '&lt;')
                        if '>' in target:
                            target = target.replace('>', '&gt;')
                        if quote is not None and quote in target:
                            target = target.replace(quote, quote_entity)
            return target
        translate = econtext['__translate']
        decode = econtext['__decode']
        on_error_handler = econtext['__on_error_handler']
        try:
            getname = econtext.get_name
            get = econtext.get
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696095322192
            __attrs_1696095322192 = _static_1696093778768
            # <html ... (0:0)
            # --------------------------------------------------------
            __append('<html>\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696093666704
            __attrs_1696093666704 = _static_1696067754640
            # <head ... (0:0)
            # --------------------------------------------------------
            __append('<head>\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696093664272
            __attrs_1696093664272 = _static_1696068148624
            # <title ... (0:0)
            # --------------------------------------------------------
            __append('<title> Login Form </title>\n  </head>\n\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696093662096
            __attrs_1696093662096 = _static_1696032173776
            # <body ... (0:0)
            # --------------------------------------------------------
            __append('<body>\n\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696093661136
            __attrs_1696093661136 = _static_1696032171600
            # <h3 ... (0:0)
            # --------------------------------------------------------
            __append('<h3> Please log in </h3>\n\n    ')
            # <Static value=Dict(keys=[Constant(value='method', kind=None), Constant(value='action', kind=None)], values=[Constant(value='post', kind=None), Constant(value='', kind=None)]) name=None at 18ae70f5e50> -> __attrs_1696093657168
            __attrs_1696093657168 = _static_1696067221456
            # <form ... (0:0)
            # --------------------------------------------------------
            __append('<form method="post"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696097011920
            __default_1696097011920 = _DEFAULT_MARKER
            # <Substitution 'string:${here/absolute_url}/login' (11:33)> -> __attr_action
            __token = 166
            try:
                __zt_tmp = __attrs_1696093657168
            except NameError:
                __zt_tmp = None
            __attr_action = _static_1696094580240('string', '${here/absolute_url}/login', econtext=econtext)(_static_1696094571600(econtext, __zt_tmp))
            __attr_action = __quote(__attr_action, '"', '&quot;', '', _DEFAULT_MARKER)
            if __attr_action is not None:
                __append(' action="%s"' % __attr_action)
            __append('>\n\n      ')
            # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='hidden', kind=None), ..., Constant(value='', kind=None)]) name=None at 18ae70f4e50> -> __attrs_1696067604240
            __attrs_1696067604240 = _static_1696127281936
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input type="hidden" name="came_from"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696093651984
            __default_1696093651984 = _DEFAULT_MARKER
            # <Substitution 'request/came_from | string:' (14:35)> -> __attr_value
            __token = 291
            try:
                __zt_tmp = __attrs_1696067604240
            except NameError:
                __zt_tmp = None
            __attr_value = _static_1696095060048('path', 'request/came_from | string:', econtext=econtext)(_static_1696124818064(econtext, __zt_tmp))
            __attr_value = __quote(__attr_value, '"', '&quot;', '', _DEFAULT_MARKER)
            if __attr_value is not None:
                __append(' value="%s"' % __attr_value)
            __append('/>\n      ')
            # <Static value=Dict(keys=[Constant(value='cellpadding', kind=None)], values=[Constant(value='2', kind=None)]) name=None at 18ae5096590> -> __attrs_1696059716496
            __attrs_1696059716496 = _static_1696124822288
            # <table ... (0:0)
            # --------------------------------------------------------
            __append('<table cellpadding="2">\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696060947024
            __attrs_1696060947024 = _static_1696125899856
            # <tr ... (0:0)
            # --------------------------------------------------------
            __append('<tr>\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696060941968
            __attrs_1696060941968 = _static_1696125905232
            # <td ... (0:0)
            # --------------------------------------------------------
            __append('<td>')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696060937360
            __attrs_1696060937360 = _static_1696095328976
            # <b ... (0:0)
            # --------------------------------------------------------
            __append('<b>Login:</b> </td>\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696093503056
            __attrs_1696093503056 = _static_1696124618960
            # <td ... (0:0)
            # --------------------------------------------------------
            __append('<td>')
            # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='size', kind=None)], values=[Constant(value='text', kind=None), ..., Constant(value='30', kind=None)]) name=None at 18ae735a3d0> -> __attrs_1696094391440
            __attrs_1696094391440 = _static_1696127283152
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input type="text" name="__ac_name" size="30" /></td>\n        </tr>\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696094391760
            __attrs_1696094391760 = _static_1696124820944
            # <tr ... (0:0)
            # --------------------------------------------------------
            __append('<tr>\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696094390608
            __attrs_1696094390608 = _static_1696125905552
            # <td ... (0:0)
            # --------------------------------------------------------
            __append('<td>')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696094394896
            __attrs_1696094394896 = _static_1696126272912
            # <b ... (0:0)
            # --------------------------------------------------------
            __append('<b>Password:</b></td>\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696094400208
            __attrs_1696094400208 = _static_1696126273168
            # <td ... (0:0)
            # --------------------------------------------------------
            __append('<td>')
            # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='size', kind=None)], values=[Constant(value='password', kind=None), ..., Constant(value='30', kind=None)]) name=None at 18ae71ab5d0> -> __attrs_1696093212624
            __attrs_1696093212624 = _static_1696126278544
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input type="password" name="__ac_password" size="30" /></td>\n        </tr>\n        ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696093215248
            __attrs_1696093215248 = _static_1696126274768
            # <tr ... (0:0)
            # --------------------------------------------------------
            __append('<tr>\n          ')
            # <Static value=Dict(keys=[Constant(value='colspan', kind=None)], values=[Constant(value='2', kind=None)]) name=None at 18ae767d6d0> -> __attrs_1696095026512
            __attrs_1696095026512 = _static_1696124951312
            # <td ... (0:0)
            # --------------------------------------------------------
            __append('<td colspan="2">\n            ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696062545808
            __attrs_1696062545808 = _static_1696126895184
            # <br ... (0:0)
            # --------------------------------------------------------
            __append('<br />\n            ')
            # <Static value=Dict(keys=[Constant(value='type', kind=None), Constant(value='value', kind=None)], values=[Constant(value='submit', kind=None), Constant(value=' Log In ', kind=None)]) name=None at 18ae7091610> -> __attrs_1696094272976
            __attrs_1696094272976 = _static_1696126898000
            # <input ... (0:0)
            # --------------------------------------------------------
            __append('<input type="submit" value=" Log In " />\n          </td>\n        </tr>\n      </table>\n\n    </form>\n\n  </body>\n\n</html>')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}