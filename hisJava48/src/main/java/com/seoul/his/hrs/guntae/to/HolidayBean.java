package com.seoul.his.hrs.guntae.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.guntae.to
 * @Class    HolidayBean.java
 * @Create   2016. 5. 26.
 * @Author   yi
 * @Description
 *
 * @LastUpdated
 *      2016.05.26
 */
@Dataset(name="dsHoliday")
@Getter
@Setter
@ToString
public class HolidayBean extends BaseBean{

	private String
        	appType			//신청구분
          , guntaeGubun		//근태구분
          , startDate		//휴가신청 시작날짜
          , endDate			//휴가실천 마지막날짜
          , holidayStatus	//결재상태
          , holidayNo		//휴가신청번호
          , totalDays		//총일스
          , empNo			//사원번호
          , useDays			//사용일수
          , remainDays		//잔여일수
          , reqTotalDays	//휴가신청총일수
          , belongYear		//기준년도
          , errorCode
          , errorMsg;

}
