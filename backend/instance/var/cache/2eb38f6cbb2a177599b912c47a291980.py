# -*- coding: utf-8 -*-
__filename = 'C:\\Users\\matheus.lcarvalho\\Documents\\agend-veic\\backend\\venv\\Lib\\site-packages\\plone\\app\\layout\\viewlets\\locking.pt'

__tokens = {60: ('view/info/is_locked_for_current_user', 3, 14), 114: (' view/lock_is_stealabl', 4, 16), 157: ('s view/lock_in', 5, 18), 185: ("ns python:context.restrictedTraverse('@@iconresolve", 6, 10), 299: ('locked', 10, 24), 401: ("python:icons.tag('lock-fill', tag_alt='locked', tag_class='mb-1 me-2')", 12, 39), 574: ('lock_details/author_page', 14, 38), 819: ('lock_details/author_page', 20, 18), 750: ('lock_details/fullname', 18, 24), 929: ('lock_details/time_difference', 24, 27), 1087: ('not:lock_details/author_page', 29, 41), 1273: ('lock_details/fullname', 33, 27), 1373: ('lock_details/time_difference', 36, 27), 1546: ('stealable', 42, 27), 1607: ('string:${context/absolute_url}/@@plone_lock_operations/force_unlock', 44, 21)}
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from chameleon.tales import DEFAULT_MARKER as _DEFAULT_MARKER
from sys import exc_info as _exc_info
from Products.PageTemplates.engine import _compile_zt_expr as __compile_zt_expr
from Products.PageTemplates.engine import _C2ZContextWrapper as __C2ZContextWrapper
_static_1696164109968 = {'id': 'plone-lock-status'}
_static_1696162734480 = __compile_zt_expr
_static_1696162739792 = __C2ZContextWrapper
_static_1696164599312 = __compile_zt_expr
_static_1696164596752 = __C2ZContextWrapper
_static_1696164450832 = __compile_zt_expr
_static_1696164516624 = __C2ZContextWrapper
_static_1696163298704 = __compile_zt_expr
_static_1696163284176 = __C2ZContextWrapper
_static_1696162053648 = {}
_static_1696095323920 = __compile_zt_expr
_static_1696094573904 = __C2ZContextWrapper
_static_1696094575760 = {'class': 'portalMessage info alert alert-info'}
_static_1696164342800 = {}
_static_1696162962192 = __compile_zt_expr
_static_1696163190864 = __C2ZContextWrapper
_static_1696163189008 = {}
_static_1696163323024 = {}
_static_1696163328080 = __compile_zt_expr
_static_1696163326416 = __C2ZContextWrapper
_static_1696163328848 = {'href': 'lock_details/author_page'}
_static_1696163516432 = __compile_zt_expr
_static_1696163517968 = __C2ZContextWrapper
_static_1696164535888 = __compile_zt_expr
_static_1696164537936 = __C2ZContextWrapper
_static_1696163546576 = {}
_static_1696164506320 = __compile_zt_expr
_static_1696164499344 = __C2ZContextWrapper
_static_1696162046160 = {}
_static_1696164496976 = __compile_zt_expr
_static_1696162772752 = __C2ZContextWrapper
_static_1696162772368 = {}
_static_1696162758800 = __compile_zt_expr
_static_1696162904720 = __C2ZContextWrapper
_static_1696164583952 = {}
_static_1696141398544 = __compile_zt_expr
_static_1696141394448 = __C2ZContextWrapper
_static_1696095922896 = {'method': 'POST', 'action': 'string:${context/absolute_url}/@@plone_lock_operations/force_unlock'}
_static_1696162991248 = __compile_zt_expr
_static_1696162992016 = __C2ZContextWrapper
_static_1696163582416 = __compile_zt_expr
_static_1696163578832 = __C2ZContextWrapper
_static_1696163583504 = {}
_static_1696162980240 = {'type': 'submit', 'value': 'Unlock'}
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
            # <Static value=Dict(keys=[Constant(value='id', kind=None)], values=[Constant(value='plone-lock-status', kind=None)]) name=None at 18aeb34eb10> -> __attrs_1696163227856
            __attrs_1696163227856 = _static_1696164109968
            __backup_locked_1696093086080 = get('locked', __marker)
            # <Value 'view/info/is_locked_for_current_user' (3:14)> -> __value
            __token = 60
            try:
                __zt_tmp = __attrs_1696163227856
            except NameError:
                __zt_tmp = None
            __value = _static_1696162734480('path', 'view/info/is_locked_for_current_user', econtext=econtext)(_static_1696162739792(econtext, __zt_tmp))
            econtext['locked'] = __value
            __backup_stealable_1696101762688 = get('stealable', __marker)
            # <Value 'view/lock_is_stealable' (4:16)> -> __value
            __token = 114
            try:
                __zt_tmp = __attrs_1696163227856
            except NameError:
                __zt_tmp = None
            __value = _static_1696164599312('path', 'view/lock_is_stealable', econtext=econtext)(_static_1696164596752(econtext, __zt_tmp))
            econtext['stealable'] = __value
            __backup_lock_details_1696099342656 = get('lock_details', __marker)
            # <Value 'view/lock_info' (5:18)> -> __value
            __token = 157
            try:
                __zt_tmp = __attrs_1696163227856
            except NameError:
                __zt_tmp = None
            __value = _static_1696164450832('path', 'view/lock_info', econtext=econtext)(_static_1696164516624(econtext, __zt_tmp))
            econtext['lock_details'] = __value
            __backup_icons_1696093154816 = get('icons', __marker)
            # <Value "python:context.restrictedTraverse('@@iconresolver')" (6:10)> -> __value
            __token = 185
            try:
                __zt_tmp = __attrs_1696163227856
            except NameError:
                __zt_tmp = None
            __value = _static_1696163298704('python', "context.restrictedTraverse('@@iconresolver')", econtext=econtext)(_static_1696163284176(econtext, __zt_tmp))
            econtext['icons'] = __value
            __previous_i18n_domain_1696163232656 = __i18n_domain
            __i18n_domain = 'plone'
            # <div ... (0:0)
            # --------------------------------------------------------
            __append('<div id="plone-lock-status" >\n  ')
            # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163228112
            __attrs_1696163228112 = _static_1696162053648
            # <Value 'locked' (10:24)> -> __condition
            __token = 299
            try:
                __zt_tmp = __attrs_1696163228112
            except NameError:
                __zt_tmp = None
            __condition = _static_1696095323920('path', 'locked', econtext=econtext)(_static_1696094573904(econtext, __zt_tmp))
            if __condition:
                __append('\n    ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='portalMessage info alert alert-info', kind=None)]) name=None at 18aeb225dd0> -> __attrs_1696162007568
                __attrs_1696162007568 = _static_1696094575760
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="portalMessage info alert alert-info">\n      ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162006608
                __attrs_1696162006608 = _static_1696164342800
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162019472
                __default_1696162019472 = _DEFAULT_MARKER
                # <Value "python:icons.tag('lock-fill', tag_alt='locked', tag_class='mb-1 me-2')" (12:39)> -> __cache_1696162014032
                __token = 401
                try:
                    __zt_tmp = __attrs_1696162006608
                except NameError:
                    __zt_tmp = None
                __cache_1696162014032 = _static_1696162962192('python', "icons.tag('lock-fill', tag_alt='locked', tag_class='mb-1 me-2')", econtext=econtext)(_static_1696163190864(econtext, __zt_tmp))
                # <BinOp left=<Value "python:icons.tag('lock-fill', tag_alt='locked', tag_class='mb-1 me-2')" (12:39)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb225890> -> __condition
                __expression = __cache_1696162014032
                # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_1696162014032
                    __content = __convert(__content)
                    if __content is not None:
                        __append(__content)
                __append('\n      ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162015568
                __attrs_1696162015568 = _static_1696163189008
                # <strong ... (0:0)
                # --------------------------------------------------------
                __append('<strong>')
                __stream_1696162005264 = []
                __append_1696162005264 = __stream_1696162005264.append
                __append_1696162005264('Locked')
                __msgid_1696162005264 = __re_whitespace(''.join(__stream_1696162005264)).strip()
                __append(translate('label_locked', mapping=None, default=__msgid_1696162005264, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('</strong>\n      ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162013200
                __attrs_1696162013200 = _static_1696163323024
                # <Value 'lock_details/author_page' (14:38)> -> __condition
                __token = 574
                try:
                    __zt_tmp = __attrs_1696162013200
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696163328080('path', 'lock_details/author_page', econtext=econtext)(_static_1696163326416(econtext, __zt_tmp))
                if __condition:
                    __stream_1696162496576_time = ''
                    __stream_1696162496576_author = ''
                    __stream_1696162013968 = []
                    __append_1696162013968 = __stream_1696162013968.append
                    __append_1696162013968('\n          This item was locked by\n        ')
                    __stream_1696162496576_author = []
                    __append_1696162496576_author = __stream_1696162496576_author.append
                    # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value='lock_details/author_page', kind=None)]) name=None at 18aeb34d050> -> __attrs_1696163842256
                    __attrs_1696163842256 = _static_1696163328848
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append_1696162496576_author('<a')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163841360
                    __default_1696163841360 = _DEFAULT_MARKER
                    # <Substitution 'lock_details/author_page' (20:18)> -> __attr_href
                    __token = 819
                    try:
                        __zt_tmp = __attrs_1696163842256
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_1696163516432('path', 'lock_details/author_page', econtext=econtext)(_static_1696163517968(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append_1696162496576_author(' href="%s"' % __attr_href)
                    __append_1696162496576_author(' >')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163849936
                    __default_1696163849936 = _DEFAULT_MARKER
                    # <Value 'lock_details/fullname' (18:24)> -> __cache_1696163844624
                    __token = 750
                    try:
                        __zt_tmp = __attrs_1696163842256
                    except NameError:
                        __zt_tmp = None
                    __cache_1696163844624 = _static_1696164535888('path', 'lock_details/fullname', econtext=econtext)(_static_1696164537936(econtext, __zt_tmp))
                    # <BinOp left=<Value 'lock_details/fullname' (18:24)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb3e6b50> -> __condition
                    __expression = __cache_1696163844624
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1696163844624
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append_1696162496576_author(__content)
                    __append_1696162496576_author('</a>')
                    __append_1696162013968('${author}')
                    __stream_1696162496576_author = ''.join(__stream_1696162496576_author)
                    __append_1696162013968('\n        ')
                    __stream_1696162496576_time = []
                    __append_1696162496576_time = __stream_1696162496576_time.append
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163846288
                    __attrs_1696163846288 = _static_1696163546576
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append_1696162496576_time('<span >')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163851152
                    __default_1696163851152 = _DEFAULT_MARKER
                    # <Value 'lock_details/time_difference' (24:27)> -> __cache_1696163842320
                    __token = 929
                    try:
                        __zt_tmp = __attrs_1696163846288
                    except NameError:
                        __zt_tmp = None
                    __cache_1696163842320 = _static_1696164506320('path', 'lock_details/time_difference', econtext=econtext)(_static_1696164499344(econtext, __zt_tmp))
                    # <BinOp left=<Value 'lock_details/time_difference' (24:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb3e5390> -> __condition
                    __expression = __cache_1696163842320
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1696163842320
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append_1696162496576_time(__content)
                    __append_1696162496576_time('</span>')
                    __append_1696162013968('${time}')
                    __stream_1696162496576_time = ''.join(__stream_1696162496576_time)
                    __append_1696162013968('\n         ago.\n      ')
                    __msgid_1696162013968 = __re_whitespace(''.join(__stream_1696162013968)).strip()
                    __append(translate('description_webdav_locked_by_author_on_time', mapping={'author': __stream_1696162496576_author, 'time': __stream_1696162496576_time}, default=__msgid_1696162013968, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('\n      ')
                # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696163848464
                __attrs_1696163848464 = _static_1696162046160
                # <Value 'not:lock_details/author_page' (29:41)> -> __condition
                __token = 1087
                try:
                    __zt_tmp = __attrs_1696163848464
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696164496976('not', 'lock_details/author_page', econtext=econtext)(_static_1696162772752(econtext, __zt_tmp))
                if __condition:
                    __stream_1696162496576_time = ''
                    __stream_1696162496576_author = ''
                    __stream_1696163855184 = []
                    __append_1696163855184 = __stream_1696163855184.append
                    __append_1696163855184('\n          This item was locked by\n        ')
                    __stream_1696162496576_author = []
                    __append_1696162496576_author = __stream_1696162496576_author.append
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162467920
                    __attrs_1696162467920 = _static_1696162772368
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append_1696162496576_author('<span >')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696163849296
                    __default_1696163849296 = _DEFAULT_MARKER
                    # <Value 'lock_details/fullname' (33:27)> -> __cache_1696163841552
                    __token = 1273
                    try:
                        __zt_tmp = __attrs_1696162467920
                    except NameError:
                        __zt_tmp = None
                    __cache_1696163841552 = _static_1696162758800('path', 'lock_details/fullname', econtext=econtext)(_static_1696162904720(econtext, __zt_tmp))
                    # <BinOp left=<Value 'lock_details/fullname' (33:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb3e7190> -> __condition
                    __expression = __cache_1696163841552
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1696163841552
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append_1696162496576_author(__content)
                    __append_1696162496576_author('</span>')
                    __append_1696163855184('${author}')
                    __stream_1696162496576_author = ''.join(__stream_1696162496576_author)
                    __append_1696163855184('\n        ')
                    __stream_1696162496576_time = []
                    __append_1696162496576_time = __stream_1696162496576_time.append
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162471312
                    __attrs_1696162471312 = _static_1696164583952
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append_1696162496576_time('<span >')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162475792
                    __default_1696162475792 = _DEFAULT_MARKER
                    # <Value 'lock_details/time_difference' (36:27)> -> __cache_1696163843600
                    __token = 1373
                    try:
                        __zt_tmp = __attrs_1696162471312
                    except NameError:
                        __zt_tmp = None
                    __cache_1696163843600 = _static_1696141398544('path', 'lock_details/time_difference', econtext=econtext)(_static_1696141394448(econtext, __zt_tmp))
                    # <BinOp left=<Value 'lock_details/time_difference' (36:27)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 18ae1f94a10> at 18aeb294210> -> __condition
                    __expression = __cache_1696163843600
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __value
                    __value = _DEFAULT_MARKER
                    __condition = __expression is __value
                    if __condition:
                        pass
                    else:
                        __content = __cache_1696163843600
                        __content = __quote(__content, None, '\xad', None, None)
                        if __content is not None:
                            __append_1696162496576_time(__content)
                    __append_1696162496576_time('</span>')
                    __append_1696163855184('${time}')
                    __stream_1696162496576_time = ''.join(__stream_1696162496576_time)
                    __append_1696163855184('\n         ago.\n      ')
                    __msgid_1696163855184 = __re_whitespace(''.join(__stream_1696163855184)).strip()
                    __append(translate('description_webdav_locked_by_author_on_time', mapping={'author': __stream_1696162496576_author, 'time': __stream_1696162496576_time}, default=__msgid_1696163855184, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                __append('\n      ')
                # <Static value=Dict(keys=[Constant(value='method', kind=None), Constant(value='action', kind=None)], values=[Constant(value='POST', kind=None), Constant(value='string:${context/absolute_url}/@@plone_lock_operations/force_unlock', kind=None)]) name=None at 18aeb3e7e10> -> __attrs_1696162473616
                __attrs_1696162473616 = _static_1696095922896
                # <Value 'stealable' (42:27)> -> __condition
                __token = 1546
                try:
                    __zt_tmp = __attrs_1696162473616
                except NameError:
                    __zt_tmp = None
                __condition = _static_1696162991248('path', 'stealable', econtext=econtext)(_static_1696162992016(econtext, __zt_tmp))
                if __condition:
                    # <form ... (0:0)
                    # --------------------------------------------------------
                    __append('<form method="POST"')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696162464720
                    __default_1696162464720 = _DEFAULT_MARKER
                    # <Substitution 'string:${context/absolute_url}/@@plone_lock_operations/force_unlock' (44:21)> -> __attr_action
                    __token = 1607
                    try:
                        __zt_tmp = __attrs_1696162473616
                    except NameError:
                        __zt_tmp = None
                    __attr_action = _static_1696163582416('string', '${context/absolute_url}/@@plone_lock_operations/force_unlock', econtext=econtext)(_static_1696163578832(econtext, __zt_tmp))
                    __attr_action = __quote(__attr_action, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_action is not None:
                        __append(' action="%s"' % __attr_action)
                    __append(' >\n        ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 18ae201bf90> -> __attrs_1696162469264
                    __attrs_1696162469264 = _static_1696163583504
                    # <span ... (0:0)
                    # --------------------------------------------------------
                    __append('<span>')
                    __stream_1696162496800_unlock_button = ''
                    __stream_1696162466320 = []
                    __append_1696162466320 = __stream_1696162466320.append
                    __append_1696162466320('\n            If you are certain this user has abandoned the object,\n            you may\n          ')
                    __stream_1696162496800_unlock_button = []
                    __append_1696162496800_unlock_button = __stream_1696162496800_unlock_button.append
                    # <Static value=Dict(keys=[Constant(value='type', kind=None), Constant(value='value', kind=None)], values=[Constant(value='submit', kind=None), Constant(value='Unlock', kind=None)]) name=None at 18aeb414350> -> __attrs_1696164051024
                    __attrs_1696164051024 = _static_1696162980240
                    # <input ... (0:0)
                    # --------------------------------------------------------
                    __append_1696162496800_unlock_button('<input type="submit"')
                    # <Symbol value=<DEFAULT> at 18ae1f94a10> -> __default_1696164043216
                    __default_1696164043216 = _DEFAULT_MARKER
                    # <Translate msgid=None node=Constant(value='Unlock', kind=None) at 18aeb417350> -> __attr_value
                    __attr_value = 'Unlock'
                    __attr_value = translate(__attr_value, default=__attr_value, domain=__i18n_domain, context=__i18n_context, target_language=getname('target_language'))
                    if __attr_value is not None:
                        __append_1696162496800_unlock_button(' value="%s"' % __attr_value)
                    __append_1696162496800_unlock_button(' />')
                    __append_1696162466320('${unlock_button}')
                    __stream_1696162496800_unlock_button = ''.join(__stream_1696162496800_unlock_button)
                    __append_1696162466320('\n            the object. You will then be able to edit it.\n        ')
                    __msgid_1696162466320 = __re_whitespace(''.join(__stream_1696162466320)).strip()
                    __append(translate('description_webdav_locked_steal', mapping={'unlock_button': __stream_1696162496800_unlock_button}, default=__msgid_1696162466320, domain=__i18n_domain, context=__i18n_context, target_language=target_language))
                    __append('</span>\n      </form>')
                __append('\n    </div>\n  ')
            __append('\n</div>')
            __i18n_domain = __previous_i18n_domain_1696163232656
            if __backup_icons_1696093154816 is __marker:
                del econtext['icons']
            else:
                econtext['icons'] = __backup_icons_1696093154816
            if __backup_lock_details_1696099342656 is __marker:
                del econtext['lock_details']
            else:
                econtext['lock_details'] = __backup_lock_details_1696099342656
            if __backup_stealable_1696101762688 is __marker:
                del econtext['stealable']
            else:
                econtext['stealable'] = __backup_stealable_1696101762688
            if __backup_locked_1696093086080 is __marker:
                del econtext['locked']
            else:
                econtext['locked'] = __backup_locked_1696093086080
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}