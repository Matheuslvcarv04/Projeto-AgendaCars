# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\portlets\\browser/templates/column.pt'

__tokens = {27: ('options/portlets', 1, 27), 188: ('string:portletwrapper-${portlet/hash}', 5, 12), 252: (' portlet/has', 6, 25), 106: ("python:view.safe_render(portlet['renderer'])", 3, 30)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696162010000 = {}
_static_1696162766608 = __compile_zt_expr
_static_1696162763216 = __C2ZContextWrapper
_static_1696162772944 = {'class': 'portletWrapper', 'id': 'string:portletwrapper-${portlet/hash}', 'data-portlethash': 'portlet/hash'}
_static_1696141407312 = __compile_zt_expr
_static_1696141396560 = __C2ZContextWrapper
_static_1696162901456 = __compile_zt_expr
_static_1696162900176 = __C2ZContextWrapper
_static_1696163285264 = __compile_zt_expr
_static_1696163289936 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162830096
            __attrs_1696162830096 = _static_1696162010000
            __backup_portlet_1696123526528 = get('portlet', __marker)
            # <Value 'options/portlets' (1:27)> -> __iterator
            __token = 27
            try:
                __zt_tmp = __attrs_1696162830096
            except NameError:
                __zt_tmp = None
            __iterator = _static_1696162766608('path', 'options/portlets', econtext=econtext)(_static_1696162763216(econtext, __zt_tmp))
            __iterator, ____index_1696162839120 = getname('repeat')('portlet', __iterator)
            econtext['portlet'] = None
            for __item in __iterator:
                econtext['portlet'] = __item
                __append('\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='data-portlethash', kind=None)], values=[Constant(value='portletWrapper', kind=None), ..., Constant(value='portlet/hash', kind=None)]) name=None at 18aeb2efed0> -> __attrs_1696162826128
                __attrs_1696162826128 = _static_1696162772944
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="portletWrapper"')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162827664
                __default_1696162827664 = _DEFAULT_MARKER
                # <Substitution 'string:portletwrapper-${portlet/hash}' (5:12)> -> __attr_id
                __token = 188
                try:
                    __zt_tmp = __attrs_1696162826128
                except NameError:
                    __zt_tmp = None
                __attr_id = _static_1696141407312('string', 'portletwrapper-${portlet/hash}', econtext=econtext)(_static_1696141396560(econtext, __zt_tmp))
                __attr_id = __quote(__attr_id, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_id is not None:
                    __append(' id="%s"' % __attr_id)
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162835472
                __default_1696162835472 = _DEFAULT_MARKER
                # <Substitution 'portlet/hash' (6:25)> -> __attr_data_portlethash
                __token = 252
                try:
                    __zt_tmp = __attrs_1696162826128
                except NameError:
                    __zt_tmp = None
                __attr_data_portlethash = _static_1696162901456('path', 'portlet/hash', econtext=econtext)(_static_1696162900176(econtext, __zt_tmp))
                __attr_data_portlethash = __quote(__attr_data_portlethash, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_data_portlethash is not None:
                    __append(' data-portlethash="%s"' % __attr_data_portlethash)
                __append(' >')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162825168
                __default_1696162825168 = _DEFAULT_MARKER
                # <Value "python:view.safe_render(portlet['renderer'])" (3:30)> -> __cache_1696162825488
                __token = 106
                try:
                    __zt_tmp = __attrs_1696162826128
                except NameError:
                    __zt_tmp = None
                __cache_1696162825488 = _static_1696163285264('python', "view.safe_render(portlet['renderer'])", econtext=econtext)(_static_1696163289936(econtext, __zt_tmp))
                # <BinOp left=<Value "python:view.safe_render(portlet['renderer'])" (3:30)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18ae767d6d0> -> __condition
                __expression = __cache_1696162825488
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_1696162825488
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('</div>\n')
                ____index_1696162839120 -= 1
                if ____index_1696162839120 > 0:
                    __append('')
            if __backup_portlet_1696123526528 is __marker:
                del econtext['portlet']
            else:
                econtext['portlet'] = __backup_portlet_1696123526528
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}