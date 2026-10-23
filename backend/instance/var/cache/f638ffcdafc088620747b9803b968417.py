# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\dublin_core.pt'

__tokens = {25: ('view/metatags', 1, 25), 76: ('python:keyval[0]', 3, 13), 109: (' python:keyval[1', 4, 15)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696094745424 = {'name': 'python:keyval[0]', 'content': 'python:keyval[1]'}
_static_1696162742416 = __compile_zt_expr
_static_1696163348240 = __C2ZContextWrapper
_static_1696099364944 = __compile_zt_expr
_static_1696094338128 = __C2ZContextWrapper
_static_1696162823888 = __compile_zt_expr
_static_1696162813072 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='name', kind=None), Constant(value='content', kind=None)], values=[Constant(value='python:keyval[0]', kind=None), Constant(value='python:keyval[1]', kind=None)]) name=None at 18ae8fc1e10> -> __attrs_1696125948112
            __attrs_1696125948112 = _static_1696094745424
            __backup_keyval_1696163180096 = get('keyval', __marker)
            # <Value 'view/metatags' (1:25)> -> __iterator
            __token = 25
            try:
                __zt_tmp = __attrs_1696125948112
            except NameError:
                __zt_tmp = None
            __iterator = _static_1696162742416('path', 'view/metatags', econtext=econtext)(_static_1696163348240(econtext, __zt_tmp))
            __iterator, ____index_1696125950096 = getname('repeat')('keyval', __iterator)
            econtext['keyval'] = None
            for __item in __iterator:
                econtext['keyval'] = __item
                # <meta ... (0:0)
                # --------------------------------------------------------
                __append('<meta')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696125955344
                __default_1696125955344 = _DEFAULT_MARKER
                # <Substitution 'python:keyval[0]' (3:13)> -> __attr_name
                __token = 76
                try:
                    __zt_tmp = __attrs_1696125948112
                except NameError:
                    __zt_tmp = None
                __attr_name = _static_1696099364944('python', 'keyval[0]', econtext=econtext)(_static_1696094338128(econtext, __zt_tmp))
                __attr_name = __quote(__attr_name, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_name is not None:
                    __append(' name="%s"' % __attr_name)
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696125949328
                __default_1696125949328 = _DEFAULT_MARKER
                # <Substitution 'python:keyval[1]' (4:15)> -> __attr_content
                __token = 109
                try:
                    __zt_tmp = __attrs_1696125948112
                except NameError:
                    __zt_tmp = None
                __attr_content = _static_1696162823888('python', 'keyval[1]', econtext=econtext)(_static_1696162813072(econtext, __zt_tmp))
                __attr_content = __quote(__attr_content, '"', '&quot;', None, _DEFAULT_MARKER)
                if __attr_content is not None:
                    __append(' content="%s"' % __attr_content)
                __append(' />')
                ____index_1696125950096 -= 1
                if ____index_1696125950096 > 0:
                    __append('\n')
            if __backup_keyval_1696163180096 is __marker:
                del econtext['keyval']
            else:
                econtext['keyval'] = __backup_keyval_1696163180096
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}