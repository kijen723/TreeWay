package com.b107.treeway.api.sales.entity;

import com.b107.treeway.api.rating.entity.IndustryDetail;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sales_item")
public class SalesItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sales_item_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "industry_detail_id", nullable = false)
    private IndustryDetail industryDetail;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "monthly_sales", nullable = false)
    private Integer monthly_sales;

    @Column(name = "monthly_earnings", nullable = false)
    private Integer monthly_earnings;

    @Column(name = "host_name", nullable = false)
    private String host_name;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "tradename", nullable = false)
    private String tradename;

    @Column(name = "floor_class", nullable = false)
    private String floor_class;

    @Column(name = "current_floor", nullable = false)
    private Integer current_floor;

    @Column(name = "total_floors", nullable = false)
    private Integer total_floors;

    @Column(name = "square_meter", nullable = false)
    private Integer square_meter;

    @Column(name = "available_parking", nullable = false)
    private Integer available_parking;

    @Column(name = "total_parking", nullable = false)
    private Integer total_parking;

    @Column(name = "premium", nullable = false)
    private Integer premium;

    @Column(name = "deposit", nullable = false)
    private Integer deposit;

    @Column(name = "monthly_rent", nullable = false)
    private Integer monthly_rent;

    @Column(name = "administration_cost", nullable = false)
    private Integer administration_cost;

    @Column(name = "material_cost", nullable = false)
    private Integer material_cost;

    @Column(name = "personnel_expense", nullable = false)
    private Integer personnel_expense;

    @Column(name = "utility_bill", nullable = false)
    private Integer utility_bill;

    @Column(name = "other_expenses", nullable = false)
    private Integer other_expenses;

    @Column(name = "additional_information", nullable = false, length = 3000)
    private String additional_information;

    @Column(name = "itemnum", nullable = false)
    private Integer itemnum;

    @Column(name = "latitude", nullable = false)
    private Double latitude;

    @Column(name = "longitude", nullable = false)
    private Double longitude;

}
