package com.b107.treeway.api.member.response;

import com.b107.treeway.api.analysis.entity.AnalysisResume;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnalyzeResponse {

    private Long memberId;
    private Long id;
    private String majorBusiness;
    private String industryDetailName;
    private String address;
    private Integer monthlySales;
    private Integer monthlyEarnings;
    private String hostName;
    private String phone;
    private String tradeName;
    private String floorClass;
    private Integer currentFloor;
    private Integer totalFloors;
    private Integer squareMeter;
    private Integer availableParking;
    private Integer totalParking;
    private Integer premium;
    private Integer deposit;
    private Integer monthlyRent;
    private Integer administrationCost;
    private Integer materialCost;
    private Integer personnelExpense;
    private Integer utilityBill;
    private Integer otherExpenses;
    private String additionalInformation;
    private Integer itemNum;
    private Double latitude;
    private Double longitude;

    public static AnalyzeResponse convertToAnalyzeResponse(AnalysisResume analysisResume) {
        return new AnalyzeResponse(
                analysisResume.getMemberId(),
                analysisResume.getId(),
                analysisResume.getMajorBusiness(),
                analysisResume.getIndustryDetailName(),
                analysisResume.getAddress(),
                analysisResume.getMonthlySales(),
                analysisResume.getMonthlyEarnings(),
                analysisResume.getHostName(),
                analysisResume.getPhone(),
                analysisResume.getTradeName(),
                analysisResume.getFloorClass(),
                analysisResume.getCurrentFloor(),
                analysisResume.getTotalFloors(),
                analysisResume.getSquareMeter(),
                analysisResume.getAvailableParking(),
                analysisResume.getTotalParking(),
                analysisResume.getPremium(),
                analysisResume.getDeposit(),
                analysisResume.getMonthlyRent(),
                analysisResume.getAdministrationCost(),
                analysisResume.getMaterialCost(),
                analysisResume.getPersonnelExpense(),
                analysisResume.getUtilityBill(),
                analysisResume.getOtherExpenses(),
                analysisResume.getAdditionalInformation(),
                analysisResume.getItemNum(),
                analysisResume.getLatitude(),
                analysisResume.getLongitude()
        );
    }
}
