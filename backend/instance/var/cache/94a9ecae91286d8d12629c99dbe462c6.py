# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\Products\\CMFPlone\\browser\\templates/basic_error_message.pt'

__tokens = {293: ('python:view.is_manager()', 8, 27), 352: ('not:isManager', 11, 24), 423: ('isManager', 12, 24), 436: ('options/error_type', 12, 37), 694: ('isManager', 23, 21), 707: ('options/error_type', 23, 34), 755: ('isManager', 25, 22), 786: ('options/error_tb', 26, 20), 834: ('not:isManager', 28, 26)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_2616819706384 = {'xmlns': 'http://www.w3.org/1999/xhtml', 'xml:lang': 'en', 'lang': 'en'}
_static_2616819707408 = {}
_static_2616824957968 = __compile_zt_expr
_static_2616824959824 = __C2ZContextWrapper
_static_2616824962640 = {}
_static_2616853662864 = {}
_static_2616853674448 = __compile_zt_expr
_static_2616853661008 = __C2ZContextWrapper
_static_2616798159184 = {}
_static_2616798100944 = __compile_zt_expr
_static_2616827095952 = __C2ZContextWrapper
_static_2616822334544 = __compile_zt_expr
_static_2616794645776 = __C2ZContextWrapper
_static_2616853342480 = {}
_static_2616850033552 = {'class': 'documentFirstHeading'}
_static_2616822087568 = {'class': 'documentFirstHeading'}
_static_2616820472528 = __compile_zt_expr
_static_2616820477072 = __C2ZContextWrapper
_static_2616793500240 = __compile_zt_expr
_static_2616793510096 = __C2ZContextWrapper
_static_2616757985168 = {}
_static_2616757992272 = __compile_zt_expr
_static_2616822083920 = __C2ZContextWrapper
_static_2616819772432 = __compile_zt_expr
_static_2616819761872 = __C2ZContextWrapper
_static_2616819776400 = {}
_static_2616851433296 = __compile_zt_expr
_static_2616794645904 = __C2ZContextWrapper
_static_2616822084112 = {}
_static_2616821379856 = {}
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
            # <Static value=Dict(keys=[Constant(value='xmlns', kind=None), ..., Constant(value='lang', kind=None)], values=[Constant(value='http://www.w3.org/1999/xhtml', kind=None), ..., Constant(value='en', kind=None)]) name=None at 26146b9cf50> -> __attrs_2616782803920
            __attrs_2616782803920 = _static_2616819706384
            __previous_i18n_domain_2616782807696 = __i18n_domain
            __i18n_domain = 'plone'
            # <html ... (0:0)
            # --------------------------------------------------------
            __append('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616782800592
            __attrs_2616782800592 = _static_2616819707408
            __backup_isManager_2616850122880 = get('isManager', __marker)
            # <Value 'python:view.is_manager()' (8:27)> -> __value
            __token = 293
            try:
                __zt_tmp = __attrs_2616782800592
            except NameError:
                __zt_tmp = None
            __value = _static_2616824957968('python', 'view.is_manager()', econtext=econtext)(_static_2616824959824(econtext, __zt_tmp))
            econtext['isManager'] = __value
            __append('\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616821369360
            __attrs_2616821369360 = _static_2616824962640
            # <head ... (0:0)
            # --------------------------------------------------------
            __append('<head>\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616821373456
            __attrs_2616821373456 = _static_2616853662864
            # <Value 'not:isManager' (11:24)> -> __condition
            __token = 352
            try:
                __zt_tmp = __attrs_2616821373456
            except NameError:
                __zt_tmp = None
            __condition = _static_2616853674448('not', 'isManager', econtext=econtext)(_static_2616853661008(econtext, __zt_tmp))
            if __condition:
                # <title ... (0:0)
                # --------------------------------------------------------
                __append('<title>')
                __stream_2616821368912 = []
                __append_2616821368912 = __stream_2616821368912.append
                __append_2616821368912('Error')
                __msgid_2616821368912 = __re_whitespace(''.join(__stream_2616821368912)).strip()
                if __msgid_2616821368912:
                    __append(translate(__msgid_2616821368912, mapping=None, default=__msgid_2616821368912, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</title>')
            __append('\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616821367824
            __attrs_2616821367824 = _static_2616798159184
            # <Value 'isManager' (12:24)> -> __condition
            __token = 423
            try:
                __zt_tmp = __attrs_2616821367824
            except NameError:
                __zt_tmp = None
            __condition = _static_2616798100944('path', 'isManager', econtext=econtext)(_static_2616827095952(econtext, __zt_tmp))
            if __condition:
                # <title ... (0:0)
                # --------------------------------------------------------
                __append('<title>')
                # <Interpolation value=<Substitution '${options/error_type}' (12:35)> braces_required=True translation=False default='"?"' default_marker='"?"' at 26146b56810> -> __content_2616673514000
                __token = 436
                try:
                    __zt_tmp = __attrs_2616821367824
                except NameError:
                    __zt_tmp = None
                __content_2616673514000 = _static_2616822334544('path', 'options/error_type', econtext=econtext)(_static_2616794645776(econtext, __zt_tmp))
                __content_2616673514000 = __quote(__content_2616673514000, '\x00', '&#0;', None, None)
                __content_2616673514000 = __content_2616673514000
                if __content_2616673514000 is None:
                    pass
                elif __content_2616673514000 is None:
                    __content_2616673514000 = None
                else:
                    __tt = type(__content_2616673514000)
                    if __tt is bytes:
                        __content_2616673514000 = decode(__content_2616673514000)
                    elif __tt is not str:
                        if __tt is int or __tt is float:
                            __content_2616673514000 = str(__content_2616673514000)
                        else:
                            __markup = getattr(__content_2616673514000, '__html__', None)
                            if __markup is None:
                                __converted = translate(__content_2616673514000, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                __content_2616673514000 = str(__content_2616673514000) if __content_2616673514000 is __converted else __converted
                            else:
                                __content_2616673514000 = __markup()
                if __content_2616673514000 is not None:
                    __append(__content_2616673514000)
                __append('</title>')
            __append('\n</head>\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616821369040
            __attrs_2616821369040 = _static_2616853342480
            # <body ... (0:0)
            # --------------------------------------------------------
            __append('<body>\n\n  ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='documentFirstHeading', kind=None)]) name=None at 26146b54bd0> -> __attrs_2616825903440
            __attrs_2616825903440 = _static_2616850033552
            # <h1 ... (0:0)
            # --------------------------------------------------------
            __append('<h1 class="documentFirstHeading">')
            __stream_2616821369168 = []
            __append_2616821369168 = __stream_2616821369168.append
            __append_2616821369168('\n      We&#8217;re sorry, but there seems to be an error&hellip;\n  ')
            __msgid_2616821369168 = __re_whitespace(''.join(__stream_2616821369168)).strip()
            __append(translate('heading_site_error_sorry', mapping=None, default=__msgid_2616821369168, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
            __append('</h1>\n\n  ')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='documentFirstHeading', kind=None)]) name=None at 26146fa5750> -> __attrs_2616825895696
            __attrs_2616825895696 = _static_2616822087568
            # <Value 'isManager' (23:21)> -> __condition
            __token = 694
            try:
                __zt_tmp = __attrs_2616825895696
            except NameError:
                __zt_tmp = None
            __condition = _static_2616820472528('path', 'isManager', econtext=econtext)(_static_2616820477072(econtext, __zt_tmp))
            if __condition:
                # <h2 ... (0:0)
                # --------------------------------------------------------
                __append('<h2 class="documentFirstHeading">')
                # <Interpolation value=<Substitution '${options/error_type}' (23:32)> braces_required=True translation=False default='"?"' default_marker='"?"' at 26146fa4850> -> __content_2616673514000
                __token = 707
                try:
                    __zt_tmp = __attrs_2616825895696
                except NameError:
                    __zt_tmp = None
                __content_2616673514000 = _static_2616793500240('path', 'options/error_type', econtext=econtext)(_static_2616793510096(econtext, __zt_tmp))
                __content_2616673514000 = __quote(__content_2616673514000, '\x00', '&#0;', None, None)
                __content_2616673514000 = __content_2616673514000
                if __content_2616673514000 is None:
                    pass
                elif __content_2616673514000 is None:
                    __content_2616673514000 = None
                else:
                    __tt = type(__content_2616673514000)
                    if __tt is bytes:
                        __content_2616673514000 = decode(__content_2616673514000)
                    elif __tt is not str:
                        if __tt is int or __tt is float:
                            __content_2616673514000 = str(__content_2616673514000)
                        else:
                            __markup = getattr(__content_2616673514000, '__html__', None)
                            if __markup is None:
                                __converted = translate(__content_2616673514000, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                                __content_2616673514000 = str(__content_2616673514000) if __content_2616673514000 is __converted else __converted
                            else:
                                __content_2616673514000 = __markup()
                if __content_2616673514000 is not None:
                    __append(__content_2616673514000)
                __append('</h2>')
            __append('\n\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616825900048
            __attrs_2616825900048 = _static_2616757985168
            # <Value 'isManager' (25:22)> -> __condition
            __token = 755
            try:
                __zt_tmp = __attrs_2616825900048
            except NameError:
                __zt_tmp = None
            __condition = _static_2616757992272('path', 'isManager', econtext=econtext)(_static_2616822083920(econtext, __zt_tmp))
            if __condition:
                # <pre ... (0:0)
                # --------------------------------------------------------
                __append('<pre>')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616825904272
                __default_2616825904272 = _DEFAULT_MARKER
                # <Value 'options/error_tb' (26:20)> -> __cache_2616825895760
                __token = 786
                try:
                    __zt_tmp = __attrs_2616825900048
                except NameError:
                    __zt_tmp = None
                __cache_2616825895760 = _static_2616819772432('path', 'options/error_tb', econtext=econtext)(_static_2616819761872(econtext, __zt_tmp))
                # <BinOp left=<Value 'options/error_tb' (26:20)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146fa7f10> -> __condition
                __expression = __cache_2616825895760
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_2616825895760
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</pre>')
            __append('\n\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616825898256
            __attrs_2616825898256 = _static_2616819776400
            # <Value 'not:isManager' (28:26)> -> __condition
            __token = 834
            try:
                __zt_tmp = __attrs_2616825898256
            except NameError:
                __zt_tmp = None
            __condition = _static_2616851433296('not', 'isManager', econtext=econtext)(_static_2616794645904(econtext, __zt_tmp))
            if __condition:
                __append('\n      ')
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616825893904
                __attrs_2616825893904 = _static_2616822084112
                # <p ... (0:0)
                # --------------------------------------------------------
                __append('<p>')
                __stream_2616880726080_site_admin = ''
                __stream_2616825896656 = []
                __append_2616825896656 = __stream_2616825896656.append
                __append_2616825896656('\n      If you are certain you have the correct web address but are encountering an error, please\n      contact the ')
                __stream_2616880726080_site_admin = []
                __append_2616880726080_site_admin = __stream_2616880726080_site_admin.append
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616758692496
                __attrs_2616758692496 = _static_2616821379856
                # <span ... (0:0)
                # --------------------------------------------------------
                __append_2616880726080_site_admin('<span>')
                __stream_2616825894032 = []
                __append_2616825894032 = __stream_2616825894032.append
                __append_2616825894032('site administration')
                __msgid_2616825894032 = __re_whitespace(''.join(__stream_2616825894032)).strip()
                __append_2616880726080_site_admin(translate('label_site_admin', mapping=None, default=__msgid_2616825894032, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append_2616880726080_site_admin('</span>')
                __append_2616825896656('${site_admin}')
                __stream_2616880726080_site_admin = ''.join(__stream_2616880726080_site_admin)
                __append_2616825896656('.\n      ')
                __msgid_2616825896656 = __re_whitespace(''.join(__stream_2616825896656)).strip()
                __append(translate('description_site_error_mail_site_admin', mapping={'site_admin': __stream_2616880726080_site_admin}, default=__msgid_2616825896656, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</p>\n  ')
            __append('\n\n</body>\n')
            if __backup_isManager_2616850122880 is __marker:
                del econtext['isManager']
            else:
                econtext['isManager'] = __backup_isManager_2616850122880
            __append('\n</html>')
            __i18n_domain = __previous_i18n_domain_2616782807696
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}