# -*- coding: utf-8 -*-
__filename = 'manage_main'

__tokens = {31: ('here/manage_page_header', 1, 31), 89: ('here/manage_tabs', 3, 29), 238: ("python:getattr(here.aq_explicit, 'has_order_support', 0)", 7, 38), 318: (' modules/AccessControl/getSecurityManage', 8, 22), 392: ("t python: 'position' if has_order_support else 'i", 9, 31), 467: ("ey python:request.get('skey',default_so", 10, 22), 532: ("key python:request.get('rkey','a", 11, 21), 594: ("_alt python:'desc' if rkey=='asc' else ", 12, 24), 666: ('lt_up rkey_alt', 13, 26), 705: ('   obs python: here.manage_get_sortedObjects(sortkey = skey, revkey ', 14, 17), 801: (' my_url string:${context/absolute_url}/man', 15, 19), 905: ('string:${request/URL1}/', 17, 31), 962: ('obs', 19, 30), 1057: ('obs', 20, 89), 1120: ("python:'thead-light sorted_%s'%(request.get('rkey',''))", 21, 57), 1550: ('string:Sort ${rkey_alt_up} by meta-type', 29, 39), 1628: (' string:${my_url}?skey=meta_type&rkey=${rkey_alt', 30, 37), 1716: ("s python:skey=='meta_type' and 'zmi-sort_key' or No", 31, 37), 2066: ('string:Sort ${rkey_alt_up} by name', 39, 39), 2139: (' string:${my_url}?skey=id&rkey=${rkey_alt', 40, 37), 2220: ("s python:skey=='id' and 'zmi-sort_key' or No", 41, 37), 2879: ('string:Sort ${rkey_alt_up} by size', 52, 39), 2952: (' string:${my_url}?skey=get_size&rkey=${rkey_alt', 53, 37), 3039: ("s python:skey=='get_size' and 'zmi-sort_key' or No", 54, 37), 3451: ('string:Sort ${rkey_alt_up} by modification date', 63, 39), 3537: (' string:${my_url}?skey=_p_mtime&rkey=${rkey_alt', 64, 37), 3624: ("s python:skey=='_p_mtime' and 'zmi-sort_key' or No", 65, 37), 3906: ('obs', 74, 34), 3944: ('nocall:ob_dict/obj', 75, 32), 4178: ('ob_dict/id', 77, 104), 4519: (' ob/meta_type | defaul', 81, 122), 4491: ('ob/zmi_icon | default', 81, 94), 4598: ('ob/meta_type | default', 82, 53), 4765: ("python:'%s/manage_workspace'%(ob_dict['quoted_id'])", 86, 40), 4856: ('ob_dict/id', 87, 37), 4989: ('ob/wl_isLocked | nothing', 88, 111), 5163: ('ob/title|nothing', 91, 74), 5228: ('ob/title', 92, 46), 5390: ('python:here.compute_size(ob)', 96, 76), 5522: ('python:here.last_modified(ob)', 98, 81), 5737: ("python:sm.checkPermission('Delete objects', context)", 106, 23), 5806: ('obs', 106, 92), 5883: ('not:context/dontAllowCopyAndPaste|nothing', 108, 37), 6160: ('delete_allowed', 110, 121), 6415: ('here/cb_dataValid', 112, 125), 6587: ('delete_allowed', 114, 122), 6741: ("python:sm.checkPermission('Import/Export objects', context)", 115, 135), 6856: ("python: has_order_support and sm.checkPermission('Manage properties', context)", 117, 50), 7050: ('python:range(1,min(5,len(obs)))', 119, 38), 7096: ('val', 119, 84), 7142: ('python:range(5,len(obs),5)', 120, 38), 7183: ('val', 120, 79), 8444: ('not:obs', 146, 26), 8558: ('here/title_or_id', 148, 57), 8662: ('not:context/dontAllowCopyAndPaste|nothing', 151, 35), 8824: ('here/cb_dataValid', 152, 118), 9000: ("python:sm.checkPermission('Import/Export objects', context)", 154, 128), 12921: ('here/manage_page_footer', 281, 31)}
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
_static_2616758552784 = {}
_static_2616827970128 = __compile_zt_expr
_static_2616827985040 = __C2ZContextWrapper
_static_2616758309968 = {}
_static_2616758864208 = __compile_zt_expr
_static_2616758864144 = __C2ZContextWrapper
_static_2616827714960 = {'class': 'container-fluid'}
_static_2616827714704 = {'id': 'objectItems', 'name': 'objectItems', 'method': 'post', 'action': 'string:${request/URL1}/'}
_static_2616827712656 = __compile_zt_expr
_static_2616827713168 = __C2ZContextWrapper
_static_2616819594960 = __compile_zt_expr
_static_2616822512720 = __C2ZContextWrapper
_static_2616820602128 = __compile_zt_expr
_static_2616820598480 = __C2ZContextWrapper
_static_2616797949136 = __compile_zt_expr
_static_2616828656400 = __C2ZContextWrapper
_static_2616819339920 = __compile_zt_expr
_static_2616819345424 = __C2ZContextWrapper
_static_2616827278352 = __compile_zt_expr
_static_2616827276816 = __C2ZContextWrapper
_static_2616821186512 = __compile_zt_expr
_static_2616821186000 = __C2ZContextWrapper
_static_2616850963472 = __compile_zt_expr
_static_2616850960592 = __C2ZContextWrapper
_static_2616827416912 = __compile_zt_expr
_static_2616827426192 = __C2ZContextWrapper
_static_2616825839824 = __compile_zt_expr
_static_2616825848784 = __C2ZContextWrapper
_static_2616820051728 = {}
_static_2616820041232 = __compile_zt_expr
_static_2616820051856 = __C2ZContextWrapper
_static_2616820052880 = {'class': 'table table-striped table-hover table-sm objectItems'}
_static_2616788760144 = __compile_zt_expr
_static_2616788759312 = __C2ZContextWrapper
_static_2616788752080 = {'class': 'thead-light'}
_static_2616821170320 = __compile_zt_expr
_static_2616821174800 = __C2ZContextWrapper
_static_2616827719440 = {}
_static_2616758245584 = {'scope': 'col', 'class': 'zmi-object-check text-right'}
_static_2616828077136 = {'type': 'checkbox', 'id': 'checkAll', 'onclick': 'checkbox_all();'}
_static_2616820600656 = {'scope': 'col', 'class': 'zmi-object-type'}
_static_2616822217616 = {'title': 'Sort Ascending by Meta-Type', 'href': '?skey=meta_type&rkey=asc', 'class': "python:skey=='meta_type' and 'zmi-sort_key' or None"}
_static_2616821004368 = __compile_zt_expr
_static_2616821000080 = __C2ZContextWrapper
_static_2616787089424 = __compile_zt_expr
_static_2616787087120 = __C2ZContextWrapper
_static_2616788131728 = __compile_zt_expr
_static_2616788125456 = __C2ZContextWrapper
_static_2616788125200 = {'class': 'fa fa-sort'}
_static_2616788125776 = {'scope': 'col', 'class': 'zmi-object-id'}
_static_2616825677264 = {'title': 'Sort Ascending by Name', 'href': '?skey=id&rkey=asc', 'class': "python:skey=='id' and 'zmi-sort_key' or None"}
_static_2616787676176 = __compile_zt_expr
_static_2616787680208 = __C2ZContextWrapper
_static_2616827159888 = __compile_zt_expr
_static_2616827152848 = __C2ZContextWrapper
_static_2616786717584 = __compile_zt_expr
_static_2616786717712 = __C2ZContextWrapper
_static_2616827154448 = {'class': 'fa fa-sort'}
_static_2616849991888 = {'class': 'fa fa-search tablefilter', 'onclick': "$('#tablefilter').focus()"}
_static_2616851883088 = {'id': 'tablefilter', 'name': 'obj_ids:tokens', 'type': 'text', 'title': 'Filter object list by entering a name. Pressing the Enter key starts recursive search.'}
_static_2616787509904 = {'scope': 'col', 'class': 'zmi-object-size text-right hidden-xs'}
_static_2616821650896 = {'title': 'Sort Ascending by File-Size', 'href': '?skey=get_size&rkey=asc', 'class': "python:skey=='get_size' and 'zmi-sort_key' or None"}
_static_2616819495760 = __compile_zt_expr
_static_2616821179472 = __C2ZContextWrapper
_static_2616681340944 = __compile_zt_expr
_static_2616682041296 = __C2ZContextWrapper
_static_2616797627216 = __compile_zt_expr
_static_2616797633168 = __C2ZContextWrapper
_static_2616821420560 = {'class': 'fa fa-sort'}
_static_2616824867536 = {'scope': 'col', 'class': 'zmi-object-date text-right hidden-xs'}
_static_2616821430352 = {'title': 'Sort Ascending by Modification Date', 'href': '?skey=_p_mtime&rkey=asc', 'class': "python:skey=='_p_mtime' and 'zmi-sort_key' or None"}
_static_2616820387344 = __compile_zt_expr
_static_2616820385168 = __C2ZContextWrapper
_static_2616788235280 = __compile_zt_expr
_static_2616788229968 = __C2ZContextWrapper
_static_2616820389072 = __compile_zt_expr
_static_2616828507088 = __C2ZContextWrapper
_static_2616828510032 = {'class': 'fa fa-sort'}
_static_2616822084048 = {}
_static_2616821429584 = {}
_static_2616758810064 = __compile_zt_expr
_static_2616820048400 = __C2ZContextWrapper
_static_2616821921616 = {}
_static_2616827202256 = __compile_zt_expr
_static_2616827211088 = __C2ZContextWrapper
_static_2616827209424 = {'class': 'zmi-object-check text-right', 'onclick': "$(this).children('input').trigger('click');"}
_static_2616819232016 = {'type': 'checkbox', 'class': 'checkbox-list-item', 'name': 'ids:list', 'onclick': 'event.stopPropagation();select_objectitem($(this));', 'value': 'ob_dict/id'}
_static_2616828792144 = __compile_zt_expr
_static_2616828790800 = __C2ZContextWrapper
_static_2616821976016 = {'class': 'zmi-object-type', 'onclick': "$(this).prev().children('input').trigger('click')"}
_static_2616794257424 = {'title': 'Broken object', 'class': 'fas fa-ban text-danger'}
_static_2616850588048 = __compile_zt_expr
_static_2616850589520 = __C2ZContextWrapper
_static_2616787127440 = __compile_zt_expr
_static_2616826002640 = __C2ZContextWrapper
_static_2616821276368 = {'class': 'sr-only'}
_static_2616794909008 = __compile_zt_expr
_static_2616794916944 = __C2ZContextWrapper
_static_2616821272464 = {'class': 'zmi-object-id'}
_static_2616793337360 = {'href': "python:'%s/manage_workspace'%(ob_dict['quoted_id'])"}
_static_2616794922384 = __compile_zt_expr
_static_2616826000912 = __C2ZContextWrapper
_static_2616787129552 = {}
_static_2616788223760 = __compile_zt_expr
_static_2616794260880 = __C2ZContextWrapper
_static_2616828602832 = {'class': 'badge badge-warning', 'title': 'This item has been locked by WebDAV'}
_static_2616821018064 = __compile_zt_expr
_static_2616821013520 = __C2ZContextWrapper
_static_2616821013136 = {'class': 'fa fa-lock'}
_static_2616788585744 = {'class': 'zmi-object-title hidden-xs'}
_static_2616819963216 = __compile_zt_expr
_static_2616819971472 = __C2ZContextWrapper
_static_2616819963792 = {}
_static_2616786352016 = __compile_zt_expr
_static_2616783162512 = __C2ZContextWrapper
_static_2616793349712 = {'class': 'text-right zmi-object-size hidden-xs'}
_static_2616793552400 = __compile_zt_expr
_static_2616793554256 = __C2ZContextWrapper
_static_2616825967504 = {'class': 'text-right zmi-object-date hidden-xs pl-3'}
_static_2616821541072 = __compile_zt_expr
_static_2616821540624 = __C2ZContextWrapper
_static_2616820809616 = {'class': 'form-group form-inline zmi-controls'}
_static_2616820243088 = __compile_zt_expr
_static_2616783035408 = __C2ZContextWrapper
_static_2616851875216 = __compile_zt_expr
_static_2616851958736 = __C2ZContextWrapper
_static_2616825965904 = {'class': 'input-group'}
_static_2616821500048 = {}
_static_2616821500304 = __compile_zt_expr
_static_2616850588816 = __C2ZContextWrapper
_static_2616783033552 = {'class': 'btn btn-primary mr-2', 'type': 'submit', 'name': 'manage_renameForm:method', 'value': 'Rename'}
_static_2616851622224 = {'class': 'btn btn-primary mr-2', 'type': 'submit', 'name': 'manage_cutObjects:method', 'value': 'Cut'}
_static_2616821825936 = __compile_zt_expr
_static_2616821834512 = __C2ZContextWrapper
_static_2616821828560 = {'class': 'btn btn-primary mr-2', 'type': 'submit', 'name': 'manage_copyObjects:method', 'value': 'Copy'}
_static_2616821835024 = {'class': 'btn btn-primary mr-2', 'type': 'submit', 'name': 'manage_pasteObjects:method', 'value': 'Paste'}
_static_2616850797648 = __compile_zt_expr
_static_2616850794960 = __C2ZContextWrapper
_static_2616850807056 = {'class': 'btn btn-primary mr-2', 'type': 'submit', 'name': 'manage_delObjects:method', 'value': 'Delete'}
_static_2616850862736 = __compile_zt_expr
_static_2616850862672 = __C2ZContextWrapper
_static_2616850865744 = {'class': 'btn btn-primary mr-2', 'type': 'submit', 'name': 'manage_importExportForm:method', 'value': 'Import/Export'}
_static_2616825326992 = __compile_zt_expr
_static_2616825318416 = __C2ZContextWrapper
_static_2616860175952 = {'class': 'input-group'}
_static_2616822576592 = __compile_zt_expr
_static_2616822575248 = __C2ZContextWrapper
_static_2616822574800 = {'class': 'form-control btn btn-primary', 'name': 'delta:int'}
_static_2616797695248 = {}
_static_2616822763088 = __compile_zt_expr
_static_2616794442448 = __C2ZContextWrapper
_static_2616792102224 = __compile_zt_expr
_static_2616822763344 = __C2ZContextWrapper
_static_2616850796624 = {}
_static_2616821509712 = __compile_zt_expr
_static_2616797999632 = __C2ZContextWrapper
_static_2616792130576 = __compile_zt_expr
_static_2616792132304 = __C2ZContextWrapper
_static_2616797973584 = {'class': 'input-group-append'}
_static_2616820843024 = {'type': 'submit', 'name': 'manage_move_objects_up:method', 'value': 'Move up', 'title': 'Move selected items up', 'class': 'btn btn-primary'}
_static_2616782813008 = {'class': 'fas fa-arrow-up'}
_static_2616794581776 = {'type': 'submit', 'name': 'manage_move_objects_down:method', 'value': 'Move down', 'title': 'Move selected items down', 'class': 'btn btn-primary rounded-right'}
_static_2616794375696 = {'class': 'fas fa-arrow-down'}
_static_2616788997072 = {'type': 'submit', 'name': 'manage_move_objects_to_top:method', 'value': 'Move to top', 'title': 'Move selected items to top', 'class': 'btn btn-primary ml-2 mr-2'}
_static_2616821227472 = {'class': 'fas fa-arrow-up', 'style': 'border-top: 0.2rem solid silver;'}
_static_2616821226256 = {'type': 'submit', 'name': 'manage_move_objects_to_bottom:method', 'value': 'Move to bottom', 'title': 'Move selected items to bottom', 'class': 'btn btn-primary'}
_static_2616852312848 = {'class': 'fas fa-arrow-down', 'style': 'border-bottom: 0.2rem solid silver;'}
_static_2616821235088 = {}
_static_2616825603216 = __compile_zt_expr
_static_2616825601232 = __C2ZContextWrapper
_static_2616825607632 = {'class': 'alert alert-info mt-4 mb-4'}
_static_2616825600400 = {}
_static_2616786059024 = __compile_zt_expr
_static_2616786051600 = __C2ZContextWrapper
_static_2616794082704 = {'class': 'form-group'}
_static_2616797699216 = {}
_static_2616821235664 = __compile_zt_expr
_static_2616821220240 = __C2ZContextWrapper
_static_2616822658000 = {'class': 'btn btn-primary', 'type': 'submit', 'name': 'manage_pasteObjects:method', 'value': 'Paste'}
_static_2616794584080 = __compile_zt_expr
_static_2616794588560 = __C2ZContextWrapper
_static_2616826187344 = {'class': 'btn btn-primary', 'type': 'submit', 'name': 'manage_importExportForm:method', 'value': 'Import/Export'}
_static_2616793620048 = __compile_zt_expr
_static_2616793626832 = __C2ZContextWrapper
_static_2616820401232 = {}
_static_2616825061328 = {'class': 'zmi-typename_show'}
_static_2616825064080 = {}
_static_2616825053712 = __compile_zt_expr
_static_2616825055312 = __C2ZContextWrapper
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
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827809552
            __attrs_2616827809552 = _static_2616758552784
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616827813904
            __default_2616827813904 = _DEFAULT_MARKER
            # <Value 'here/manage_page_header' (1:31)> -> __cache_2616787316368
            __token = 31
            try:
                __zt_tmp = __attrs_2616827809552
            except NameError:
                __zt_tmp = None
            __cache_2616787316368 = _static_2616827970128('path', 'here/manage_page_header', econtext=econtext)(_static_2616827985040(econtext, __zt_tmp))
            # <BinOp left=<Value 'here/manage_page_header' (1:31)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26147179550> -> __condition
            __expression = __cache_2616787316368
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                pass
            else:
                __content = __cache_2616787316368
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616827816656
            __attrs_2616827816656 = _static_2616758309968
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616827811344
            __default_2616827811344 = _DEFAULT_MARKER
            # <Value 'here/manage_tabs' (3:29)> -> __cache_2616827815120
            __token = 89
            try:
                __zt_tmp = __attrs_2616827816656
            except NameError:
                __zt_tmp = None
            __cache_2616827815120 = _static_2616758864208('path', 'here/manage_tabs', econtext=econtext)(_static_2616758864144(econtext, __zt_tmp))
            # <BinOp left=<Value 'here/manage_tabs' (3:29)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 2614717b5d0> -> __condition
            __expression = __cache_2616827815120
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                pass
            else:
                __content = __cache_2616827815120
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n\n')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='container-fluid', kind=None)]) name=None at 2614717bf10> -> __attrs_2616827818512
            __attrs_2616827818512 = _static_2616827714960
            # <main ... (0:0)
            # --------------------------------------------------------
            __append('<main class="container-fluid">\n  ')
            # <Static value=Dict(keys=[Constant(value='id', kind=None), ..., Constant(value='action', kind=None)], values=[Constant(value='objectItems', kind=None), ..., Constant(value='string:${request/URL1}/', kind=None)]) name=None at 26147178810> -> __attrs_2616798164112
            __attrs_2616798164112 = _static_2616827714704
            __backup_has_order_support_2616853662016 = get('has_order_support', __marker)
            # <Value "python:getattr(here.aq_explicit, 'has_order_support', 0)" (7:38)> -> __value
            __token = 238
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616827712656('python', "getattr(here.aq_explicit, 'has_order_support', 0)", econtext=econtext)(_static_2616827713168(econtext, __zt_tmp))
            econtext['has_order_support'] = __value
            __backup_sm_2616851435968 = get('sm', __marker)
            # <Value 'modules/AccessControl/getSecurityManager' (8:22)> -> __value
            __token = 318
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616819594960('path', 'modules/AccessControl/getSecurityManager', econtext=econtext)(_static_2616822512720(econtext, __zt_tmp))
            econtext['sm'] = __value
            __backup_default_sort_2616852973248 = get('default_sort', __marker)
            # <Value "python: 'position' if has_order_support else 'id'" (9:31)> -> __value
            __token = 392
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616820602128('python', " 'position' if has_order_support else 'id'", econtext=econtext)(_static_2616820598480(econtext, __zt_tmp))
            econtext['default_sort'] = __value
            __backup_skey_2616853944960 = get('skey', __marker)
            # <Value "python:request.get('skey',default_sort)" (10:22)> -> __value
            __token = 467
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616797949136('python', "request.get('skey',default_sort)", econtext=econtext)(_static_2616828656400(econtext, __zt_tmp))
            econtext['skey'] = __value
            __backup_rkey_2616850092480 = get('rkey', __marker)
            # <Value "python:request.get('rkey','asc')" (11:21)> -> __value
            __token = 532
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616819339920('python', "request.get('rkey','asc')", econtext=econtext)(_static_2616819345424(econtext, __zt_tmp))
            econtext['rkey'] = __value
            __backup_rkey_alt_2616851889984 = get('rkey_alt', __marker)
            # <Value "python:'desc' if rkey=='asc' else 'asc'" (12:24)> -> __value
            __token = 594
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616827278352('python', "'desc' if rkey=='asc' else 'asc'", econtext=econtext)(_static_2616827276816(econtext, __zt_tmp))
            econtext['rkey_alt'] = __value
            __backup_rkey_alt_up_2616859099840 = get('rkey_alt_up', __marker)
            # <Value 'rkey_alt/upper' (13:26)> -> __value
            __token = 666
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616821186512('path', 'rkey_alt/upper', econtext=econtext)(_static_2616821186000(econtext, __zt_tmp))
            econtext['rkey_alt_up'] = __value
            __backup_obs_2616827922240 = get('obs', __marker)
            # <Value 'python: here.manage_get_sortedObjects(sortkey = skey, revkey = rkey)' (14:17)> -> __value
            __token = 705
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616850963472('python', ' here.manage_get_sortedObjects(sortkey = skey, revkey = rkey)', econtext=econtext)(_static_2616850960592(econtext, __zt_tmp))
            econtext['obs'] = __value
            __backup_my_url_2616827922304 = get('my_url', __marker)
            # <Value 'string:${context/absolute_url}/manage_main' (15:19)> -> __value
            __token = 801
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __value = _static_2616827416912('string', '${context/absolute_url}/manage_main', econtext=econtext)(_static_2616827426192(econtext, __zt_tmp))
            econtext['my_url'] = __value
            # <form ... (0:0)
            # --------------------------------------------------------
            __append('<form id="objectItems" name="objectItems" method="post"')
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616824962512
            __default_2616824962512 = _DEFAULT_MARKER
            # <Substitution 'string:${request/URL1}/' (17:31)> -> __attr_action
            __token = 905
            try:
                __zt_tmp = __attrs_2616798164112
            except NameError:
                __zt_tmp = None
            __attr_action = _static_2616825839824('string', '${request/URL1}/', econtext=econtext)(_static_2616825848784(econtext, __zt_tmp))
            __attr_action = __quote(__attr_action, '"', '&quot;', None, _DEFAULT_MARKER)
            if __attr_action is not None:
                __append(' action="%s"' % __attr_action)
            __append('>\n\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616820476240
            __attrs_2616820476240 = _static_2616820051728
            # <Value 'obs' (19:30)> -> __condition
            __token = 962
            try:
                __zt_tmp = __attrs_2616820476240
            except NameError:
                __zt_tmp = None
            __condition = _static_2616820041232('path', 'obs', econtext=econtext)(_static_2616820051856(econtext, __zt_tmp))
            if __condition:
                __append('\n      ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='table table-striped table-hover table-sm objectItems', kind=None)]) name=None at 26146a7af10> -> __attrs_2616820481744
                __attrs_2616820481744 = _static_2616820052880
                # <Value 'obs' (20:89)> -> __condition
                __token = 1057
                try:
                    __zt_tmp = __attrs_2616820481744
                except NameError:
                    __zt_tmp = None
                __condition = _static_2616788760144('path', 'obs', econtext=econtext)(_static_2616788759312(econtext, __zt_tmp))
                if __condition:
                    # <table ... (0:0)
                    # --------------------------------------------------------
                    __append('<table class="table table-striped table-hover table-sm objectItems">\n        ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='thead-light', kind=None)]) name=None at 261471bb750> -> __attrs_2616788890960
                    __attrs_2616788890960 = _static_2616788752080
                    # <thead ... (0:0)
                    # --------------------------------------------------------
                    __append('<thead')
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616828074576
                    __default_2616828074576 = _DEFAULT_MARKER
                    # <Substitution "python:'thead-light sorted_%s'%(request.get('rkey',''))" (21:57)> -> __attr_class
                    __token = 1120
                    try:
                        __zt_tmp = __attrs_2616788890960
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_2616821170320('python', "'thead-light sorted_%s'%(request.get('rkey',''))", econtext=econtext)(_static_2616821174800(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', 'thead-light', _DEFAULT_MARKER)
                    if __attr_class is not None:
                        __append(' class="%s"' % __attr_class)
                    __append('>\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616793513808
                    __attrs_2616793513808 = _static_2616827719440
                    # <tr ... (0:0)
                    # --------------------------------------------------------
                    __append('<tr>\n            ')
                    # <Static value=Dict(keys=[Constant(value='scope', kind=None), Constant(value='class', kind=None)], values=[Constant(value='col', kind=None), Constant(value='zmi-object-check text-right', kind=None)]) name=None at 261450c0990> -> __attrs_2616793513104
                    __attrs_2616793513104 = _static_2616758245584
                    # <th ... (0:0)
                    # --------------------------------------------------------
                    __append('<th scope="col" class="zmi-object-check text-right">\n              ')
                    # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='onclick', kind=None)], values=[Constant(value='checkbox', kind=None), ..., Constant(value='checkbox_all();', kind=None)]) name=None at 261450c01d0> -> __attrs_2616758186832
                    __attrs_2616758186832 = _static_2616828077136
                    # <input ... (0:0)
                    # --------------------------------------------------------
                    __append('<input type="checkbox" id="checkAll" onclick="checkbox_all();" />\n            </th>\n            ')
                    # <Static value=Dict(keys=[Constant(value='scope', kind=None), Constant(value='class', kind=None)], values=[Constant(value='col', kind=None), Constant(value='zmi-object-type', kind=None)]) name=None at 26142f11b50> -> __attrs_2616757982352
                    __attrs_2616757982352 = _static_2616820600656
                    # <th ... (0:0)
                    # --------------------------------------------------------
                    __append('<th scope="col" class="zmi-object-type">\n              ')
                    # <Static value=Dict(keys=[Constant(value='title', kind=None), ..., Constant(value='class', kind=None)], values=[Constant(value='Sort Ascending by Meta-Type', kind=None), ..., Constant(value="python:skey=='meta_type' and 'zmi-sort_key' or None", kind=None)]) name=None at 26142ee2710> -> __attrs_2616757987408
                    __attrs_2616757987408 = _static_2616822217616
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616757980816
                    __default_2616757980816 = _DEFAULT_MARKER
                    # <Substitution 'string:Sort ${rkey_alt_up} by meta-type' (29:39)> -> __attr_title
                    __token = 1550
                    try:
                        __zt_tmp = __attrs_2616757987408
                    except NameError:
                        __zt_tmp = None
                    __attr_title = _static_2616821004368('string', 'Sort ${rkey_alt_up} by meta-type', econtext=econtext)(_static_2616821000080(econtext, __zt_tmp))
                    __attr_title = __quote(__attr_title, '"', '&quot;', 'Sort Ascending by Meta-Type', _DEFAULT_MARKER)
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616757985872
                    __default_2616757985872 = _DEFAULT_MARKER
                    # <Substitution 'string:${my_url}?skey=meta_type&rkey=${rkey_alt}' (30:37)> -> __attr_href
                    __token = 1628
                    try:
                        __zt_tmp = __attrs_2616757987408
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_2616787089424('string', '${my_url}?skey=meta_type&rkey=${rkey_alt}', econtext=econtext)(_static_2616787087120(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '?skey=meta_type&rkey=asc', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616757984976
                    __default_2616757984976 = _DEFAULT_MARKER
                    # <Substitution "python:skey=='meta_type' and 'zmi-sort_key' or None" (31:37)> -> __attr_class
                    __token = 1716
                    try:
                        __zt_tmp = __attrs_2616757987408
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_2616788131728('python', "skey=='meta_type' and 'zmi-sort_key' or None", econtext=econtext)(_static_2616788125456(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_class is not None:
                        __append(' class="%s"' % __attr_class)
                    __append('>\n                ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='fa fa-sort', kind=None)]) name=None at 26142ee09d0> -> __attrs_2616787447632
                    __attrs_2616787447632 = _static_2616788125200
                    # <i ... (0:0)
                    # --------------------------------------------------------
                    __append('<i class="fa fa-sort"></i>\n              </a>\n            </th>\n            ')
                    # <Static value=Dict(keys=[Constant(value='scope', kind=None), Constant(value='class', kind=None)], values=[Constant(value='col', kind=None), Constant(value='zmi-object-id', kind=None)]) name=None at 26145531510> -> __attrs_2616787437072
                    __attrs_2616787437072 = _static_2616788125776
                    # <th ... (0:0)
                    # --------------------------------------------------------
                    __append('<th scope="col" class="zmi-object-id">\n              ')
                    # <Static value=Dict(keys=[Constant(value='title', kind=None), ..., Constant(value='class', kind=None)], values=[Constant(value='Sort Ascending by Name', kind=None), ..., Constant(value="python:skey=='id' and 'zmi-sort_key' or None", kind=None)]) name=None at 26144afb150> -> __attrs_2616850023120
                    __attrs_2616850023120 = _static_2616825677264
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616850032272
                    __default_2616850032272 = _DEFAULT_MARKER
                    # <Substitution 'string:Sort ${rkey_alt_up} by name' (39:39)> -> __attr_title
                    __token = 2066
                    try:
                        __zt_tmp = __attrs_2616850023120
                    except NameError:
                        __zt_tmp = None
                    __attr_title = _static_2616787676176('string', 'Sort ${rkey_alt_up} by name', econtext=econtext)(_static_2616787680208(econtext, __zt_tmp))
                    __attr_title = __quote(__attr_title, '"', '&quot;', 'Sort Ascending by Name', _DEFAULT_MARKER)
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616850033552
                    __default_2616850033552 = _DEFAULT_MARKER
                    # <Substitution 'string:${my_url}?skey=id&rkey=${rkey_alt}' (40:37)> -> __attr_href
                    __token = 2139
                    try:
                        __zt_tmp = __attrs_2616850023120
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_2616827159888('string', '${my_url}?skey=id&rkey=${rkey_alt}', econtext=econtext)(_static_2616827152848(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '?skey=id&rkey=asc', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616850027216
                    __default_2616850027216 = _DEFAULT_MARKER
                    # <Substitution "python:skey=='id' and 'zmi-sort_key' or None" (41:37)> -> __attr_class
                    __token = 2220
                    try:
                        __zt_tmp = __attrs_2616850023120
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_2616786717584('python', "skey=='id' and 'zmi-sort_key' or None", econtext=econtext)(_static_2616786717712(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_class is not None:
                        __append(' class="%s"' % __attr_class)
                    __append('>\n                Name\n                ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='fa fa-sort', kind=None)]) name=None at 261486a8e50> -> __attrs_2616828743504
                    __attrs_2616828743504 = _static_2616827154448
                    # <i ... (0:0)
                    # --------------------------------------------------------
                    __append('<i class="fa fa-sort"></i>\n              </a>\n              ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='onclick', kind=None)], values=[Constant(value='fa fa-search tablefilter', kind=None), Constant(value="$('#tablefilter').focus()", kind=None)]) name=None at 2614725c950> -> __attrs_2616828746512
                    __attrs_2616828746512 = _static_2616849991888
                    # <i ... (0:0)
                    # --------------------------------------------------------
                    __append('<i class="fa fa-search tablefilter" onclick="$(\'#tablefilter\').focus()"></i>\n              ')
                    # <Static value=Dict(keys=[Constant(value='id', kind=None), ..., Constant(value='title', kind=None)], values=[Constant(value='tablefilter', kind=None), ..., Constant(value='Filter object list by entering a name. Pressing the Enter key starts recursive search.', kind=None)]) name=None at 2614725e990> -> __attrs_2616828750800
                    __attrs_2616828750800 = _static_2616851883088
                    # <input ... (0:0)
                    # --------------------------------------------------------
                    __append('<input id="tablefilter" name="obj_ids:tokens" type="text" title="Filter object list by entering a name. Pressing the Enter key starts recursive search." />\n            </th>\n            ')
                    # <Static value=Dict(keys=[Constant(value='scope', kind=None), Constant(value='class', kind=None)], values=[Constant(value='col', kind=None), Constant(value='zmi-object-size text-right hidden-xs', kind=None)]) name=None at 2614725cc50> -> __attrs_2616822822352
                    __attrs_2616822822352 = _static_2616787509904
                    # <th ... (0:0)
                    # --------------------------------------------------------
                    __append('<th scope="col" class="zmi-object-size text-right hidden-xs">\n              ')
                    # <Static value=Dict(keys=[Constant(value='title', kind=None), ..., Constant(value='class', kind=None)], values=[Constant(value='Sort Ascending by File-Size', kind=None), ..., Constant(value="python:skey=='get_size' and 'zmi-sort_key' or None", kind=None)]) name=None at 26146cb7590> -> __attrs_2616853340752
                    __attrs_2616853340752 = _static_2616821650896
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616822822672
                    __default_2616822822672 = _DEFAULT_MARKER
                    # <Substitution 'string:Sort ${rkey_alt_up} by size' (52:39)> -> __attr_title
                    __token = 2879
                    try:
                        __zt_tmp = __attrs_2616853340752
                    except NameError:
                        __zt_tmp = None
                    __attr_title = _static_2616819495760('string', 'Sort ${rkey_alt_up} by size', econtext=econtext)(_static_2616821179472(econtext, __zt_tmp))
                    __attr_title = __quote(__attr_title, '"', '&quot;', 'Sort Ascending by File-Size', _DEFAULT_MARKER)
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616822822480
                    __default_2616822822480 = _DEFAULT_MARKER
                    # <Substitution 'string:${my_url}?skey=get_size&rkey=${rkey_alt}' (53:37)> -> __attr_href
                    __token = 2952
                    try:
                        __zt_tmp = __attrs_2616853340752
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_2616681340944('string', '${my_url}?skey=get_size&rkey=${rkey_alt}', econtext=econtext)(_static_2616682041296(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '?skey=get_size&rkey=asc', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616853332304
                    __default_2616853332304 = _DEFAULT_MARKER
                    # <Substitution "python:skey=='get_size' and 'zmi-sort_key' or None" (54:37)> -> __attr_class
                    __token = 3039
                    try:
                        __zt_tmp = __attrs_2616853340752
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_2616797627216('python', "skey=='get_size' and 'zmi-sort_key' or None", econtext=econtext)(_static_2616797633168(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_class is not None:
                        __append(' class="%s"' % __attr_class)
                    __append('>\n                Size\n                ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='fa fa-sort', kind=None)]) name=None at 261489d22d0> -> __attrs_2616853336080
                    __attrs_2616853336080 = _static_2616821420560
                    # <i ... (0:0)
                    # --------------------------------------------------------
                    __append('<i class="fa fa-sort"></i>\n              </a>\n            </th>\n            ')
                    # <Static value=Dict(keys=[Constant(value='scope', kind=None), Constant(value='class', kind=None)], values=[Constant(value='col', kind=None), Constant(value='zmi-object-date text-right hidden-xs', kind=None)]) name=None at 261489d2990> -> __attrs_2616853339472
                    __attrs_2616853339472 = _static_2616824867536
                    # <th ... (0:0)
                    # --------------------------------------------------------
                    __append('<th scope="col" class="zmi-object-date text-right hidden-xs">\n              ')
                    # <Static value=Dict(keys=[Constant(value='title', kind=None), ..., Constant(value='class', kind=None)], values=[Constant(value='Sort Ascending by Modification Date', kind=None), ..., Constant(value="python:skey=='_p_mtime' and 'zmi-sort_key' or None", kind=None)]) name=None at 261489d04d0> -> __attrs_2616794645200
                    __attrs_2616794645200 = _static_2616821430352
                    # <a ... (0:0)
                    # --------------------------------------------------------
                    __append('<a')
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616794650576
                    __default_2616794650576 = _DEFAULT_MARKER
                    # <Substitution 'string:Sort ${rkey_alt_up} by modification date' (63:39)> -> __attr_title
                    __token = 3451
                    try:
                        __zt_tmp = __attrs_2616794645200
                    except NameError:
                        __zt_tmp = None
                    __attr_title = _static_2616820387344('string', 'Sort ${rkey_alt_up} by modification date', econtext=econtext)(_static_2616820385168(econtext, __zt_tmp))
                    __attr_title = __quote(__attr_title, '"', '&quot;', 'Sort Ascending by Modification Date', _DEFAULT_MARKER)
                    if __attr_title is not None:
                        __append(' title="%s"' % __attr_title)
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616794649424
                    __default_2616794649424 = _DEFAULT_MARKER
                    # <Substitution 'string:${my_url}?skey=_p_mtime&rkey=${rkey_alt}' (64:37)> -> __attr_href
                    __token = 3537
                    try:
                        __zt_tmp = __attrs_2616794645200
                    except NameError:
                        __zt_tmp = None
                    __attr_href = _static_2616788235280('string', '${my_url}?skey=_p_mtime&rkey=${rkey_alt}', econtext=econtext)(_static_2616788229968(econtext, __zt_tmp))
                    __attr_href = __quote(__attr_href, '"', '&quot;', '?skey=_p_mtime&rkey=asc', _DEFAULT_MARKER)
                    if __attr_href is not None:
                        __append(' href="%s"' % __attr_href)
                    # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616794646864
                    __default_2616794646864 = _DEFAULT_MARKER
                    # <Substitution "python:skey=='_p_mtime' and 'zmi-sort_key' or None" (65:37)> -> __attr_class
                    __token = 3624
                    try:
                        __zt_tmp = __attrs_2616794645200
                    except NameError:
                        __zt_tmp = None
                    __attr_class = _static_2616820389072('python', "skey=='_p_mtime' and 'zmi-sort_key' or None", econtext=econtext)(_static_2616828507088(econtext, __zt_tmp))
                    __attr_class = __quote(__attr_class, '"', '&quot;', None, _DEFAULT_MARKER)
                    if __attr_class is not None:
                        __append(' class="%s"' % __attr_class)
                    __append('>\n                Last Modified\n                ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='fa fa-sort', kind=None)]) name=None at 261451d8390> -> __attrs_2616826160528
                    __attrs_2616826160528 = _static_2616828510032
                    # <i ... (0:0)
                    # --------------------------------------------------------
                    __append('<i class="fa fa-sort"></i>\n              </a>\n            </th>\n          </tr>\n        </thead>\n        ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616826161680
                    __attrs_2616826161680 = _static_2616822084048
                    # <tbody ... (0:0)
                    # --------------------------------------------------------
                    __append('<tbody>\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616826157840
                    __attrs_2616826157840 = _static_2616821429584
                    __backup_ob_dict_2616827821056 = get('ob_dict', __marker)
                    # <Value 'obs' (74:34)> -> __iterator
                    __token = 3906
                    try:
                        __zt_tmp = __attrs_2616826157840
                    except NameError:
                        __zt_tmp = None
                    __iterator = _static_2616758810064('path', 'obs', econtext=econtext)(_static_2616820048400(econtext, __zt_tmp))
                    __iterator, ____index_2616826159376 = getname('repeat')('ob_dict', __iterator)
                    econtext['ob_dict'] = None
                    for __item in __iterator:
                        econtext['ob_dict'] = __item
                        # <tr ... (0:0)
                        # --------------------------------------------------------
                        __append('<tr>\n            ')
                        # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616826165072
                        __attrs_2616826165072 = _static_2616821921616
                        __backup_ob_2616827622656 = get('ob', __marker)
                        # <Value 'nocall:ob_dict/obj' (75:32)> -> __value
                        __token = 3944
                        try:
                            __zt_tmp = __attrs_2616826165072
                        except NameError:
                            __zt_tmp = None
                        __value = _static_2616827202256('nocall', 'ob_dict/obj', econtext=econtext)(_static_2616827211088(econtext, __zt_tmp))
                        econtext['ob'] = __value
                        __append('\n              ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='onclick', kind=None)], values=[Constant(value='zmi-object-check text-right', kind=None), Constant(value="$(this).children('input').trigger('click');", kind=None)]) name=None at 26146fe5ed0> -> __attrs_2616826153168
                        __attrs_2616826153168 = _static_2616827209424
                        # <td ... (0:0)
                        # --------------------------------------------------------
                        __append('<td class="zmi-object-check text-right" onclick="$(this).children(\'input\').trigger(\'click\');">\n                ')
                        # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='checkbox', kind=None), ..., Constant(value='ob_dict/id', kind=None)]) name=None at 26146fe4610> -> __attrs_2616822141008
                        __attrs_2616822141008 = _static_2616819232016
                        # <input ... (0:0)
                        # --------------------------------------------------------
                        __append('<input type="checkbox" class="checkbox-list-item" name="ids:list"                   onclick="event.stopPropagation();select_objectitem($(this));"')
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616822151056
                        __default_2616822151056 = _DEFAULT_MARKER
                        # <Substitution 'ob_dict/id' (77:104)> -> __attr_value
                        __token = 4178
                        try:
                            __zt_tmp = __attrs_2616822141008
                        except NameError:
                            __zt_tmp = None
                        __attr_value = _static_2616828792144('path', 'ob_dict/id', econtext=econtext)(_static_2616828790800(econtext, __zt_tmp))
                        __attr_value = __quote(__attr_value, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_value is not None:
                            __append(' value="%s"' % __attr_value)
                        __append(' />\n              </td>\n              ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='onclick', kind=None)], values=[Constant(value='zmi-object-type', kind=None), Constant(value="$(this).prev().children('input').trigger('click')", kind=None)]) name=None at 26146c10b90> -> __attrs_2616819765264
                        __attrs_2616819765264 = _static_2616821976016
                        # <td ... (0:0)
                        # --------------------------------------------------------
                        __append('<td class="zmi-object-type" onclick="$(this).prev().children(\'input\').trigger(\'click\')">\n                ')
                        # <Static value=Dict(keys=[Constant(value='title', kind=None), Constant(value='class', kind=None)], values=[Constant(value='Broken object', kind=None), Constant(value='fas fa-ban text-danger', kind=None)]) name=None at 261469ce190> -> __attrs_2616819765840
                        __attrs_2616819765840 = _static_2616794257424
                        # <i ... (0:0)
                        # --------------------------------------------------------
                        __append('<i')
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819774736
                        __default_2616819774736 = _DEFAULT_MARKER
                        # <Substitution 'ob/meta_type | default' (81:122)> -> __attr_title
                        __token = 4519
                        try:
                            __zt_tmp = __attrs_2616819765840
                        except NameError:
                            __zt_tmp = None
                        __attr_title = _static_2616850588048('path', 'ob/meta_type | default', econtext=econtext)(_static_2616850589520(econtext, __zt_tmp))
                        __attr_title = __quote(__attr_title, '"', '&quot;', 'Broken object', _DEFAULT_MARKER)
                        if __attr_title is not None:
                            __append(' title="%s"' % __attr_title)
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819767184
                        __default_2616819767184 = _DEFAULT_MARKER
                        # <Substitution 'ob/zmi_icon | default' (81:94)> -> __attr_class
                        __token = 4491
                        try:
                            __zt_tmp = __attrs_2616819765840
                        except NameError:
                            __zt_tmp = None
                        __attr_class = _static_2616787127440('path', 'ob/zmi_icon | default', econtext=econtext)(_static_2616826002640(econtext, __zt_tmp))
                        __attr_class = __quote(__attr_class, '"', '&quot;', 'fas fa-ban text-danger', _DEFAULT_MARKER)
                        if __attr_class is not None:
                            __append(' class="%s"' % __attr_class)
                        __append('>\n                  ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='sr-only', kind=None)]) name=None at 261469cd350> -> __attrs_2616819763792
                        __attrs_2616819763792 = _static_2616821276368
                        # <span ... (0:0)
                        # --------------------------------------------------------
                        __append('<span class="sr-only">')
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819764240
                        __default_2616819764240 = _DEFAULT_MARKER
                        # <Value 'ob/meta_type | default' (82:53)> -> __cache_2616819768592
                        __token = 4598
                        try:
                            __zt_tmp = __attrs_2616819763792
                        except NameError:
                            __zt_tmp = None
                        __cache_2616819768592 = _static_2616794909008('path', 'ob/meta_type | default', econtext=econtext)(_static_2616794916944(econtext, __zt_tmp))
                        # <BinOp left=<Value 'ob/meta_type | default' (82:53)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261469cc590> -> __condition
                        __expression = __cache_2616819768592
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            __append('Broken object')
                        else:
                            __content = __cache_2616819768592
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append(__content)
                        __append('</span>\n                </i>\n              </td>\n              ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-id', kind=None)]) name=None at 261469cde50> -> __attrs_2616826877136
                        __attrs_2616826877136 = _static_2616821272464
                        # <td ... (0:0)
                        # --------------------------------------------------------
                        __append('<td class="zmi-object-id">\n                ')
                        # <Static value=Dict(keys=[Constant(value='href', kind=None)], values=[Constant(value="python:'%s/manage_workspace'%(ob_dict['quoted_id'])", kind=None)]) name=None at 26147096990> -> __attrs_2616826873360
                        __attrs_2616826873360 = _static_2616793337360
                        # <a ... (0:0)
                        # --------------------------------------------------------
                        __append('<a')
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616826876880
                        __default_2616826876880 = _DEFAULT_MARKER
                        # <Substitution "python:'%s/manage_workspace'%(ob_dict['quoted_id'])" (86:40)> -> __attr_href
                        __token = 4765
                        try:
                            __zt_tmp = __attrs_2616826873360
                        except NameError:
                            __zt_tmp = None
                        __attr_href = _static_2616794922384('python', "'%s/manage_workspace'%(ob_dict['quoted_id'])", econtext=econtext)(_static_2616826000912(econtext, __zt_tmp))
                        __attr_href = __quote(__attr_href, '"', '&quot;', None, _DEFAULT_MARKER)
                        if __attr_href is not None:
                            __append(' href="%s"' % __attr_href)
                        __append('>\n                  ')
                        # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616826878480
                        __attrs_2616826878480 = _static_2616787129552
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616826878416
                        __default_2616826878416 = _DEFAULT_MARKER
                        # <Value 'ob_dict/id' (87:37)> -> __cache_2616826875728
                        __token = 4856
                        try:
                            __zt_tmp = __attrs_2616826878480
                        except NameError:
                            __zt_tmp = None
                        __cache_2616826875728 = _static_2616788223760('path', 'ob_dict/id', econtext=econtext)(_static_2616794260880(econtext, __zt_tmp))
                        # <BinOp left=<Value 'ob_dict/id' (87:37)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261470945d0> -> __condition
                        __expression = __cache_2616826875728
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            # <span ... (0:0)
                            # --------------------------------------------------------
                            __append('<span>Id</span>')
                        else:
                            __content = __cache_2616826875728
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append(__content)
                        __append('\n                  ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='title', kind=None)], values=[Constant(value='badge badge-warning', kind=None), Constant(value='This item has been locked by WebDAV', kind=None)]) name=None at 26147096c50> -> __attrs_2616819700176
                        __attrs_2616819700176 = _static_2616828602832
                        # <Value 'ob/wl_isLocked | nothing' (88:111)> -> __condition
                        __token = 4989
                        try:
                            __zt_tmp = __attrs_2616819700176
                        except NameError:
                            __zt_tmp = None
                        __condition = _static_2616821018064('path', 'ob/wl_isLocked | nothing', econtext=econtext)(_static_2616821013520(econtext, __zt_tmp))
                        if __condition:
                            # <span ... (0:0)
                            # --------------------------------------------------------
                            __append('<span class="badge badge-warning" title="This item has been locked by WebDAV">\n                    ')
                            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='fa fa-lock', kind=None)]) name=None at 261469bd610> -> __attrs_2616819696592
                            __attrs_2616819696592 = _static_2616821013136
                            # <i ... (0:0)
                            # --------------------------------------------------------
                            __append('<i class="fa fa-lock"></i>\n                  </span>')
                        __append('\n                  ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-object-title hidden-xs', kind=None)]) name=None at 261469bcbd0> -> __attrs_2616819698128
                        __attrs_2616819698128 = _static_2616788585744
                        # <Value 'ob/title|nothing' (91:74)> -> __condition
                        __token = 5163
                        try:
                            __zt_tmp = __attrs_2616819698128
                        except NameError:
                            __zt_tmp = None
                        __condition = _static_2616819963216('path', 'ob/title|nothing', econtext=econtext)(_static_2616819971472(econtext, __zt_tmp))
                        if __condition:
                            # <span ... (0:0)
                            # --------------------------------------------------------
                            __append('<span class="zmi-object-title hidden-xs">\n                    &nbsp;(')
                            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616819696144
                            __attrs_2616819696144 = _static_2616819963792
                            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819707536
                            __default_2616819707536 = _DEFAULT_MARKER
                            # <Value 'ob/title' (92:46)> -> __cache_2616819707280
                            __token = 5228
                            try:
                                __zt_tmp = __attrs_2616819696144
                            except NameError:
                                __zt_tmp = None
                            __cache_2616819707280 = _static_2616786352016('path', 'ob/title', econtext=econtext)(_static_2616783162512(econtext, __zt_tmp))
                            # <BinOp left=<Value 'ob/title' (92:46)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261469be0d0> -> __condition
                            __expression = __cache_2616819707280
                            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                            __value = _DEFAULT_MARKER
                            __condition = __expression is __value
                            if __condition:
                                # <span ... (0:0)
                                # --------------------------------------------------------
                                __append('<span></span>')
                            else:
                                __content = __cache_2616819707280
                                __content = __quote(__content, None, '\xad', None, None)
                                if __content is not None:
                                    __append(__content)
                            __append(')\n                  </span>')
                        __append('\n                </a>\n              </td>\n              ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='text-right zmi-object-size hidden-xs', kind=None)]) name=None at 261469bced0> -> __attrs_2616819698576
                        __attrs_2616819698576 = _static_2616793349712
                        # <td ... (0:0)
                        # --------------------------------------------------------
                        __append('<td class="text-right zmi-object-size hidden-xs">')
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819696912
                        __default_2616819696912 = _DEFAULT_MARKER
                        # <Value 'python:here.compute_size(ob)' (96:76)> -> __cache_2616819707216
                        __token = 5390
                        try:
                            __zt_tmp = __attrs_2616819698576
                        except NameError:
                            __zt_tmp = None
                        __cache_2616819707216 = _static_2616793552400('python', 'here.compute_size(ob)', econtext=econtext)(_static_2616793554256(econtext, __zt_tmp))
                        # <BinOp left=<Value 'python:here.compute_size(ob)' (96:76)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261469bec90> -> __condition
                        __expression = __cache_2616819707216
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            __append('\n              ')
                        else:
                            __content = __cache_2616819707216
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append(__content)
                        __append('</td>\n              ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='text-right zmi-object-date hidden-xs pl-3', kind=None)]) name=None at 26146ae0cd0> -> __attrs_2616820897424
                        __attrs_2616820897424 = _static_2616825967504
                        # <td ... (0:0)
                        # --------------------------------------------------------
                        __append('<td class="text-right zmi-object-date hidden-xs pl-3">')
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616819709520
                        __default_2616819709520 = _DEFAULT_MARKER
                        # <Value 'python:here.last_modified(ob)' (98:81)> -> __cache_2616819706960
                        __token = 5522
                        try:
                            __zt_tmp = __attrs_2616820897424
                        except NameError:
                            __zt_tmp = None
                        __cache_2616819706960 = _static_2616821541072('python', 'here.last_modified(ob)', econtext=econtext)(_static_2616821540624(econtext, __zt_tmp))
                        # <BinOp left=<Value 'python:here.last_modified(ob)' (98:81)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 261469bde50> -> __condition
                        __expression = __cache_2616819706960
                        # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                        __value = _DEFAULT_MARKER
                        __condition = __expression is __value
                        if __condition:
                            __append('\n              ')
                        else:
                            __content = __cache_2616819706960
                            __content = __quote(__content, None, '\xad', None, None)
                            if __content is not None:
                                __append(__content)
                        __append('</td>\n            ')
                        if __backup_ob_2616827622656 is __marker:
                            del econtext['ob']
                        else:
                            econtext['ob'] = __backup_ob_2616827622656
                        __append('\n          </tr>')
                        ____index_2616826159376 -= 1
                        if ____index_2616826159376 > 0:
                            __append('\n          ')
                    if __backup_ob_dict_2616827821056 is __marker:
                        del econtext['ob_dict']
                    else:
                        econtext['ob_dict'] = __backup_ob_dict_2616827821056
                    __append('\n        </tbody>\n      </table>')
                __append('\n\n      ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='form-group form-inline zmi-controls', kind=None)]) name=None at 26144fa8ad0> -> __attrs_2616820902160
                __attrs_2616820902160 = _static_2616820809616
                __backup_delete_allowed_2616827860800 = get('delete_allowed', __marker)
                # <Value "python:sm.checkPermission('Delete objects', context)" (106:23)> -> __value
                __token = 5737
                try:
                    __zt_tmp = __attrs_2616820902160
                except NameError:
                    __zt_tmp = None
                __value = _static_2616820243088('python', "sm.checkPermission('Delete objects', context)", econtext=econtext)(_static_2616783035408(econtext, __zt_tmp))
                econtext['delete_allowed'] = __value
                # <Value 'obs' (106:92)> -> __condition
                __token = 5806
                try:
                    __zt_tmp = __attrs_2616820902160
                except NameError:
                    __zt_tmp = None
                __condition = _static_2616851875216('path', 'obs', econtext=econtext)(_static_2616851958736(econtext, __zt_tmp))
                if __condition:
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div class="form-group form-inline zmi-controls">\n        ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='input-group', kind=None)]) name=None at 26146ae3a50> -> __attrs_2616828329872
                    __attrs_2616828329872 = _static_2616825965904
                    # <div ... (0:0)
                    # --------------------------------------------------------
                    __append('<div class="input-group">\n          ')
                    # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616828319632
                    __attrs_2616828319632 = _static_2616821500048
                    # <Value 'not:context/dontAllowCopyAndPaste|nothing' (108:37)> -> __condition
                    __token = 5883
                    try:
                        __zt_tmp = __attrs_2616828319632
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_2616821500304('not', 'context/dontAllowCopyAndPaste|nothing', econtext=econtext)(_static_2616850588816(econtext, __zt_tmp))
                    if __condition:
                        __append('\n            ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary mr-2', kind=None), ..., Constant(value='Rename', kind=None)]) name=None at 261471f5950> -> __attrs_2616851432400
                        __attrs_2616851432400 = _static_2616783033552
                        # <input ... (0:0)
                        # --------------------------------------------------------
                        __append('<input class="btn btn-primary mr-2" type="submit" name="manage_renameForm:method" value="Rename" />\n            ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary mr-2', kind=None), ..., Constant(value='Cut', kind=None)]) name=None at 26148803350> -> __attrs_2616822266128
                        __attrs_2616822266128 = _static_2616851622224
                        # <Value 'delete_allowed' (110:121)> -> __condition
                        __token = 6160
                        try:
                            __zt_tmp = __attrs_2616822266128
                        except NameError:
                            __zt_tmp = None
                        __condition = _static_2616821825936('path', 'delete_allowed', econtext=econtext)(_static_2616821834512(econtext, __zt_tmp))
                        if __condition:
                            # <input ... (0:0)
                            # --------------------------------------------------------
                            __append('<input class="btn btn-primary mr-2" type="submit" name="manage_cutObjects:method" value="Cut" />')
                        __append('\n            ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary mr-2', kind=None), ..., Constant(value='Copy', kind=None)]) name=None at 26146c2fad0> -> __attrs_2616798089680
                        __attrs_2616798089680 = _static_2616821828560
                        # <input ... (0:0)
                        # --------------------------------------------------------
                        __append('<input class="btn btn-primary mr-2" type="submit" name="manage_copyObjects:method" value="Copy" />\n            ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary mr-2', kind=None), ..., Constant(value='Paste', kind=None)]) name=None at 26145523bd0> -> __attrs_2616821371216
                        __attrs_2616821371216 = _static_2616821835024
                        # <Value 'here/cb_dataValid' (112:125)> -> __condition
                        __token = 6415
                        try:
                            __zt_tmp = __attrs_2616821371216
                        except NameError:
                            __zt_tmp = None
                        __condition = _static_2616850797648('path', 'here/cb_dataValid', econtext=econtext)(_static_2616850794960(econtext, __zt_tmp))
                        if __condition:
                            # <input ... (0:0)
                            # --------------------------------------------------------
                            __append('<input class="btn btn-primary mr-2" type="submit" name="manage_pasteObjects:method" value="Paste" />')
                        __append('\n          ')
                    __append('\n          ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary mr-2', kind=None), ..., Constant(value='Delete', kind=None)]) name=None at 26146c2f4d0> -> __attrs_2616821371088
                    __attrs_2616821371088 = _static_2616850807056
                    # <Value 'delete_allowed' (114:122)> -> __condition
                    __token = 6587
                    try:
                        __zt_tmp = __attrs_2616821371088
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_2616850862736('path', 'delete_allowed', econtext=econtext)(_static_2616850862672(econtext, __zt_tmp))
                    if __condition:
                        # <input ... (0:0)
                        # --------------------------------------------------------
                        __append('<input class="btn btn-primary mr-2" type="submit" name="manage_delObjects:method" value="Delete" />')
                    __append('\n          ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary mr-2', kind=None), ..., Constant(value='Import/Export', kind=None)]) name=None at 26146b561d0> -> __attrs_2616791988688
                    __attrs_2616791988688 = _static_2616850865744
                    # <Value "python:sm.checkPermission('Import/Export objects', context)" (115:135)> -> __condition
                    __token = 6741
                    try:
                        __zt_tmp = __attrs_2616791988688
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_2616825326992('python', "sm.checkPermission('Import/Export objects', context)", econtext=econtext)(_static_2616825318416(econtext, __zt_tmp))
                    if __condition:
                        # <input ... (0:0)
                        # --------------------------------------------------------
                        __append('<input class="btn btn-primary mr-2" type="submit" name="manage_importExportForm:method" value="Import/Export" />')
                    __append('\n\n          ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='input-group', kind=None)]) name=None at 26144f4c450> -> __attrs_2616852977680
                    __attrs_2616852977680 = _static_2616860175952
                    # <Value "python: has_order_support and sm.checkPermission('Manage properties', context)" (117:50)> -> __condition
                    __token = 6856
                    try:
                        __zt_tmp = __attrs_2616852977680
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_2616822576592('python', " has_order_support and sm.checkPermission('Manage properties', context)", econtext=econtext)(_static_2616822575248(econtext, __zt_tmp))
                    if __condition:
                        # <div ... (0:0)
                        # --------------------------------------------------------
                        __append('<div class="input-group">\n            ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='name', kind=None)], values=[Constant(value='form-control btn btn-primary', kind=None), Constant(value='delta:int', kind=None)]) name=None at 26146f77a10> -> __attrs_2616825704592
                        __attrs_2616825704592 = _static_2616822574800
                        # <select ... (0:0)
                        # --------------------------------------------------------
                        __append('<select class="form-control btn btn-primary" name="delta:int">\n              ')
                        # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616820649296
                        __attrs_2616820649296 = _static_2616797695248
                        __backup_val_2616827458496 = get('val', __marker)
                        # <Value 'python:range(1,min(5,len(obs)))' (119:38)> -> __iterator
                        __token = 7050
                        try:
                            __zt_tmp = __attrs_2616820649296
                        except NameError:
                            __zt_tmp = None
                        __iterator = _static_2616822763088('python', 'range(1,min(5,len(obs)))', econtext=econtext)(_static_2616794442448(econtext, __zt_tmp))
                        __iterator, ____index_2616820660240 = getname('repeat')('val', __iterator)
                        econtext['val'] = None
                        for __item in __iterator:
                            econtext['val'] = __item
                            # <option ... (0:0)
                            # --------------------------------------------------------
                            __append('<option>')
                            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616820659792
                            __default_2616820659792 = _DEFAULT_MARKER
                            # <Value 'val' (119:84)> -> __cache_2616820649872
                            __token = 7096
                            try:
                                __zt_tmp = __attrs_2616820649296
                            except NameError:
                                __zt_tmp = None
                            __cache_2616820649872 = _static_2616792102224('path', 'val', econtext=econtext)(_static_2616822763344(econtext, __zt_tmp))
                            # <BinOp left=<Value 'val' (119:84)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146aa4c10> -> __condition
                            __expression = __cache_2616820649872
                            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                            __value = _DEFAULT_MARKER
                            __condition = __expression is __value
                            if __condition:
                                pass
                            else:
                                __content = __cache_2616820649872
                                __content = __quote(__content, None, '\xad', None, None)
                                if __content is not None:
                                    __append(__content)
                            __append('</option>')
                            ____index_2616820660240 -= 1
                            if ____index_2616820660240 > 0:
                                __append('\n              ')
                        if __backup_val_2616827458496 is __marker:
                            del econtext['val']
                        else:
                            econtext['val'] = __backup_val_2616827458496
                        __append('\n              ')
                        # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616820649744
                        __attrs_2616820649744 = _static_2616850796624
                        __backup_val_2616827458304 = get('val', __marker)
                        # <Value 'python:range(5,len(obs),5)' (120:38)> -> __iterator
                        __token = 7142
                        try:
                            __zt_tmp = __attrs_2616820649744
                        except NameError:
                            __zt_tmp = None
                        __iterator = _static_2616821509712('python', 'range(5,len(obs),5)', econtext=econtext)(_static_2616797999632(econtext, __zt_tmp))
                        __iterator, ____index_2616820646800 = getname('repeat')('val', __iterator)
                        econtext['val'] = None
                        for __item in __iterator:
                            econtext['val'] = __item
                            # <option ... (0:0)
                            # --------------------------------------------------------
                            __append('<option>')
                            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616820651344
                            __default_2616820651344 = _DEFAULT_MARKER
                            # <Value 'val' (120:79)> -> __cache_2616820650320
                            __token = 7183
                            try:
                                __zt_tmp = __attrs_2616820649744
                            except NameError:
                                __zt_tmp = None
                            __cache_2616820650320 = _static_2616792130576('path', 'val', econtext=econtext)(_static_2616792132304(econtext, __zt_tmp))
                            # <BinOp left=<Value 'val' (120:79)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146aa5250> -> __condition
                            __expression = __cache_2616820650320
                            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                            __value = _DEFAULT_MARKER
                            __condition = __expression is __value
                            if __condition:
                                pass
                            else:
                                __content = __cache_2616820650320
                                __content = __quote(__content, None, '\xad', None, None)
                                if __content is not None:
                                    __append(__content)
                            __append('</option>')
                            ____index_2616820646800 -= 1
                            if ____index_2616820646800 > 0:
                                __append('\n              ')
                        if __backup_val_2616827458304 is __marker:
                            del econtext['val']
                        else:
                            econtext['val'] = __backup_val_2616827458304
                        __append('\n            </select>\n            ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='input-group-append', kind=None)]) name=None at 261469e9d10> -> __attrs_2616819889616
                        __attrs_2616819889616 = _static_2616797973584
                        # <div ... (0:0)
                        # --------------------------------------------------------
                        __append('<div class="input-group-append">\n              ')
                        # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='class', kind=None)], values=[Constant(value='submit', kind=None), ..., Constant(value='btn btn-primary', kind=None)]) name=None at 261469e8750> -> __attrs_2616828395152
                        __attrs_2616828395152 = _static_2616820843024
                        # <button ... (0:0)
                        # --------------------------------------------------------
                        __append('<button type="submit" name="manage_move_objects_up:method" value="Move up"                 title="Move selected items up" class="btn btn-primary">\n                ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='fas fa-arrow-up', kind=None)]) name=None at 26147207390> -> __attrs_2616827748560
                        __attrs_2616827748560 = _static_2616782813008
                        # <i ... (0:0)
                        # --------------------------------------------------------
                        __append('<i class="fas fa-arrow-up"></i>\n              </button>\n              ')
                        # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='class', kind=None)], values=[Constant(value='submit', kind=None), ..., Constant(value='btn btn-primary rounded-right', kind=None)]) name=None at 2614716b0d0> -> __attrs_2616851971792
                        __attrs_2616851971792 = _static_2616794581776
                        # <button ... (0:0)
                        # --------------------------------------------------------
                        __append('<button type="submit" name="manage_move_objects_down:method" value="Move down"                 title="Move selected items down" class="btn btn-primary rounded-right">\n                ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='fas fa-arrow-down', kind=None)]) name=None at 26148883b10> -> __attrs_2616758682192
                        __attrs_2616758682192 = _static_2616794375696
                        # <i ... (0:0)
                        # --------------------------------------------------------
                        __append('<i class="fas fa-arrow-down"></i>\n              </button>\n            </div>\n            ')
                        # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='class', kind=None)], values=[Constant(value='submit', kind=None), ..., Constant(value='btn btn-primary ml-2 mr-2', kind=None)]) name=None at 26142f8c5d0> -> __attrs_2616825898512
                        __attrs_2616825898512 = _static_2616788997072
                        # <button ... (0:0)
                        # --------------------------------------------------------
                        __append('<button type="submit" name="manage_move_objects_to_top:method" value="Move to top"               title="Move selected items to top" class="btn btn-primary ml-2 mr-2">\n              ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='style', kind=None)], values=[Constant(value='fas fa-arrow-up', kind=None), Constant(value='border-top: 0.2rem solid silver;', kind=None)]) name=None at 26146fa78d0> -> __attrs_2616825904208
                        __attrs_2616825904208 = _static_2616821227472
                        # <i ... (0:0)
                        # --------------------------------------------------------
                        __append('<i class="fas fa-arrow-up" style="border-top: 0.2rem solid silver;"></i>\n            </button>\n            ')
                        # <Static value=Dict(keys=[Constant(value='type', kind=None), ..., Constant(value='class', kind=None)], values=[Constant(value='submit', kind=None), ..., Constant(value='btn btn-primary', kind=None)]) name=None at 26146fa5610> -> __attrs_2616825898960
                        __attrs_2616825898960 = _static_2616821226256
                        # <button ... (0:0)
                        # --------------------------------------------------------
                        __append('<button type="submit" name="manage_move_objects_to_bottom:method" value="Move to bottom"                title="Move selected items to bottom" class="btn btn-primary">\n              ')
                        # <Static value=Dict(keys=[Constant(value='class', kind=None), Constant(value='style', kind=None)], values=[Constant(value='fas fa-arrow-down', kind=None), Constant(value='border-bottom: 0.2rem solid silver;', kind=None)]) name=None at 26146fa6850> -> __attrs_2616828418896
                        __attrs_2616828418896 = _static_2616852312848
                        # <i ... (0:0)
                        # --------------------------------------------------------
                        __append('<i class="fas fa-arrow-down" style="border-bottom: 0.2rem solid silver;"></i>\n            </button>\n          </div>')
                    __append('\n        </div>\n\n      </div>')
                if __backup_delete_allowed_2616827860800 is __marker:
                    del econtext['delete_allowed']
                else:
                    econtext['delete_allowed'] = __backup_delete_allowed_2616827860800
                __append('\n    ')
            __append('\n\n    ')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616828423312
            __attrs_2616828423312 = _static_2616821235088
            # <Value 'not:obs' (146:26)> -> __condition
            __token = 8444
            try:
                __zt_tmp = __attrs_2616828423312
            except NameError:
                __zt_tmp = None
            __condition = _static_2616825603216('not', 'obs', econtext=econtext)(_static_2616825601232(econtext, __zt_tmp))
            if __condition:
                __append('\n      ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='alert alert-info mt-4 mb-4', kind=None)]) name=None at 2614720cd10> -> __attrs_2616828413520
                __attrs_2616828413520 = _static_2616825607632
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="alert alert-info mt-4 mb-4">\n        There are currently no items in ')
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616782806672
                __attrs_2616782806672 = _static_2616825600400
                # <em ... (0:0)
                # --------------------------------------------------------
                __append('<em>')
                # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616823323856
                __default_2616823323856 = _DEFAULT_MARKER
                # <Value 'here/title_or_id' (148:57)> -> __cache_2616828418128
                __token = 8558
                try:
                    __zt_tmp = __attrs_2616782806672
                except NameError:
                    __zt_tmp = None
                __cache_2616828418128 = _static_2616786059024('path', 'here/title_or_id', econtext=econtext)(_static_2616786051600(econtext, __zt_tmp))
                # <BinOp left=<Value 'here/title_or_id' (148:57)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 2614720c850> -> __condition
                __expression = __cache_2616828418128
                # <Symbol value=<DEFAULT> at 261418bf450> -> __value
                __value = _DEFAULT_MARKER
                __condition = __expression is __value
                if __condition:
                    pass
                else:
                    __content = __cache_2616828418128
                    __content = __quote(__content, None, '\xad', None, None)
                    if __content is not None:
                        __append(__content)
                __append('</em>.\n      </div>\n      ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='form-group', kind=None)]) name=None at 2614468df10> -> __attrs_2616782805520
                __attrs_2616782805520 = _static_2616794082704
                # <div ... (0:0)
                # --------------------------------------------------------
                __append('<div class="form-group">\n        ')
                # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616794902160
                __attrs_2616794902160 = _static_2616797699216
                # <Value 'not:context/dontAllowCopyAndPaste|nothing' (151:35)> -> __condition
                __token = 8662
                try:
                    __zt_tmp = __attrs_2616794902160
                except NameError:
                    __zt_tmp = None
                __condition = _static_2616821235664('not', 'context/dontAllowCopyAndPaste|nothing', econtext=econtext)(_static_2616821220240(econtext, __zt_tmp))
                if __condition:
                    __append('\n          ')
                    # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary', kind=None), ..., Constant(value='Paste', kind=None)]) name=None at 26144c04a90> -> __attrs_2616788534224
                    __attrs_2616788534224 = _static_2616822658000
                    # <Value 'here/cb_dataValid' (152:118)> -> __condition
                    __token = 8824
                    try:
                        __zt_tmp = __attrs_2616788534224
                    except NameError:
                        __zt_tmp = None
                    __condition = _static_2616794584080('path', 'here/cb_dataValid', econtext=econtext)(_static_2616794588560(econtext, __zt_tmp))
                    if __condition:
                        # <input ... (0:0)
                        # --------------------------------------------------------
                        __append('<input class="btn btn-primary" type="submit" name="manage_pasteObjects:method" value="Paste" />')
                    __append('\n        ')
                __append('\n        ')
                # <Static value=Dict(keys=[Constant(value='class', kind=None), ..., Constant(value='value', kind=None)], values=[Constant(value='btn btn-primary', kind=None), ..., Constant(value='Import/Export', kind=None)]) name=None at 26144c04690> -> __attrs_2616821571280
                __attrs_2616821571280 = _static_2616826187344
                # <Value "python:sm.checkPermission('Import/Export objects', context)" (154:128)> -> __condition
                __token = 9000
                try:
                    __zt_tmp = __attrs_2616821571280
                except NameError:
                    __zt_tmp = None
                __condition = _static_2616793620048('python', "sm.checkPermission('Import/Export objects', context)", econtext=econtext)(_static_2616793626832(econtext, __zt_tmp))
                if __condition:
                    # <input ... (0:0)
                    # --------------------------------------------------------
                    __append('<input class="btn btn-primary" type="submit" name="manage_importExportForm:method" value="Import/Export" />')
                __append('\n      </div>\n    ')
            __append('\n  </form>')
            if __backup_my_url_2616827922304 is __marker:
                del econtext['my_url']
            else:
                econtext['my_url'] = __backup_my_url_2616827922304
            if __backup_obs_2616827922240 is __marker:
                del econtext['obs']
            else:
                econtext['obs'] = __backup_obs_2616827922240
            if __backup_rkey_alt_up_2616859099840 is __marker:
                del econtext['rkey_alt_up']
            else:
                econtext['rkey_alt_up'] = __backup_rkey_alt_up_2616859099840
            if __backup_rkey_alt_2616851889984 is __marker:
                del econtext['rkey_alt']
            else:
                econtext['rkey_alt'] = __backup_rkey_alt_2616851889984
            if __backup_rkey_2616850092480 is __marker:
                del econtext['rkey']
            else:
                econtext['rkey'] = __backup_rkey_2616850092480
            if __backup_skey_2616853944960 is __marker:
                del econtext['skey']
            else:
                econtext['skey'] = __backup_skey_2616853944960
            if __backup_default_sort_2616852973248 is __marker:
                del econtext['default_sort']
            else:
                econtext['default_sort'] = __backup_default_sort_2616852973248
            if __backup_sm_2616851435968 is __marker:
                del econtext['sm']
            else:
                econtext['sm'] = __backup_sm_2616851435968
            if __backup_has_order_support_2616853662016 is __marker:
                del econtext['has_order_support']
            else:
                econtext['has_order_support'] = __backup_has_order_support_2616853662016
            __append('\n\n</main>\n\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616795151760
            __attrs_2616795151760 = _static_2616820401232
            # <script ... (0:0)
            # --------------------------------------------------------
            __append('<script>\n  // +++++++++++++++++++++++++++\n  // Item  Selection\n  // +++++++++++++++++++++++++++\n  function checkbox_all() {\n    var checkboxes = document.getElementsByClassName(\'checkbox-list-item\');\n    // Toggle Highlighting CSS-Class\n    if (document.getElementById(\'checkAll\').checked) {\n      $(\'table.objectItems tbody tr\').addClass(\'checked\');\n    } else {\n      $(\'table.objectItems tbody tr\').removeClass(\'checked\');\n    };\n    // Set Checkbox like checkAll-Box\n    for (i = 0; i < checkboxes.length; i++) {\n      checkboxes[i].checked = document.getElementById(\'checkAll\').checked;\n    }\n  };\n\n  function zmicontrols_visible() {\n    var zmicontrols = $(\'form#objectItems .zmi-controls\');\n    var zmicontrols_top = zmicontrols.offset().top;\n    var zmicontrols_bottom = zmicontrols_top + zmicontrols.outerHeight();\n    var viewport_top = $(window).scrollTop();\n    var viewport_bottom = viewport_top + $(window).height();\n    return zmicontrols_bottom > viewport_top && zmicontrols_top < viewport_bottom;\n  };\n\n  function select_objectitem(ob) {\n    ob.parent().parent().toggleClass(\'checked\');\n    if ( !zmicontrols_visible() ) {\n      $(\'form#objectItems\').addClass(\'selected\');\n    }\n    // Anything selected?\n    var checkboxes = document.getElementsByClassName(\'checkbox-list-item\');\n    var selected = false;\n    for (i = 0; i < checkboxes.length; i++) {\n      if ( checkboxes[i].checked ) {\n        selected = true;\n        break;\n      }\n    }\n    if ( !selected ) {\n      $(\'form#objectItems\').removeClass(\'selected\');\n      console.log(\'form#objectItems removed .selected\');\n    }\n  };\n\n\n  $(function () {\n\n    // +++++++++++++++++++++++++++\n    // Icon Tooltips\n    // +++++++++++++++++++++++++++\n    $(\'td.zmi-object-type i\').tooltip({\n      \'placement\': \'top\'\n    });\n\n    // +++++++++++++++++++++++++++\n    // Tablefilter/Search Element\n    // +++++++++++++++++++++++++++\n\n    function isModifierKeyPressed(event) {\n      return event.altKey ||\n        event.ctrlKey ||\n        event.metaKey;\n    }\n\n    $(document).keypress(function (event) {\n\n      if (isModifierKeyPressed(event)) {\n        return; // ignore\n      }\n\n      // Set Focus to Tablefilter only when Modal Dialog is not Shown\n      if (!$(\'#zmi-modal\').hasClass(\'show\')) {\n        $(\'#tablefilter\').focus();\n        // Prevent Submitting a form by hitting Enter\n        // https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter\n        if (event.which == 13) {\n          event.preventDefault();\n          return false;\n        };\n      };\n    })\n\n    $(\'#tablefilter\').keyup(function (event) {\n\n      if (isModifierKeyPressed(event)) {\n        return; // ignore\n      }\n\n      var tablefilter = $(this).val();\n      if (event.which == 13) {\n        if (1 === $(\'tbody tr:visible\').length) {\n          window.location.href = $(\'tbody tr:visible a\').attr(\'href\');\n        } else {\n          window.location.href = \'manage_findForm?btn_submit=Find&search_sub:int=1&obj_ids%3Atokens=\' + tablefilter;\n        }\n        event.preventDefault();\n      };\n      $(\'table.objectItems\').find("tbody tr").hide();\n      $(\'table.objectItems\').find("tbody tr td.zmi-object-id a:contains(" + tablefilter + ")").closest(\'tbody tr\').show();\n    });\n\n    // +++++++++++++++++++++++++++\n    // OBJECTIST SORTING: Show skey=meta_type\n    // +++++++++++++++++++++++++++\n    let searchParams = new URLSearchParams(window.location.search);\n    if (searchParams.get(\'skey\') == \'meta_type\') {\n      $(\'td.zmi-object-type i\').each(function () {\n        $(this).parent().parent().find(\'td.zmi-object-id\').prepend(\'')
            # <Static value=Dict(keys=[Constant(value='class', kind=None)], values=[Constant(value='zmi-typename_show', kind=None)]) name=None at 261469407d0> -> __attrs_2616825779024
            __attrs_2616825779024 = _static_2616825061328
            # <span ... (0:0)
            # --------------------------------------------------------
            __append('<span class="zmi-typename_show">\' + $(this).text() + \'</span>\')\n      });\n      $(\'th.zmi-object-id\').addClass(\'zmi-typename_show\');\n    }\n\n  });\n\n</script>\n\n')
            # <Static value=Dict(keys=[], values=[]) name=None at 2614191fed0> -> __attrs_2616825783568
            __attrs_2616825783568 = _static_2616825064080
            # <Symbol value=<DEFAULT> at 261418bf450> -> __default_2616825784848
            __default_2616825784848 = _DEFAULT_MARKER
            # <Value 'here/manage_page_footer' (281:31)> -> __cache_2616825780560
            __token = 12921
            try:
                __zt_tmp = __attrs_2616825783568
            except NameError:
                __zt_tmp = None
            __cache_2616825780560 = _static_2616825053712('path', 'here/manage_page_footer', econtext=econtext)(_static_2616825055312(econtext, __zt_tmp))
            # <BinOp left=<Value 'here/manage_page_footer' (281:31)> op=<class 'chameleon.nodes.Is'> right=<Symbol value=<DEFAULT> at 261418bf450> at 26146f8aa50> -> __condition
            __expression = __cache_2616825780560
            # <Symbol value=<DEFAULT> at 261418bf450> -> __value
            __value = _DEFAULT_MARKER
            __condition = __expression is __value
            if __condition:
                pass
            else:
                __content = __cache_2616825780560
                __content = __convert(__content)
                if __content is not None:
                    __append(__content)
            __append('\n')
        except:
            if __token is not None:
                rcontext.setdefault('__error__', []).append(__tokens[__token] + (__filename, _exc_info()[1]))
            raise
    return {'render': render}