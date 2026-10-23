# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\portlets\\portlets\\classic.pt'

__tokens = {47: ('view/use_macro', 2, 23), 91: (' view/path_expressio', 3, 28), 153: ('use_macro', 6, 24), 199: ('python:path(path_expression)', 7, 34), 199: ('python:path(path_expression)', 7, 34), 272: ('not:use_macro', 10, 24), 320: ('python:path(path_expression)', 11, 32)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696164079760 = {}
_static_1696162674128 = __compile_zt_expr
_static_1696162667216 = __C2ZContextWrapper
_static_1696163516560 = __compile_zt_expr
_static_1696163521296 = __C2ZContextWrapper
_static_1696071503312 = {}
_static_1696162762384 = __compile_zt_expr
_static_1696099821328 = __C2ZContextWrapper
_static_1696163294864 = {}
_static_1696163290768 = 'python:path(path_expression)'
_static_1696162134736 = __compile_zt_expr
_static_1696163462672 = __C2ZContextWrapper
_static_1696163585552 = {}
_static_1696162311184 = __compile_zt_expr
_static_1696163189904 = __C2ZContextWrapper
_static_1696163765328 = {}
_static_1696163585808 = __compile_zt_expr
_static_1696162965392 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162830480
            __attrs_1696162830480 = _static_1696164079760
            __backup_use_macro_1696093151872 = get('use_macro', __marker)
            # <Value 'view/use_macro' (2:23)> -> __value
            __token = 47
            try:
                __zt_tmp = __attrs_1696162830480
            except NameError:
                __zt_tmp = None
            __value = _static_1696162674128('path', 'view/use_macro', econtext=econtext)(_static_1696162667216(econtext, __zt_tmp))
            econtext['use_macro'] = __value
            __backup_path_expression_1696093151360 = get('path_expression', __marker)
            # <Value 'view/path_expression' (3:28)> -> __value
            __token = 91
            try:
                __zt_tmp = __attrs_1696162830480
            except NameError:
                __zt_tmp = None
            __value = _static_1696163516560('path', 'view/path_expression', econtext=econtext)(_static_1696163521296(econtext, __zt_tmp))
            econtext['path_expression'] = __value
            __append('\n\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162836816
            __attrs_1696162836816 = _static_1696071503312
            # <Value 'use_macro' (6:24)> -> __condition
            __token = 153
            try:
                __zt_tmp = __attrs_1696162836816
            except NameError:
                __zt_tmp = None
            __condition = _static_1696162762384('path', 'use_macro', econtext=econtext)(_static_1696099821328(econtext, __zt_tmp))
            if __condition:
                __append('\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162838928
                __attrs_1696162838928 = _static_1696163294864
                __backup_macroname_1696162903040 = get('macroname', __marker)
                # <Static value=Constant(value='python:path(path_expression)', kind=None) name=None at 18aeb2edf90> -> __value
                __value = _static_1696163290768
                econtext['macroname'] = __value
                # <Value 'python:path(path_expression)' (7:34)> -> __macro
                __token = 199
                try:
                    __zt_tmp = __attrs_1696162838928
                except NameError:
                    __zt_tmp = None
                __macro = _static_1696162134736('python', 'path(path_expression)', econtext=econtext)(_static_1696163462672(econtext, __zt_tmp))
                __token = 199
                __m = __macro.include
                __m(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
                econtext.update(rcontext)
                if __backup_macroname_1696162903040 is __marker:
                    del econtext['macroname']
                else:
                    econtext['macroname'] = __backup_macroname_1696162903040
                __append('\n  ')
            __append('\n\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162830096
            __attrs_1696162830096 = _static_1696163585552
            # <Value 'not:use_macro' (10:24)> -> __condition
            __token = 272
            try:
                __zt_tmp = __attrs_1696162830096
            except NameError:
                __zt_tmp = None
            __condition = _static_1696162311184('not', 'use_macro', econtext=econtext)(_static_1696163189904(econtext, __zt_tmp))
            if __condition:
                __append('\n    ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162829584
                __attrs_1696162829584 = _static_1696163765328
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162827664
                __default_1696162827664 = _DEFAULT_MARKER
                # <Value 'python:path(path_expression)' (11:32)> -> __cache_1696162831248
                __token = 320
                try:
                    __zt_tmp = __attrs_1696162829584
                except NameError:
                    __zt_tmp = None
                __cache_1696162831248 = _static_1696163585808('python', 'path(path_expression)', econtext=econtext)(_static_1696162965392(econtext, __zt_tmp))
                # <BinOp left=<Value 'python:path(path_expression)' (11:32)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb2eec50> -> __condition
                __expression = __cache_1696162831248
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div></div>')
                else:
                    __content = __cache_1696162831248
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('\n  ')
            __append('\n\n')
            if __backup_path_expression_1696093151360 is __marker:
                del econtext['path_expression']
            else:
                econtext['path_expression'] = __backup_path_expression_1696093151360
            if __backup_use_macro_1696093151872 is __marker:
                del econtext['use_macro']
            else:
                econtext['use_macro'] = __backup_use_macro_1696093151872
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}