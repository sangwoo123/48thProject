
package com.seoul.his.msv.pre.prescriptionmanagement.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * <pre>
 * com.seoul.his.msv.pre.prescriptionmanagement.to
 *    |_ PrescDtlBean.java
 *
 * </pre>
 * @date : 2016. 12. 6. 오전 10:25:15
 * @version :
 * @author : 백송은
 */

@Getter
@Setter
@ToString
@Dataset(name="dsPrescDtl")
public class PrescDtlBean extends BaseBean{

	private String prescNo, prescCd, emgYn, prnYn, antiYn, holdingYn, mtrlYn, mtrlNm, mtrlBodyPart, examWishDate;
	private String times, insurance, selectCareYn, clncStudyYn, patType, remark, irradiYn, amount, purpose, trfuLoc;
	private String ast, bloodDonor, volume, unit, takeWay, days, prescDtlNm, prescType, nightYn, inCapacity;
	private String inNumber, inMethod, exEmgYn, exPrnYn, exTimes, exInsurance, exRemark, hdEmgYn, hdReoperYn, hdNightYn;
	private String hdTimes, hdStarttime, hdInsurance, hdRemark, mtEmgYn, mtReoperYn, mtNightYn, mtStarttime, mtInsurance, mtMaterLoc;
	private String mtRemark, rbSelectCareIn, rbInsurance, rbRemark, tfEmgYn, tfAmount, tfTimes, tfStarttime, tfInsurance, tfRemark;





}





