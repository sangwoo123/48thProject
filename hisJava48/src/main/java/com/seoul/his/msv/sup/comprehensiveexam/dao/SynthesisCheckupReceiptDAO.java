package com.seoul.his.msv.sup.comprehensiveexam.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.comprehensiveexam.to.ReducBean;
import com.seoul.his.msv.sup.comprehensiveexam.to.SynthesisCheckupReceiptBean;



public interface SynthesisCheckupReceiptDAO {
    
    /* 종합검진 접수 - 접수조회 */
    List<SynthesisCheckupReceiptBean> selectReceiptList(Map<String, String> argsMap);
    
    /* 종합검진 접수 - 예약조회 */
    List<RsvtBean> selectRsvtList(Map<String, String> argsMap);
    
    /* 종합검진 접수 - 감면조회 */
    List<ReducBean> selectReducList(Map<String, String> argsMap);
    
    /* 종합검진 접수 - 예약검사 조회 */
    RsvtBean selectRsvtInspList(Map<String, String> argsMap);

    /* 종합검진 접수 - 선택검사 조회 */
    List<InspBean> selectExChoInspList(Map<String, String> argsMap);
    
    /* 종합검진 접수 - 선택검사 일괄처리 추가 */
    void insertPckInsp(InspBean inspBean);
    
    /* 종합검진 접수 - 선택검사 일괄처리 삭제 */
    void deletePckInsp(InspBean inspBean);

    /* 종합검진 접수 - 접수 등록 */
    int insertReceipt(SynthesisCheckupReceiptBean receiptBean);
    
    /* 종합검진 접수 - 접수 취소 여부 */
    void updateCancelYN(SynthesisCheckupReceiptBean receiptBean);

    /* 종합검진 접수 - 저장 */
    void updateReceipt(SynthesisCheckupReceiptBean receiptBean);

    
}
