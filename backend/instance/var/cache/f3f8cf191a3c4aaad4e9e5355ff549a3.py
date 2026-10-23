# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\volto\\browser\\voltobackendwarning.pt'

__tokens = {51: ('nocall: context/@@iconresolver', 2, 23), 290: ("python:icons.tag('plone-statusmessage-warning', tag_alt='warning', tag_class='statusmessage-icon mb-1 me-2')", 10, 37)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696163454864 = {}
_static_1696163845200 = __compile_zt_expr
_static_1696163849424 = __C2ZContextWrapper
_static_1696163848848 = {'class': 'portalMessage statusmessage statusmessage-warning alert alert-warning', 'role': 'alert'}
_static_1696163290320 = {}
_static_1696162904528 = __compile_zt_expr
_static_1696162892304 = __C2ZContextWrapper
_static_1696162662608 = {}
_static_1696163101712 = {'class': 'content'}
_static_1696163100368 = {}
_static_1696164495888 = {}
_static_1696164506000 = {}
_static_1696164509904 = {}
_static_1696164012560 = {}
_static_1696164017872 = {}
_static_1696164005456 = {}
_static_1696164010448 = {}
_static_1696164014224 = {'href': 'https://6.docs.plone.org/install/install-from-packages.html'}
_static_1696095924816 = {'href': 'https://6.docs.plone.org/volto/index.html'}
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
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162005072
            __attrs_1696162005072 = _static_1696163454864
            __backup_icons_1696124264512 = get('icons', __marker)
            # <Value 'nocall: context/@@iconresolver' (2:23)> -> __value
            __token = 51
            try:
                __zt_tmp = __attrs_1696162005072
            except NameError:
                __zt_tmp = None
            __value = _static_1696163845200('nocall', ' context/@@iconresolver', econtext=econtext)(_static_1696163849424(econtext, __zt_tmp))
            econtext['icons'] = __value
            __previous_i18n_domain_1696162014800 = __i18n_domain
            __i18n_domain = 'plone.volto'
            __append('\n\n  ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='role', kind=None)], values=[Constant(value='portalMessage statusmessage statusmessage-warning alert alert-warning', kind=None), Constant(value='alert', kind=None)]) name=None at 18aeb225810> -> __attrs_1696162020432
            __attrs_1696162020432 = _static_1696163848848
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="portalMessage statusmessage statusmessage-warning alert alert-warning" role="alert" >\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162006928
            __attrs_1696162006928 = _static_1696163290320
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162012240
            __default_1696162012240 = _DEFAULT_MARKER
            # <Value "python:icons.tag('plone-statusmessage-warning', tag_alt='warning', tag_class='statusmessage-icon mb-1 me-2')" (10:37)> -> __cache_1696162019600
            __token = 290
            try:
                __zt_tmp = __attrs_1696162006928
            except NameError:
                __zt_tmp = None
            __cache_1696162019600 = _static_1696162904528('python', "icons.tag('plone-statusmessage-warning', tag_alt='warning', tag_class='statusmessage-icon mb-1 me-2')", econtext=econtext)(_static_1696162892304(econtext, __zt_tmp))
            # <BinOp left=<Value "python:icons.tag('plone-statusmessage-warning', tag_alt='warning', tag_class='statusmessage-icon mb-1 me-2')" (10:37)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb226610> -> __condition
            __expression = __cache_1696162019600
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                pass
            else:
                __content = __cache_1696162019600
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162008592
            __attrs_1696162008592 = _static_1696162662608
            # <strong ... (0:0)
            # --------------------------------------------------------
            __append('<strong>')
            __stream_1696162016464 = []
            __append_1696162016464 = __stream_1696162016464.append
            __append_1696162016464('Warning')
            __msgid_1696162016464 = __re_whitespace(''.join(__stream_1696162016464)).strip()
            if __msgid_1696162016464:
                __append(translate(__msgid_1696162016464, mapping=None, default=__msgid_1696162016464, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</strong>:\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='content', kind=None)]) name=None at 18aeb225ad0> -> __attrs_1696124864080
            __attrs_1696124864080 = _static_1696163101712
            # <span ... (0:0)
            # --------------------------------------------------------
            __append('<span class="content">\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696098731408
            __attrs_1696098731408 = _static_1696163100368
            __stream_1696061112208 = []
            __append_1696061112208 = __stream_1696061112208.append
            __append_1696061112208('You have accessed the Plone backend through its Classic UI frontend.')
            __msgid_1696061112208 = __re_whitespace(''.join(__stream_1696061112208)).strip()
            __append(translate('volto_backend_warning', mapping=None, default=__msgid_1696061112208, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696098739216
            __attrs_1696098739216 = _static_1696164495888
            # <br ... (0:0)
            # --------------------------------------------------------
            __append('<br />\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696124569104
            __attrs_1696124569104 = _static_1696164506000
            # <br ... (0:0)
            # --------------------------------------------------------
            __append('<br />\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696059904720
            __attrs_1696059904720 = _static_1696164509904
            __stream_1696059915472 = []
            __append_1696059915472 = __stream_1696059915472.append
            __append_1696059915472("If you want to use Plone's new frontend Volto instead:\n        ")
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162469712
            __attrs_1696162469712 = _static_1696164012560
            # <ul ... (0:0)
            # --------------------------------------------------------
            __append_1696059915472('<ul>\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162471376
            __attrs_1696162471376 = _static_1696164017872
            # <li ... (0:0)
            # --------------------------------------------------------
            __append_1696059915472('<li>Install Volto, if not already installed.</li>\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162475792
            __attrs_1696162475792 = _static_1696164005456
            # <li ... (0:0)
            # --------------------------------------------------------
            __append_1696059915472('<li>Start Volto, if not already started.</li>\n          ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162470992
            __attrs_1696162470992 = _static_1696164010448
            # <li ... (0:0)
            # --------------------------------------------------------
            __append_1696059915472('<li>Visit the Volto frontend.</li>\n        </ul>\n              For more information, please read the documentation for how to\n        ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='https://6.docs.plone.org/install/install-from-packages.html', kind=None)]) name=None at 18ae519e310> -> __attrs_1696060795792
            __attrs_1696060795792 = _static_1696164014224
            # <a ... (0:0)
            # --------------------------------------------------------
            __append_1696059915472('<a href="https://6.docs.plone.org/install/install-from-packages.html">Install Plone from its packages</a>\n              and refer to the full Volto documentation\n        ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='https://6.docs.plone.org/volto/index.html', kind=None)]) name=None at 18ae728fd90> -> __attrs_1696164596240
            __attrs_1696164596240 = _static_1696095924816
            # <a ... (0:0)
            # --------------------------------------------------------
            __append_1696059915472('<a href="https://6.docs.plone.org/volto/index.html">Frontend</a>.')
            __msgid_1696059915472 = __re_whitespace(''.join(__stream_1696059915472)).strip()
            __append(translate('volto_backend_warning_link', mapping=None, default=__msgid_1696059915472, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('\n    </span>\n  </div>\n\n')
            __i18n_domain = __previous_i18n_domain_1696162014800
            if __backup_icons_1696124264512 is __marker:
                del econtext['icons']
            else:
                econtext['icons'] = __backup_icons_1696124264512
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}