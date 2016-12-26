package com.seoul.his.bst.HospitalStaffPersonnelStatus.to;



import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @Package  com.seoul.his.bst.HospitalStaffPersonnelStatus.to
 * @Class    PerconaldateBean.java
 * @Create   2016. 12. 24.
 * @Author   박상우
 * @Description
 *		인적사항 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmPerconaldate")
public class PerconaldateBean extends BaseBean{

	 String height           //신장
			,weight          //체중
			,eyeseght        //시력
			,colorblind      //색신
			,bloodType       //혈액형
			,medicalHistory  //의료기록
			,religion        //종교
			,empNo           //사번
			,hobby           //취미
			,talent          //특기
			,realestate      //부동산
			,lifeLevel       //생활정도
			,living          //주거
			,citizenship     //시민권
			,perresi         //영주권
			,ctyName;        //국명

}
