package com.seoul.his.acc.budget.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * <pre>
 * com.seoul.his.acc.budget.to
 *    |_ RunBudgBean.java
 *
 * </pre>
 * @date : 2016. 12. 26. 오후 3:26:12
 * @version :
 * @author : 응디꿍디
 */
@Getter
@Setter
@ToString

@Dataset(name = "dsRunBudg")

public class RunBudgBean extends BaseBean{

	private String 	cngAmount,         // 변경금액
    allotPlanAmount,   // 계획예산금액
    bimokCd,           // 비목코드
    accYear,           // 회계연도
    causeAmount,       // 총인원금액
    budgAmount,        // 예산
    budgBal,           // 예산잔액
    bimokNm,           // 예산비목명
    acntNm,            // 계정명칭
    bimokLevel,        // 수준
    executionPercent;  // 집행률

}





