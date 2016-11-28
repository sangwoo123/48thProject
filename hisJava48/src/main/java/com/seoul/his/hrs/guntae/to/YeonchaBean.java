package com.seoul.his.hrs.guntae.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.guntae.to
 * @Class    YeonchaBean.java
 * @Create   2016. 5. 26.
 * @Author   yi
 * @Description
 *
 * @LastUpdated
 *      2016.05.26
 */
@Dataset(name="dsYeoncha")
@Getter
@Setter
@ToString
public class YeonchaBean extends BaseBean{

	private String
        	 belongYear            //해당년도
        	,standardYeoncha       //연차기준일
        	,yeonchaDays           //발생연차일수
        	,gunsokDays            //발생근속일수
        	,jojeongDays           //발생조정일수
        	,totalHolidays         //만근시휴가일수
        	,compsYeoncha          //휴가보상가능 연차일수
        	,compsBojeonDays       //휴가보상가능 보전일수
        	,yeonwolchaBojeonDays  //연월차보전일수
        	,empNo                 //사원번호
        	,empNm                 //사원명
        	,deptCd                //부서코드
        	,deptNm;               //부서명
}
