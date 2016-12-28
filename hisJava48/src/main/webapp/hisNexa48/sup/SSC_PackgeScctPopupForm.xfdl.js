(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("SSC_PackgeScctPopupForm");
                this.set_classname("SSC_PackgeScctPopupForm");
                this.set_titletext("종합검진 패키지 검사항목 추가 팝업창");
                this._setFormPosition(0,0,828,475);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findExPckInspList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findExPckInspList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsScct=dsScct</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchPckInspProcess</Col><Col id=\"URL\">his::sup/comprehensiveexam/batchPckInspProcess.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\">dsScct=dsScct:U</Col><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">findExChoInspList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findExChoInspList.do</Col><Col id=\"outData\">dsScct=dsScct</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\"/><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">batchChoInspProcess</Col><Col id=\"URL\">his::sup/comprehensiveexam/batchChoInspProcess.do</Col><Col id=\"inData\">dsChoInsp=dsPckInspU:U</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"outData\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPckInspU", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("false");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseYN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOcsDivCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInspDivCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsScct", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC031</Col><Col id=\"dsName\">dsGenderCd</Col></Row><Row><Col id=\"dsName\">dsInspDivCd</Col><Col id=\"code\">SC049</Col></Row><Row><Col id=\"code\">SC035</Col><Col id=\"dsName\">dsOcsDivCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.43%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10.62%", "3", null, "45", "52.94%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 검사항목 추가");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "4%", "63", null, "352", "1.71%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsScct");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_treeuseimage("false");
            obj.style.set_font("돋움,8,antialias");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"62\"/><Column size=\"165\"/><Column size=\"196\"/><Column size=\"55\"/><Column size=\"60\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"코드\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사명\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"처방명\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"OCS구분\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"결과부서\"/><Cell col=\"6\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:check\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:inspCd\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:inspNm\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:ocsNm\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:ocsDivCd\" combodataset=\"dsOcsDivCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:rsltDeptNm\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:amt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "91.14%", "423", "50", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 828, 475, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_PackgeScctPopupForm");
            		p.set_titletext("종합검진 패키지 검사항목 추가 팝업창");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_PackgeScctPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SSC_PackgeScctPopupForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 종합검진 검사 패키지별 검사 추가 시 도움창								*
        *                                                                               *
        * @Path		    종합검진 - 기초정보관리 - 패키지관리 - 패키지 검사추가  	*
        * @Description 	종합검진 패키지별 검사 추가 시 팝업    	    				*
        * 																				*
        *																				*
        * @Author	    박상우  						                                		*
        * 									                                            *
        * Created on 2016. 12. 01.                             		                    *
        *									                                            *
        ********************************************************************************/

        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 

        // 공통 변수
        var parentId

        

        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        

        this.SSC_PackgeScctPopupForm_onload = function(obj,e)
        {
        		this.gfnBind();
        	parentId = this.opener.name;
        	
        	if(parentId =="SSC_PackageForm")
        	{
        		if(!this.gfnIsNull(this.parent.param))									
        		{	
        			var pckCd = this.parent.param;
        			var useYn = 'Y';
        			var argument = 'pckCd='+pckCd+' useYn='+useYn;
        			var row = this.dsService.findRow('serviceID' , "findExPckInspList");
        			this.dsService.setColumn(row, "argument", argument);
        			
        			this.gfnService("findExPckInspList",false);
        		}
        	}
        	else if(parentId =="SSC_SynthesisCheckupReservationForm" || parentId =="SSC_SynthesisCheckupReceiptForm")
        	{
                var rsvtNo = this.parent.param;
        		
        		var useYn = 'Y';
        		var argument = 'useYn='+useYn+' rsvtNo='+rsvtNo;
        		var row = this.dsService.findRow('serviceID' , "findExChoInspList");
        		this.dsService.setColumn(row, "argument", argument);
        		
        		this.gfnService("findExChoInspList",false);
        		
        	}
        }

        this.inspGrid_oncelldblclick = function(obj,e)
        {
        	if(parentId == "SSC_PackageForm"){
        		this.dsPckInspU.copyData(this.dsInsp);
        		this.dsPckInspU.filter("check == 1");
        		
        		for( var i = 0 ; i < this.dsPckInspU.rowcount ; i++)
        		{
        			//this.fn_setUserData(this.dlPckInspU,i);
        			this.dsPckInspU.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        		
        		this.gfnService("batchPckInspProcess",false);
        		alert(123);
        	}else if(parentId =="SSC_SynthesisCheckupReservationForm" || parentId =="SSC_SynthesisCheckupReceiptForm"){
        	
        	
        		
        		
        			
        			
        				var inspCd = this.dsScct.getColumn(this.dsScct.rowposition, "inspCd");
        				var inspNm = this.dsScct.getColumn(this.dsScct.rowposition, "inspNm");
        				var amt = this.dsScct.getColumn(this.dsScct.rowposition, "amt");
        				
        				var openerDs = this.opener.dsChoInsp;
        				var openerDsRow =openerDs.getRowCount();
        				alert(inspCd);
        				
        				openerDs.addRow();
        				openerDs.setColumn(openerDsRow,"inspCd",inspCd);
        				openerDs.setColumn(openerDsRow,"inspNm",inspNm);
        				openerDs.setColumn(openerDsRow,"qnt",1);
        				openerDs.setColumn(openerDsRow,"amt",amt);
        				//openerDs.setColumn(openerDsRow,"inspPlnDate",this.opener.compBox.inspDateCal.value);
        				//openerDs.setColumn(openerDsRow,"inspPlnDate",this.opener.compBox.rsvtNoEd.value);
        				
        		
        	}
        	this.opener.pCode(1);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPckInspU.addEventHandler("onrowposchanged", this.dlPckInsp_onrowposchanged, this);
            this.dsScct.addEventHandler("onrowposchanged", this.dlPckInsp_onrowposchanged, this);
            this.addEventHandler("onload", this.SSC_PackgeScctPopupForm_onload, this);
            this.inspGrid.addEventHandler("onsetfocus", this.inspGrid_onsetfocus, this);
            this.inspGrid.addEventHandler("oncelldblclick", this.inspGrid_oncelldblclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);

        };

        this.loadIncludeScript("SSC_PackgeScctPopupForm.xfdl");

       
    };
}
)();
