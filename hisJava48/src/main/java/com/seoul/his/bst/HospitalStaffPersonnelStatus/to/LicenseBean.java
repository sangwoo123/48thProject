package com.seoul.his.bst.HospitalStaffPersonnelStatus.to;



import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @Package  com.seoul.his.bst.HospitalStaffPersonnelStatus.to
 * @Class    LicenseBean.java
 * @Create   2016. 9. 07.
 * @Author   박상우
 * @Description
 *		자격정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmLicense")
public class LicenseBean extends BaseBean{

	 String licenseSeq   //면허시퀀스
				,empNo       //사원번호
				,acqDay      //최득일
				,licenseType //종별
				,licenseNo   //자격면허번호
				,issue;		 //발령청

}
