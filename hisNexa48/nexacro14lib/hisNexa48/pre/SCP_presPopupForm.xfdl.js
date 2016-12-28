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
                this.set_name("MB_PrscDtlPopupForm");
                this.set_classname("MB_PrscDtlPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,623,250);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPrscDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"undefined\" size=\"100\"/><Column id=\"patType\" type=\"undefined\" size=\"100\"/><Column id=\"mtrlYn\" type=\"undefined\" size=\"100\"/><Column id=\"times\" type=\"undefined\" size=\"100\"/><Column id=\"remark\" type=\"undefined\" size=\"100\"/><Column id=\"amount\" type=\"undefined\" size=\"100\"/><Column id=\"insurance\" type=\"undefined\" size=\"100\"/><Column id=\"irradiYn\" type=\"undefined\" size=\"100\"/><Column id=\"purpose\" type=\"undefined\" size=\"100\"/><Column id=\"prnYn\" type=\"undefined\" size=\"100\"/><Column id=\"prescCd\" type=\"undefined\" size=\"100\"/><Column id=\"antiYn\" type=\"undefined\" size=\"100\"/><Column id=\"emgYn\" type=\"undefined\" size=\"100\"/><Column id=\"holdingYn\" type=\"undefined\" size=\"100\"/><Column id=\"mtrlNm\" type=\"undefined\" size=\"100\"/><Column id=\"takeWay\" type=\"undefined\" size=\"100\"/><Column id=\"unit\" type=\"undefined\" size=\"100\"/><Column id=\"trfuLoc\" type=\"undefined\" size=\"100\"/><Column id=\"ast\" type=\"undefined\" size=\"100\"/><Column id=\"volume\" type=\"undefined\" size=\"100\"/><Column id=\"prescType\" type=\"undefined\" size=\"100\"/><Column id=\"selectCareYn\" type=\"undefined\" size=\"100\"/><Column id=\"examWishDate\" type=\"undefined\" size=\"100\"/><Column id=\"clncStudyYn\" type=\"undefined\" size=\"100\"/><Column id=\"mtrlBodyPart\" type=\"undefined\" size=\"100\"/><Column id=\"bloodDonor\" type=\"undefined\" size=\"100\"/><Column id=\"prescDtlNm\" type=\"undefined\" size=\"100\"/><Column id=\"days\" type=\"undefined\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrescValue", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"100\"/><Column id=\"codeValue\" type=\"STRING\" size=\"100\"/><Column id=\"prescNo\" type=\"STRING\" size=\"100\"/><Column id=\"patNo\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPatientDsPrscList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findDsPrescList.do</Col><Col id=\"outData\">dsPatientDs=dsPatientDs dsPatientPrsc=dsPatientPrsc</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("idsPrscType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">검사</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">수혈</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">재활</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatientDs", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"surYn\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDiseaseList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findDiseaseList.do</Col><Col id=\"outData\">dsDisease=dsDisease</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findReceiptList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findReceiptList.do</Col><Col id=\"outData\">dsOutpaReceipt=dsOutpaReceipt</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findFeeListEMR</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findFeeListEMR.do</Col><Col id=\"outData\">dsFeeCd=dsFeeCd</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchDisePrescProcess</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/batchDisePrescProcess.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">gfnCallbackFunc</Col><Col id=\"inData\">dsPatientDs=dsPatientDs:u dsPatientPrsc=dsPatientPrsc:u dsPrescValue=dsPrescValue:u dsPrescDtl=dsPrescDtl:u dsOutpaReceipt=dsOutpaReceipt:u</Col></Row><Row><Col id=\"serviceID\">findPatientDsPrscList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findDsPrescList.do</Col><Col id=\"outData\">dsPatientDs=dsPatientDs dsPatientPrsc=dsPatientPrsc</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findPatientPrscDtlList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findPrescDtlList.do</Col><Col id=\"outData\">dsPrescDtl=dsPrescDtl</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findPatientPrscList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findPrescList.do</Col><Col id=\"outData\">dsPatientPrsc=dsPatientPrsc dsPrescValue=dsPrescValue</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "1.6%", "8", null, "41", "86%", null, this);
            obj.set_taborder("6");
            obj.set_text("처방");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Grid("diseaseGrid", "absolute", "10", "58", "592", "172", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsPatientDs");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"246\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"처방코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"상병명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"진료과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"환자번호\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"처방일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expand\" style=\"align:center middle;\" text=\"bind:prescNo\" expandshow=\"show\"/><Cell col=\"1\" text=\"bind:codeNm\"/><Cell col=\"2\" text=\"bind:dept\"/><Cell col=\"3\" text=\"bind:patNo\"/><Cell col=\"4\" text=\"bind:prescDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 623, 250, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_PrscDtlPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_presPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SCP_presPopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        처방상세 조회화면                                           						                                                                         
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	처방 조회 다이얼로그						
        @Author	  		왕민혁				    			                        								                                            
        @Create         2016. 12. 21.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  

        
        // 조회
        this.MB_PrscDtlPopupForm_onload = function(obj,e)
        {
        	var patNo = this.parent.patNo;
            var argument = 'patNo='+patNo;
        	var serviceRow = this.dsService.findRow("serviceID", "findPatientDsPrscList");
        	this.dsService.setColumn(serviceRow,"argument",argument);
            this.gfnService("findPatientDsPrscList",false);
        }

        this.diseaseGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;   // arrRtn에 차곡차곡담기위해 배열로 만든다
        	var i=0;
        	arrRtn[i++] = this.dsPatientDs.getColumn(e.row,"prescNo");	// 처방번호
        	arrRtn[i++] = this.dsPatientDs.getColumn(e.row,"codeNm");	// 진단명
            this.opener.setPrscInfo(arrRtn);
            this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_PrscDtlPopupForm_onload, this);
            this.diseaseGrid.addEventHandler("oncelldblclick", this.diseaseGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("SCP_presPopupForm.xfdl");

       
    };
}
)();
