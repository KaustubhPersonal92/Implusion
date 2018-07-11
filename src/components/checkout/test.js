import React, { Component } from 'react';
import Header from '../header/Header.js';
import Menu from '../menu/Menu.js';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as productAction from '../../actions/productAction';

class Test extends Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
    return (
        <div className="es-wrapper-color">
            <table className="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td className="esd-email-paddings" valign="top">
                            <table className="es-content es-preheader esd-header-popover" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td className="es-adaptive esd-stripe" esd-custom-block-id="1733" align="center">
                                            <table className="es-content-body" style="background-color: rgb(239, 239, 239);" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td className="esd-structure es-p5t es-p5b es-p20r es-p20l" align="left">
                                                            <table className="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="esd-container-frame" width="270" align="left">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="es-infoblock esd-block-text es-m-txt-c" align="left">
                                                                                            <p>Put your preheader text here</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <table className="es-right" cellspacing="0" cellpadding="0" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="esd-container-frame" width="270" align="left">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="es-infoblock esd-block-text es-m-txt-c" align="right">
                                                                                            <p><a href="http://#" target="_blank">View in browser</a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="es-header" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td className="esd-stripe" esd-custom-block-id="1735" align="center">
                                        <table className="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td className="esd-structure es-p5t es-p5b es-p15r es-p15l" align="left">
                                                        <table className="es-left" cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="es-m-p0r esd-container-frame" width="180" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-image es-m-p0l es-p15l es-m-txt-c" align="left">
                                                                                        <a href="https://stripo.email/" target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_5ebd51945adb862745b1a105fbb2c4f4/images/431502878865957.png" alt="Petshop logo" title="Petshop logo" width="118"/></a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellspacing="0" cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="370" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-menu" esd-img-prev-h="16" esd-img-prev-w="13">
                                                                                        <table className="es-menu" width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr className="links">
                                                                                                    <td className="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px; padding-top: 20px; " id="esd-menu-id-0" width="25.00%" bgcolor="transparent" align="center"> <a style="color: #333333; font-size: 16px;" href="https://stripo.email/">Accessories</a> </td>
                                                                                                    <td className="es-p10t es-p10b es-p5r es-p5l" style="border-left: 0px solid #000000; padding-bottom: 10px; padding-top: 20px; " id="esd-menu-id-1" width="25.00%" bgcolor="transparent" align="center"> <a style="color: #333333; font-size: 16px;" href="https://stripo.email/">Belts</a> </td>
                                                                                                    <td className="es-p10t es-p10b es-p5r es-p5l" style="border-left: 0px solid #000000; padding-bottom: 10px; padding-top: 20px; " id="esd-menu-id-2" width="25.00%" bgcolor="transparent" align="center"> <a style="color: #333333; font-size: 16px;" href="https://stripo.email/">Cages</a> </td>
                                                                                                    <td className="es-p10t es-p10b es-p5r es-p5l" style="border-left: 0px solid #000000; padding-bottom: 10px; padding-top: 20px; " id="esd-menu-id-4" width="25.00%" bgcolor="transparent" align="center"> <a style="color: #333333; font-size: 16px;" href="https://stripo.email/">Other</a> </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="es-content" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td className="esd-stripe" esd-custom-block-id="1754" align="center">
                                        <table className="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td className="esd-structure es-p10t es-p10b es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="560" valign="top" align="center">
                                                                        <table style={{"border-radius": "0px" , "border-collapse": "separate",  "width": "100%"}} cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p10t es-p15b" align="center">
                                                                                        <h1>Thanks for your order<br/></h1>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p5t es-p5b es-p40r es-p40l" align="center">
                                                                                        <p style={{"color": "rgb(51, 51, 51)"}}>You'll receive an email when your items are shipped. If you have any questions, Call us 1-800-1234-5678.<br/></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="esd-block-button es-p15t es-p10b" align="center"> <span className="es-button-border" style="border-radius: 5px; background: rgb(212, 131, 68) none repeat scroll 0% 0%; border-style: solid; border-color: rgb(44, 181, 67); border-top: 0px solid rgb(44, 181, 67); border-bottom: 0px solid rgb(44, 181, 67);"> <a href="https://stripo.email/" className="es-button" target="_blank" style="font-size: 16px; border-top-width: 10px; border-bottom-width: 10px; border-radius: 5px; background: rgb(212, 131, 68) none repeat scroll 0% 0%; border-color: rgb(212, 131, 68);">View order status</a> </span> </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="es-content" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td className="esd-stripe" esd-custom-block-id="1755" align="center">
                                        <table className="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td className="esd-structure es-p20t es-p30b es-p20r es-p20l" align="left">
                                                        <table className="es-left" cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="es-m-p20b esd-container-frame" width="280" align="left">
                                                                        <table style="background-color: rgb(254, 249, 239); border-color: rgb(239, 239, 239); border-collapse: separate; border-width: 1px 0px 1px 1px; border-style: solid;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#fef9ef">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p20t es-p10b es-p20r es-p20l" align="left">
                                                                                        <h4>SUMMARY:</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p20b es-p20r es-p20l" align="left">
                                                                                        <table style="width: 100%;" className="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="left">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td><span style="font-size: 14px; line-height: 150%;">Order #:</span></td>
                                                                                                    <td><span style="font-size: 14px; line-height: 150%;">945645546</span></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td><span style="font-size: 14px; line-height: 150%;">Order Date:</span></td>
                                                                                                    <td><span style="font-size: 14px; line-height: 150%;">Oct 21, 2017</span></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td><span style="font-size: 14px; line-height: 150%;">Order Total:</span></td>
                                                                                                    <td><span style="font-size: 14px; line-height: 150%;">$80.67</span></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <p style="line-height: 150%;"><br/></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table className="es-right" cellspacing="0" cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="280" align="left">
                                                                        <table style="background-color: rgb(254, 249, 239); border-collapse: separate; border-width: 1px; border-style: solid; border-color: rgb(239, 239, 239);" width="100%" cellspacing="0" cellpadding="0" bgcolor="#fef9ef">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p20t es-p10b es-p20r es-p20l" align="left">
                                                                                        <h4>SHIPPING ADDRESS:<br/></h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p20b es-p20r es-p20l" align="left">
                                                                                        <p>Andry Petrin</p>
                                                                                        <p>78 Somewhere St</p>
                                                                                        <p>Somewhere, Canada 99743</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="es-content" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td className="esd-stripe" esd-custom-block-id="1758" align="center">
                                        <table className="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td className="esd-structure es-p10t es-p10b es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table className="es-left" cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="es-m-p0r es-m-p20b esd-container-frame" width="270" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p20l" align="left">
                                                                                        <h4>ITEMS ORDERED</h4>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellspacing="0" cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="270" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text" align="left">
                                                                                        <table style="width: 100%;" className="cke_show_border" cellspacing="1" cellpadding="1" border="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td><span style="font-size:13px;">NAME</span></td>
                                                                                                    <td style="text-align: center;" width="60"><span style="font-size:13px;"><span style="line-height: 100%;">QTY</span></span>
                                                                                                    </td>
                                                                                                    <td style="text-align: center;" width="100"><span style="font-size:13px;"><span style="line-height: 100%;">PRICE</span></span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="esd-structure es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="560" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-spacer es-p10b" align="center">
                                                                                        <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid rgb(239, 239, 239); background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="esd-structure es-p5t es-p10b es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table className="es-left" cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="es-m-p0r es-m-p20b esd-container-frame" width="178" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-image" align="center">
                                                                                        <a href="" target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_075cee78891ca18b1516e76ce7e767a0/images/78761502968147773.jpg" alt="Natural Balance L.I.D., sale 30%" className="adapt-img" title="Natural Balance L.I.D., sale 30%" width="125"/></a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellspacing="0" cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="362" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text" align="left">
                                                                                        <p><br/></p>
                                                                                        <table style="width: 100%;" className="cke_show_border" cellspacing="1" cellpadding="1" border="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>Natural Balance L.I.D. Sweet Potato & Venison</td>
                                                                                                    <td style="text-align: center;" width="60">1</td>
                                                                                                    <td style="text-align: center;" width="100">$20.00</td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <p><br/></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="esd-structure es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="560" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-spacer es-p10b" align="center">
                                                                                        <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid rgb(239, 239, 239); background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="esd-structure es-p5t es-p10b es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table className="es-left" cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="es-m-p0r es-m-p20b esd-container-frame" width="178" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-image" align="center">
                                                                                        <a href="" target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_075cee78891ca18b1516e76ce7e767a0/images/53081502967864113.jpg" alt="Dog Treats" className="adapt-img" title="Dog Treats" width="125"/></a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellspacing="0" cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="362" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text" align="left">
                                                                                        <p><br/></p>
                                                                                        <table style="width: 100%;" className="cke_show_border" cellspacing="1" cellpadding="1" border="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>Dog Treats<br/></td>
                                                                                                    <td style="text-align: center;" width="60">1</td>
                                                                                                    <td style="text-align: center;" width="100">$2.57</td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <p><br/></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="esd-structure es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="560" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-spacer es-p10b" align="center">
                                                                                        <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid rgb(239, 239, 239); background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="esd-structure es-p5t es-p10b es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table className="es-left" cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="es-m-p0r es-m-p20b esd-container-frame" width="178" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-image" align="center">
                                                                                        <a href="" target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_075cee78891ca18b1516e76ce7e767a0/images/22621502873981861.jpg" alt="Natural Balance L.I.D., sale 30%" className="adapt-img" title="Natural Balance L.I.D., sale 30%" width="95"/></a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellspacing="0" cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="362" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text" align="left">
                                                                                        <p><br/></p>
                                                                                        <table style="width: 100%;" className="cke_show_border" cellspacing="1" cellpadding="1" border="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>Blue Buffalo Chicken & Brown Rice</td>
                                                                                                    <td style="text-align: center;" width="60">1</td>
                                                                                                    <td style="text-align: center;" width="100">$18.00</td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <p><br/></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="esd-structure es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="560" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-spacer es-p10b" align="center">
                                                                                        <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid rgb(239, 239, 239); background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="esd-structure es-p5t es-p30b es-p40r es-p20l" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="540" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text" align="right">
                                                                                        <table style="width: 500px;" className="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="right">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="text-align: right; font-size: 18px; line-height: 150%;">Subtotal (3 items):</td>
                                                                                                    <td style="text-align: right; font-size: 18px; line-height: 150%;">$40.57</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="text-align: right; font-size: 18px; line-height: 150%;">Flat-rate Shipping:</td>
                                                                                                    <td style="text-align: right; font-size: 18px; line-height: 150%; color: #d48344;"><strong>FREE</strong></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="text-align: right; font-size: 18px; line-height: 150%;">Discount:</td>
                                                                                                    <td style="text-align: right; font-size: 18px; line-height: 150%;">$0.00</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style="text-align: right; font-size: 18px; line-height: 150%;"><strong>Order Total:</strong></td>
                                                                                                    <td style="text-align: right; font-size: 18px; line-height: 150%; color: #d48344;"><strong>$40.57</strong></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <p style="line-height: 150%;"><br/></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="es-content" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr> </tr>
                                <tr>
                                    <td className="esd-stripe" esd-custom-block-id="1748" align="center">
                                        <table className="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center">
                                            <tbody>
                                                <tr>
                                                    <td className="esd-structure es-p20" esd-general-paddings-checked="false" align="left">
                                                        <table className="es-left" cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="es-m-p0r es-m-p20b esd-container-frame" width="178" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-image es-m-p0l es-m-txt-c" align="left">
                                                                                        <a href="" target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_5ebd51945adb862745b1a105fbb2c4f4/images/431502878865957.png" alt="Petshop logo" title="Petshop logo" width="108"/></a>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p10t es-p5b es-m-txt-c" align="left">
                                                                                        <p>Po Box 3453 Colins St.</p>
                                                                                        <p>Ceduna 4096 Australia</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p5t es-m-txt-c" align="left">
                                                                                        <p>+800 1234 5678 info@petshop.com</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellspacing="0" cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="362" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p15t es-p20b es-m-txt-c" align="left">
                                                                                        <p style="line-height: 150%;"><span style="font-size: 20px; line-height: 150%;">Information</span></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-m-txt-c" align="left">
                                                                                        <p>Vector graphics designed by <a target="_blank" href="http://www.freepik.com/">Freepik</a>.<br/></p>
                                                                                        <p>You are receiving this email because you have visited our site or asked us about regular newsletter<br/></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="esd-block-text es-p10t es-m-txt-c" align="left">
                                                                                        <p style="line-height: 150%; font-size: 12px;">
                                                                                            <a target="_blank" href="https://stripo.email/" style="line-height: 150%; font-size: 12px;">Unsubscribe</a> ♦ <a target="_blank" href="https://stripo.email/" style="font-size: 12px;">Update Preferences</a> ♦ <a target="_blank" href="https://stripo.email/" style="font-size: 12px;">Customer Support</a><br/></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td className="esd-stripe" align="center">
                                        <table className="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                            <tbody>
                                                <tr>
                                                    <td className="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="esd-container-frame" width="560" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="esd-block-image es-infoblock" align="center">
                                                                                        <a target="_blank" href="http://stripo.email/?utm_source=templates&utm_medium=email&utm_campaign=pets&utm_content=trigger_newsletter"> <img src="https://tlr.stripocdn.email/content/guids/CABINET_9df86e5b6c53dd0319931e2447ed854b/images/64951510234941531.png" alt="" width="125"/> </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
</div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch)
  };
}

export default connect("",mapDispatchToProps)(Test);




