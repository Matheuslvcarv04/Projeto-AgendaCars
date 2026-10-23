# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\Products\\CMFPlone\\browser\\templates\\footer.pt'

__tokens = {860: ('nocall:modules/DateTime.DateTime', 20, 30), 921: (' python:DateTime(', 21, 27), 963: ('python:myTime.year()', 22, 22)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696162666448 = {'class': 'card card-classic', 'id': 'portal-footer-signature'}
_static_1696162303120 = {'class': 'card-body'}
_static_1696141399312 = {}
_static_1696162905296 = {}
_static_1696162901008 = {'href': 'http://plone.org'}
_static_1696162664208 = {}
_static_1696163222544 = {'title': 'Copyright'}
_static_1696163526992 = {}
_static_1696163317776 = __compile_zt_expr
_static_1696163329232 = __C2ZContextWrapper
_static_1696098731856 = __compile_zt_expr
_static_1696095323408 = __C2ZContextWrapper
_static_1696162824912 = __compile_zt_expr
_static_1696162829392 = __C2ZContextWrapper
_static_1696162842640 = {}
_static_1696162847376 = {'href': 'http://plone.org/foundation'}
_static_1696164041424 = {}
_static_1696164037840 = {}
_static_1696164039952 = {'href': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html'}
_static_1696162987984 = {'xmlns': 'http://www.w3.org/1999/xhtml', 'xml:lang': 'en', 'lang': 'en'}
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
            # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='id', kind=None)], values=[Constant(value='card card-classic', kind=None), Constant(value='portal-footer-signature', kind=None)]) name=None at 18aeb316990> -> __attrs_1696162998224
            __attrs_1696162998224 = _static_1696162666448
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="card card-classic" id="portal-footer-signature">\n\n    ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='card-body', kind=None)]) name=None at 18aeb317c10> -> __attrs_1696162994768
            __attrs_1696162994768 = _static_1696162303120
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div class="card-body">\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162998736
            __attrs_1696162998736 = _static_1696141399312
            __stream_1696162509792_plonefoundation = ''
            __stream_1696162509792_copyright = ''
            __stream_1696162509792_current_year = ''
            __stream_1696162509792_plonecms = ''
            __stream_1696162993808 = []
            __append_1696162993808 = __stream_1696162993808.append
            __append_1696162993808('\n      The\n      ')
            __stream_1696162509792_plonecms = []
            __append_1696162509792_plonecms = __stream_1696162509792_plonecms.append
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164036176
            __attrs_1696164036176 = _static_1696162905296
            __append_1696162509792_plonecms('\n           ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='http://plone.org', kind=None)]) name=None at 18aeb4121d0> -> __attrs_1696164033040
            __attrs_1696164033040 = _static_1696162901008
            # <a ... (0:0)
            # --------------------------------------------------------
            __append_1696162509792_plonecms('<a href="http://plone.org">')
            __stream_1696164034832 = []
            __append_1696164034832 = __stream_1696164034832.append
            __append_1696164034832('Plone')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696164516496
            __attrs_1696164516496 = _static_1696162664208
            # <sup ... (0:0)
            # --------------------------------------------------------
            __append_1696164034832('<sup>&reg;</sup> Open Source CMS/WCM')
            __msgid_1696164034832 = __re_whitespace(''.join(__stream_1696164034832)).strip()
            __append_1696162509792_plonecms(translate('label_plone_cms', mapping=None, default=__msgid_1696164034832, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append_1696162509792_plonecms('</a>\n      ')
            __append_1696162993808('${plonecms}')
            __stream_1696162509792_plonecms = ''.join(__stream_1696162509792_plonecms)
            __append_1696162993808('\n      is\n      ')
            __stream_1696162509792_copyright = []
            __append_1696162509792_copyright = __stream_1696162509792_copyright.append
            # <Static value=Dict(keys=[Constant(value='title', kind=None)], values=[Constant(value='Copyright', kind=None)]) name=None at 18aeb488750> -> __attrs_1696164527184
            __attrs_1696164527184 = _static_1696163222544
            # <abbr ... (0:0)
            # --------------------------------------------------------
            __append_1696162509792_copyright('<abbr')
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164582864
            __default_1696164582864 = _DEFAULT_MARKER
            # <Translate msgid='title_copyright' node=Constant(value='Copyright', kind=None) at 18aeb489390> -> __attr_title
            __attr_title = 'Copyright'
            __attr_title = translate('title_copyright', default=__attr_title, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
            if __attr_title is not None:
                __append_1696162509792_copyright(' title="%s"' % __attr_title)
            __append_1696162509792_copyright('>&copy;</abbr>')
            __append_1696162993808('${copyright}')
            __stream_1696162509792_copyright = ''.join(__stream_1696162509792_copyright)
            __append_1696162993808('\n      2000-')
            __stream_1696162509792_current_year = []
            __append_1696162509792_current_year = __stream_1696162509792_current_year.append
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163006928
            __attrs_1696163006928 = _static_1696163526992
            __backup_DateTime_1696123527232 = get('DateTime', __marker)
            # <Value 'nocall:modules/DateTime.DateTime' (20:30)> -> __value
            __token = 860
            try:
                __zt_tmp = __attrs_1696163006928
            except NameError:
                __zt_tmp = None
            __value = _static_1696163317776('nocall', 'modules/DateTime.DateTime', econtext=econtext)(_static_1696163329232(econtext, __zt_tmp))
            econtext['DateTime'] = __value
            __backup_myTime_1696096320384 = get('myTime', __marker)
            # <Value 'python:DateTime()' (21:27)> -> __value
            __token = 921
            try:
                __zt_tmp = __attrs_1696163006928
            except NameError:
                __zt_tmp = None
            __value = _static_1696098731856('python', 'DateTime()', econtext=econtext)(_static_1696095323408(econtext, __zt_tmp))
            econtext['myTime'] = __value
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163017680
            __default_1696163017680 = _DEFAULT_MARKER
            # <Value 'python:myTime.year()' (22:22)> -> __cache_1696163019472
            __token = 963
            try:
                __zt_tmp = __attrs_1696163006928
            except NameError:
                __zt_tmp = None
            __cache_1696163019472 = _static_1696162824912('python', 'myTime.year()', econtext=econtext)(_static_1696162829392(econtext, __zt_tmp))
            # <BinOp left=<Value 'python:myTime.year()' (22:22)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb319d50> -> __condition
            __expression = __cache_1696163019472
            # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                pass
            else:
                __content = __cache_1696163019472
                __content = __quote(__content, None, '\xad', None, None)
                if __content is not None:
                    __append_1696162509792_current_year(__content)
            if __backup_myTime_1696096320384 is __marker:
                del econtext['myTime']
            else:
                econtext['myTime'] = __backup_myTime_1696096320384
            if __backup_DateTime_1696123527232 is __marker:
                del econtext['DateTime']
            else:
                econtext['DateTime'] = __backup_DateTime_1696123527232
            __append_1696162993808('${current_year}')
            __stream_1696162509792_current_year = ''.join(__stream_1696162509792_current_year)
            __append_1696162993808('\n      by the\n      ')
            __stream_1696162509792_plonefoundation = []
            __append_1696162509792_plonefoundation = __stream_1696162509792_plonefoundation.append
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163016912
            __attrs_1696163016912 = _static_1696162842640
            __append_1696162509792_plonefoundation('\n           ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='http://plone.org/foundation', kind=None)]) name=None at 18aeb318a90> -> __attrs_1696163188048
            __attrs_1696163188048 = _static_1696162847376
            # <a ... (0:0)
            # --------------------------------------------------------
            __append_1696162509792_plonefoundation('<a href="http://plone.org/foundation">')
            __stream_1696163017040 = []
            __append_1696163017040 = __stream_1696163017040.append
            __append_1696163017040('Plone Foundation')
            __msgid_1696163017040 = __re_whitespace(''.join(__stream_1696163017040)).strip()
            __append_1696162509792_plonefoundation(translate('label_plone_foundation', mapping=None, default=__msgid_1696163017040, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append_1696162509792_plonefoundation('</a>')
            __append_1696162993808('${plonefoundation}')
            __stream_1696162509792_plonefoundation = ''.join(__stream_1696162509792_plonefoundation)
            __append_1696162993808('\n      and friends.\n      ')
            __msgid_1696162993808 = __re_whitespace(''.join(__stream_1696162993808)).strip()
            __append(translate('description_copyright', mapping={'plonecms': __stream_1696162509792_plonecms, 'current_year': __stream_1696162509792_current_year, 'copyright': __stream_1696162509792_copyright, 'plonefoundation': __stream_1696162509792_plonefoundation}, default=__msgid_1696162993808, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('\n\n      ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163191952
            __attrs_1696163191952 = _static_1696164041424
            __stream_1696162509792_license = ''
            __stream_1696163016208 = []
            __append_1696163016208 = __stream_1696163016208.append
            __append_1696163016208('\n      Distributed under the\n           ')
            __stream_1696162509792_license = []
            __append_1696162509792_license = __stream_1696162509792_license.append
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163191760
            __attrs_1696163191760 = _static_1696164037840
            __append_1696162509792_license('\n                ')
            # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='https://www.gnu.org/licenses/old-licenses/gpl-2.0.html', kind=None)]) name=None at 18aeb344350> -> __attrs_1696163187280
            __attrs_1696163187280 = _static_1696164039952
            # <a ... (0:0)
            # --------------------------------------------------------
            __append_1696162509792_license('<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.html">')
            __stream_1696163186960 = []
            __append_1696163186960 = __stream_1696163186960.append
            __append_1696163186960('GNU GPL license')
            __msgid_1696163186960 = __re_whitespace(''.join(__stream_1696163186960)).strip()
            __append_1696162509792_license(translate('label_gnu_gpl_licence', mapping=None, default=__msgid_1696163186960, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append_1696162509792_license('</a>')
            __append_1696163016208('${license}')
            __stream_1696162509792_license = ''.join(__stream_1696162509792_license)
            __append_1696163016208('.\n      ')
            __msgid_1696163016208 = __re_whitespace(''.join(__stream_1696163016208)).strip()
            __append(translate('description_license', mapping={'license': __stream_1696162509792_license}, default=__msgid_1696163016208, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('\n    </div>\n\n  </div>')
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None), ..., Constant(value='lang', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None), ..., Constant(value='en', kind=None)]) name=None at 18aeb49a7d0> -> __attrs_1696162998800
            __attrs_1696162998800 = _static_1696162987984
            __previous_i18n_domain_1696162991696 = __i18n_domain
            __i18n_domain = 'plone'
            __append('\n\n  ')
            __token = None
            render_portlet(__stream, econtext.copy(), rcontext, __i18n_domain, __i18n_context, target_language)
            econtext.update(rcontext)
            __append('\n\n')
            __i18n_domain = __previous_i18n_domain_1696162991696
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render_portlet': render_portlet, 'render': render}