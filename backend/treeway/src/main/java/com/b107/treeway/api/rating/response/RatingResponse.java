package com.b107.treeway.api.rating.response;

import com.b107.treeway.api.rating.entity.IndustryDetail;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RatingResponse {
    private Long id;
    private double ratingScore;
    private String majorBusiness;
    private String industryDetail;
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
}
