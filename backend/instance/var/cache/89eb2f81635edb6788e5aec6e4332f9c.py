# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\Products\\CMFPlone\\browser\\templates\\colophon.pt'

__tokens = {}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
_static_1696164503568 = {'class': 'card card-classic', 'id': 'portal-colophon'}
_static_1696164496272 = {'class': 'card-body'}
_static_1696164449296 = {'href': 'http://plone.org', 'target': '_blank', 'title': 'This site was built using the Plone Open Source CMS/WCM.'}
_static_1696164498960 = {'xmlns': 'http://www.w3.org/1999/xhtml', 'xml:lang': 'en', 'lang': 'en'}
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

    def render_portlet(__stream, econtext, rcontext, __i18n_domain=None, __i18n_context=None, target_language=None):
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
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='card card-classic', kind=None), Constant(value='portal-colophon', kind=None)]) name=None at 18aeb314f10> -> __attrs_1696163287440
            __attrs_1696163287440 = _static_1696164503568
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="card card-classic" id="portal-colophon">\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card-body', kind=None)]) name=None at 18aeb35c790> -> __attrs_1696163292432
            __attrs_1696163292432 = _static_1696164496272
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="card-body">\n      ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None), ..., Constant(value='title', kind=None)], values=[Constant(value='http://plone.org', kind=None), ..., Constant(value='This site was built using the Plone Open Source CMS/WCM.', kind=None)]) name=None at 18aeb35cbd0> -> __attrs_1696094576336
            __attrs_1696094576336 = _static_1696164449296
            # <a ... (0:0)
            # --------------------------------------------------------
            __append('<a href="http://plone.org" target="_blank"')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696059916176
            __default_1696059916176 = _DEFAULT_MARKER
            # <Translate msgid='title_built_with_plone' node=Constant(value='This site was built using the Plone Open Source CMS/WCM.', kind=None) at 18ae50c6990> -> __attr_title
            __attr_title = 'This site was built using the Plone Open Source CMS/WCM.'
            __attr_title = translate('title_built_with_plone', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
            if __attr_title is not None:
                __append(' title="%s"' % __attr_title)
            __append('>')
            __stream_1696163292880 = []
            __append_1696163292880 = __stream_1696163292880.append
            __append_1696163292880('\n        Powered by Plone')
            __msgid_1696163292880 = __re_whitespace(''.join(__stream_1696163292880)).strip()
            __append(translate('label_powered_by_plone', mapping=None, default=__msgid_1696163292880, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</a>\n    </div>\n  </div>')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise

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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None), ..., Constant(value='lang', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None), ..., Constant(value='en', kind=None)]) name=None at 18aeb3140d0> -> __attrs_1696162995216
            __attrs_1696162995216 = _static_1696164498960
            __previous_i18n_domain_1696162989008 = __i18n_domain
            __i18n_domain = 'plone'
            __append('\n\n  ')
            __token = None
            render_portlet(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            __append('\n')
            __i18n_domain = __previous_i18n_domain_1696162989008
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render_portlet': render_portlet, 'render': render}