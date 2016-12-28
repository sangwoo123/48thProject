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
                this.set_name("SSC_PackgeAddPopupForm");
                this.set_classname("SSC_PackgeAddPopupForm");
                this.set_titletext("종합검진 패키지 추가 팜업창");
                this._setFormPosition(0,0,528,423);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">batchPckProcess</Col><Col id=\"URL\">his::sup/comprehensiveexam/batchPckProcess2.do</Col><Col id=\"inData\">dsPck=dsPck:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">pckCallBack</Col></Row><Row><Col id=\"serviceID\">findPckList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findPckList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPck=dsPck</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">pckCallBack</Col></Row></Rows>");
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

            obj = new Dataset("dsPck", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"genderCd\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC031</Col><Col id=\"dsName\">dsGenderCd</Col></Row><Row><Col id=\"dsName\">dsInspDivCd</Col><Col id=\"code\">SC049</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">llll</Col><Col id=\"value\">lllll</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.38%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10.65%", "3", null, "45", "56.65%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 패키지 추가");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "5.3%", "66", null, "310", "4.55%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "5.68%", "75", null, "295", "7.2%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "3.91%", "13", null, "27", "76.09%", null, this.compBox);
            obj.set_taborder("45");
            obj.set_text("패키지코드");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "3.91%", "60", null, "27", "76.09%", null, this.compBox);
            obj.set_taborder("46");
            obj.set_text("패키지명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "3.91%", "107", null, "27", "76.09%", null, this.compBox);
            obj.set_taborder("47");
            obj.set_text("검진구분");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "3.91%", "154", null, "27", "76.09%", null, this.compBox);
            obj.set_taborder("48");
            obj.set_text("성별");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "3.91%", "201", null, "27", "76.09%", null, this.compBox);
            obj.set_taborder("49");
            obj.set_text("검사금액");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("amtMask", "absolute", "26.74%", "201", null, "27", "2.83%", null, this.compBox);
            obj.set_taborder("50");
            obj.set_mask("###,###");
            obj.set_autoselect("true");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "3.91%", "248", null, "27", "76.09%", null, this.compBox);
            obj.set_taborder("51");
            obj.set_text("사용여부");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckCdEd", "absolute", "26.74%", "13", null, "27", "2.83%", null, this.compBox);
            obj.set_taborder("52");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckNmEd", "absolute", "26.74%", "60", null, "27", "2.83%", null, this.compBox);
            obj.set_taborder("53");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("inspDivCombo", "absolute", "26.74%", "107", null, "27", "2.83%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_innerdataset("dsInspDivCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("genderCombo", "absolute", "26.74%", "154", null, "27", "2.83%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_innerdataset("dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("useYnCombo", "absolute", "26.74%", "248", null, "27", "2.83%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_innerdataset("dsUseYN");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Button("saveBtn", "absolute", "75.57%", "383", "50", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "85.98%", "383", "50", "25", null, null, this);
            obj.set_taborder("4");
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
            obj = new Layout("default", "", 460, 239, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 528, 423, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_PackgeAddPopupForm");
            		p.set_titletext("종합검진 패키지 추가 팜업창");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","compBox.pckCdEd","value","dsPck","pckCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.pckNmEd","value","dsPck","pckNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.inspDivCombo","value","dsPck","inspDivCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.genderCombo","value","dsPck","genderCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.amtMask","value","dsPck","amt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.useYnCombo","value","dsPck","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_PackgeAddPopupForm.xfdl", "scripts::supScripts.xjs");
        this.addIncludeScript("SSC_PackgeAddPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SSC_PackgeAddPopupForm.xfdl", function() {

        // 공통 스크립트
        //include "scripts::supScripts.xjs";
        //include "scripts::commonScripts.xjs"; 

        // 코드바인드 및 수정할 패키지 조회 
        this.SSC_PackgeAddPopupForm_onload = function(obj,e)
        {
        		this.gfnBind();

        	
        		if(!this.gfnIsNull(this.parent.param))			
        	{	
        		alert(this.parent.param);
        		
        		var pckCd = this.parent.param;
        		var argument = 'pckCd='+pckCd;
        		var row = this.dsService.findRow('serviceID' , "findPckList");
        		this.dsService.setColumn(row, "argument", argument);
        		

        		this.gfnService("findPckList");
        		
        		this.compBox.pckCdEd.set_enable(false);
        		this.compBox.genderCombo.set_enable(false);
        		
        	}
        	else							
        	{	
        		this.dsPck.addRow();
        	}
        	
        }

        // 저장
        this.saveBtn_onclick=function(obj,e)
        {
        	if(this.supCheckMdData(this.compBox))
        	{
        		//this.fn_setUserData(this.dsPck);
        		this.gfnService("batchPckProcess");
        	}
        }

        //  저장 후 callBack
        this.pckCallBack=function(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	}else{
        		trace(this.dsPck.saveXML());
        		this.opener.pCode(1);
        		this.close();
        	}
        }

        // 닫기
        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SSC_PackgeAddPopupForm_onload, this);
            this.compBox.useYnCombo.addEventHandler("onitemchanged", this.compBox_useYnCombo_onitemchanged, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);

        };

        this.loadIncludeScript("SSC_PackgeAddPopupForm.xfdl");

       
    };
}
)();
