(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c04a8"],{"40c9":function(e,t,n){"use strict";n.r(t),t["default"]={props:{elementProps:{type:Object,default:function(){return{defaultInfo:{}}}}},computed:{innerItems:function(){return this.elementProps.defaultInfo}},data:function(){return{}},methods:{},render:function(){var e=this,t=arguments[0];return t("div",[t("lbs-image-gallery",{style:{margin:"16px 0"},attrs:{value:this.innerItems.imageUrl},on:{change:function(t){e.innerItems.imageUrl=t}}}),t("a-form-item",{attrs:{label:"提示单词","label-col":{span:6},"wrapper-col":{span:16,offset:2}}},[t("a-input",{attrs:{value:this.innerItems.tipWord},on:{change:function(t){e.innerItems.tipWord=t.target.value}}})]),t("a-form-item",{attrs:{label:"正确单词","label-col":{span:6},"wrapper-col":{span:16,offset:2}}},[t("a-input",{attrs:{value:this.innerItems.matchWord},on:{change:function(t){e.innerItems.matchWord=t.target.value}}})])])}}}}]);