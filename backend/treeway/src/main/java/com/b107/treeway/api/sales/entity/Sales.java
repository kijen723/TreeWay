package com.b107.treeway.api.sales.entity;

import com.b107.treeway.api.rating.entity.IndustryDetail;
import com.b107.treeway.api.rating.entity.Region;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "sales")
public class Sales {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sales_id", nullable = false)
    private Long salesId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "industry_detail_id")
    private IndustryDetail industryDetail;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "region_id")
    private Region region;

    //주소
    @Column(name = "address", length = 255)
    private String address;

    //월매출
    @Column(name = "monthly_sales")
    private Integer monthlySales;

    //월 수익
    @Column(name = "monthly_earnings")
    private Integer monthlyEarnings;

    //이름
    @Column(name = "sale_item_name", length = 255)
    private String saleItemName;

    //전화번호
    @Column(name = "phone", length = 255)
    private String phone;

    //상호명
    @Column(name = "tradename", length = 255)
    private String tradename;

    //지상/하
    @Column(name = "floor_class", length = 255)
    private String floorClass;

    //실제 층 수
    @Column(name = "current_floor")
    private Integer currentFloor;

    //총 층 수
    @Column(name = "total_floors")
    private Integer totalFloors;

    // 평수
    @Column(name = "square_meter")
    private Integer squareMeter;

    // 주차 가능 공간
    @Column(name = "available_parking")
    private Integer availableParking;

    // 총 주차 공간
    @Column(name = "total_parking")
    private Integer totalParking;

    // 권리금
    @Column(name = "premium")
    private Integer premium;

    // 보증금
    @Column(name = "deposit")
    private Integer deposit;

    // 월세
    @Column(name = "monthly_rent")
    private Integer monthlyRent;

    // 권리비
    @Column(name = "administration_cost")
    private Integer administrationCost;

    // 재료비
    @Column(name = "material_cost")
    private Integer materialCost;

    // 인건비
    @Column(name = "personnel_expense")
    private Integer personnelExpense;

    // 공과금
    @Column(name = "utility_bill")
    private Integer utilityBill;

    // 기타 경비
    @Column(name = "other_expenses")
    private Integer otherExpenses;

    // 추가 정보
    @Column(name = "additional_information", columnDefinition = "TEXT")
    private String additionalInformation;

    // 매물 번호
    @Column(name = "itemnum")
    private Integer itemNum;

    // 위도
    @Column(name = "latitude", precision = 10, scale = 8)
    private BigDecimal latitude;

    // 경도
    @Column(name = "longitude", precision = 11, scale = 8)
    private BigDecimal longitude;
}
