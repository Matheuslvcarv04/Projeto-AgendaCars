# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\Products\\CMFPlone\\browser\\templates\\description.pt'

__tokens = {40: ('context/Description', 1, 40), 102: ('description', 1, 102), 74: ('description', 1, 74)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696163295056 = {'class': 'lead'}
_static_1696162786640 = __compile_zt_expr
_static_1696164505680 = __C2ZContextWrapper
_static_1696164458704 = __compile_zt_expr
_static_1696164446352 = __C2ZContextWrapper
_static_1696162878672 = __compile_zt_expr
_static_1696162875728 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='lead', kind=None)]) name=None at 18aeb2ec810> -> __attrs_1696162727568
            __attrs_1696162727568 = _static_1696163295056
            __backup_description_1696136062976 = get('description', __marker)
            # <Value 'context/Description' (1:40)> -> __value
            __token = 40
            try:
                __zt_tmp = __attrs_1696162727568
            except NameError:
                __zt_tmp = None
            __value = _static_1696162786640('path', 'context/Description', econtext=econtext)(_static_1696164505680(econtext, __zt_tmp))
            econtext['description'] = __value
            # <Value 'description' (1:102)> -> __condition
            __token = 102
            try:
                __zt_tmp = __attrs_1696162727568
            except NameError:
                __zt_tmp = None
            __condition = _static_1696164458704('path', 'description', econtext=econtext)(_static_1696164446352(econtext, __zt_tmp))
            if __condition:
                # <p ... (0:0)
                # --------------------------------------------------------
                __append('<p class="lead">')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162825424
                __default_1696162825424 = _DEFAULT_MARKER
                # <Value 'description' (1:74)> -> __cache_1696162828496
                __token = 74
                try:
                    __zt_tmp = __attrs_1696162727568
                except NameError:
                    __zt_tmp = None
                __cache_1696162828496 = _static_1696162878672('path', 'description', econtext=econtext)(_static_1696162875728(econtext, __zt_tmp))
                # <BinOp left=<Value 'description' (1:74)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb2ec790> -> __condition
                __expression = __cache_1696162828496
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    __append('\n  Description\n')
                else:
                    __content = __cache_1696162828496
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</p>')
            if __backup_description_1696136062976 is __marker:
                del econtext['description']
            else:
                econtext['description'] = __backup_description_1696136062976
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}