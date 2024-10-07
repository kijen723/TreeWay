package com.b107.treeway.api.rating.response;

import com.b107.treeway.api.rating.entity.IndustryDetail;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegionRatingResponse {
    private double ratingScore;
    private String majorBusiness;
    private String industryDetail;
    private String address;
    private Integer monthlySales;
    private Integer monthly_earnings;
    private String host_name;
    private String phone;
    private String tradeName;
    private String floor_class;
    private Integer current_floor;
    private Integer total_floors;
    private Integer square_meter;
    private Integer available_parking;
    private Integer total_parking;
    private Integer premium;
    private Integer deposit;
    private Integer monthly_rent;
    private Integer administration_cost;
    private Integer material_cost;
    private Integer personnel_expense;
    private Integer utility_bill;
    private Integer other_expenses;
    private String additional_information;
    private Integer itemNum;
    private Double latitude;
    private Double longitude;
}
