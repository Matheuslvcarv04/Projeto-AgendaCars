# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\document_rights.pt'

__tokens = {97: ('context/Rights', 4, 18), 148: ('rights', 6, 24), 324: ('rights', 16, 22)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696164507216 = {'class': 'text-muted', 'id': 'section-rights'}
_static_1696164454800 = __compile_zt_expr
_static_1696162132368 = __C2ZContextWrapper
_static_1696162780176 = __compile_zt_expr
_static_1696162777552 = __C2ZContextWrapper
_static_1696162784656 = {'class': 'section-heading'}
_static_1696164052944 = {}
_static_1696164608720 = __compile_zt_expr
_static_1696164594640 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='text-muted', kind=None), Constant(value='section-rights', kind=None)]) name=None at 18aeb327cd0> -> __attrs_1696163068944
            __attrs_1696163068944 = _static_1696164507216
            __backup_rights_1696060407104 = get('rights', __marker)
            # <Value 'context/Rights' (4:18)> -> __value
            __token = 97
            try:
                __zt_tmp = __attrs_1696163068944
            except NameError:
                __zt_tmp = None
            __value = _static_1696164454800('path', 'context/Rights', econtext=econtext)(_static_1696162132368(econtext, __zt_tmp))
            econtext['rights'] = __value
            # <Value 'rights' (6:24)> -> __condition
            __token = 148
            try:
                __zt_tmp = __attrs_1696163068944
            except NameError:
                __zt_tmp = None
            __condition = _static_1696162780176('path', 'rights', econtext=econtext)(_static_1696162777552(econtext, __zt_tmp))
            if __condition:
                __previous_i18n_domain_1696163059344 = __i18n_domain
                __i18n_domain = 'plone'
                # <section ... (0:0)
                # --------------------------------------------------------
                __append('<section class="text-muted" id="section-rights" >\n\n  ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='section-heading', kind=None)]) name=None at 18aeb326310> -> __attrs_1696163056976
                __attrs_1696163056976 = _static_1696162784656
                # <header ... (0:0)
                # --------------------------------------------------------
                __append('<header class="section-heading" >')
                __stream_1696163063056 = []
                __append_1696163063056 = __stream_1696163063056.append
                __append_1696163063056('\n      Rights\n  ')
                __msgid_1696163063056 = __re_whitespace(''.join(__stream_1696163063056)).strip()
                __append(translate('section_rights_heading', mapping=None, default=__msgid_1696163063056, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</header>\n\n  ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163582416
                __attrs_1696163582416 = _static_1696164052944
                # <small ... (0:0)
                # --------------------------------------------------------
                __append('<small>')
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163582864
                __default_1696163582864 = _DEFAULT_MARKER
                # <Value 'rights' (16:22)> -> __cache_1696163585296
                __token = 324
                try:
                    __zt_tmp = __attrs_1696163582416
                except NameError:
                    __zt_tmp = None
                __cache_1696163585296 = _static_1696164608720('path', 'rights', econtext=econtext)(_static_1696164594640(econtext, __zt_tmp))
                # <BinOp left=<Value 'rights' (16:22)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb3a4610> -> __condition
                __expression = __cache_1696163585296
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    __append('Copyleft NiceCorp Inc.')
                else:
                    __content = __cache_1696163585296
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</small>\n\n</section>')
                __i18n_domain = __previous_i18n_domain_1696163059344
            if __backup_rights_1696060407104 is __marker:
                del econtext['rights']
            else:
                econtext['rights'] = __backup_rights_1696060407104
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}