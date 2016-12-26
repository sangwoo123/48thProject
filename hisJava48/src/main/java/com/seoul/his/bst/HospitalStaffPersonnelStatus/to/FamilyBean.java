package com.seoul.his.bst.HospitalStaffPersonnelStatus.to;



import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @Package  com.seoul.his.bst.HospitalStaffPersonnelStatus.to
 * @Class    FamilyBean.java
 * @Create   2016. 12. 24.
 * @Author   박상우
 * @Description
 *		가족정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmFamily")
public class FamilyBean extends BaseBean{

	String famSeq  //가족시퀀스
		  ,empNo   //사원번호
		  ,name    //성명
		  ,relt    //관계
		  ,spptYn  //부양여부
		  ,rrn;    //주민번호

}
